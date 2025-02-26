import { FC } from 'react';
import { Spinner } from '../Spinner';
import { Body, Header } from './components';

interface ITableProps {
  body: Array<string | number | null | JSX.Element>[];
  headers: Array<string | JSX.Element>;
  isLoading: boolean;
  className?: string;
}

export const Table: FC<ITableProps> = ({
  body,
  headers,
  isLoading,
  className,
}) => {
  return (
    <>
      <div className={`relative shadow-md overflow-x-auto ${className}`}>
        <table className={`w-full text-sm text-left text-gray-400`}>
          <thead className='text-xs text-gray-white uppercase bg-gray-900 sticky z-20 top-0 w-full'>
            <Header headers={headers} />
          </thead>
          <tbody>{!isLoading && <Body body={body} />}</tbody>
        </table>
        {isLoading && (
          <div className='pb-5'>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};
