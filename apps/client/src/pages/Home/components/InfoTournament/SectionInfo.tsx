import React, { FC } from 'react';

interface ISectionInfoProps {
  title: string;
  value?: string | number;
}

export const SectionInfo: FC<ISectionInfoProps> = ({ title, value }) => {
  return (
    <>
      <p className='my-5 '>
			<span className='text-lg font-medium mr-3 text-gray-400'>{title}:</span> {value ? value : '-'}
      </p>
    </>
  );
};
