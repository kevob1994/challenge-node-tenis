import { ITennisTournament } from '@/types/interfaces';
import React, { FC } from 'react';
import { SectionInfo } from './SectionInfo';

interface IInfoTournamentProps {
  tournament: ITennisTournament;
}

export const InfoTournament: FC<IInfoTournamentProps> = ({ tournament }) => {
  return (
    <div className='text-white'>
      <h4 className='text-2xl'>{tournament?.tourney_name}</h4>

      <SectionInfo title='Jugador' value={tournament?.singles_winner_name} />
      <SectionInfo
        title='Total de veces que ganó el torneo'
        value={tournament?.total_wins}
      />
      <SectionInfo
        title='Fecha de la ultima victoria'
        value={`${tournament?.tourney_day}-${tournament?.tourney_month}-${tournament?.tourney_year}`}
      />
      <SectionInfo
        title='Condiciones del torneo'
        value={tournament?.tourney_conditions}
      />
      <SectionInfo title='Superficie' value={tournament?.tourney_surface} />
    </div>
  );
};
