import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { Container, Row, Col } from 'react-grid-system';
import { ITennisTournament } from '@/types/interfaces';
import { useClient } from '@/hooks';
import { Header, Input, Modal, Table } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { InfoTournament } from './components';

export const Home: FC = () => {
  const { client } = useClient();
  const [search, setSearch] = useState('');
  const [tournament, setTournament] = useState<ITennisTournament | undefined>(
    undefined
  );

  const headers = [
    'Año del torneo',
    'Mes del torneo',
    'Día del torneo',
    'Nombre del torneo',
    'ubicación del torneo',
    'ganador individual con mas victorias',
    'Ver información',
  ];

  const { data, isLoading } = useQuery(
    ['tennis_tournament'],
    async () => await client<ITennisTournament[]>(`service/excel`),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const body = data?.length
    ? data
        .filter(({ tourney_name }) =>
          tourney_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .map((tourney) => {
          return [
            tourney.tourney_year,
            tourney.tourney_month,
            tourney.tourney_day,
            tourney.tourney_name,
            tourney.tourney_location,
            tourney.singles_winner_name,
            <div className='flex items-center text-gray-600 hover:text-gray-400 cursor-pointer'>
              <p className='mr-3' onClick={() => setTournament(tourney)}>
                Mas info
              </p>{' '}
              <FontAwesomeIcon icon={faEye} />
            </div>,
          ];
        })
    : [];

  return (
    <>
      <Modal
        title='Información del torneo'
        onClose={() => setTournament(undefined)}
        open={!!tournament}
      >
        {tournament && <InfoTournament tournament={tournament} />}
      </Modal>
      <Header />
      <Container className='md:m-5'>
        <Row>
          <Col className='bg-gray-900 py-6 md:rounded-md shadow-2xl md:m-5'>
            <div className='flex items-center  flex-col md:flex-row'>
              <p className='text-base font-medium md:text-2xl text-white mb-5 mr-10 w-full ml-10 md:ml-0 md:w-auto'>
                Buscar por nombre de torneo:
              </p>
              <div className='flex-1 w-full md:w-auto'>
                {' '}
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  searchIcon
                />
              </div>
            </div>

            <Table
              headers={headers}
              body={body || []}
              isLoading={isLoading && !data}
							className="max-h-[calc(100vh-214px)] md:max-h-[calc(100vh-250px)] overflow-y-auto relative"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
