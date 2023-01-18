import { FC } from 'react';

import { Skeleton } from 'components/atoms';
import { MyTablesState, MyTablesList } from 'components/organisms';

import { useGetMyTables } from 'hooks/endpoints';

export const Mytables: FC = () => {
  const { data, isLoading } = useGetMyTables();

  return (
    <>
      <MyTablesState loading={isLoading} info={data?.data.state_tables} />

      <Skeleton
        isLoading={isLoading}
        items={12}
        boxClasses="grid grid-cols-3 mt-4"
        heightItem="tall">
        <MyTablesList data={data?.data.tables} />
      </Skeleton>
    </>
  );
};
