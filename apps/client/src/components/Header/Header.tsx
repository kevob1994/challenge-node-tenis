import { AuthContext } from '@/context/auth';
import { FC, useContext } from 'react';

export const Header: FC = () => {
  const { logout, user } = useContext(AuthContext);

  return (
    <header className='sticky top-0 z-10'>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <a href='#' className='flex items-center'>
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              Bienvenido {user?.first_name} {user?.last_name}
            </span>
          </a>
          <a
            onClick={logout}
            className='text-gray-800 cursor-pointer dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
          >
            Cerrar sesión
          </a>
        </div>
      </nav>
    </header>
  );
};
