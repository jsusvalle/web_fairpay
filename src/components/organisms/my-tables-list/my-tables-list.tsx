import { FC } from 'react';

import { TableButton } from 'components/molecules';

import { TablesData } from 'models';

import styles from './my-tables-list.module.css';

export type MyTablesListProps = {
  data?: TablesData[];
};

export const MyTablesList: FC<MyTablesListProps> = ({ data }) => {
  return (
    <div className={styles.container_table}>
      {data && data.map(item => <TableButton key={item._id} data={item} />)}
    </div>
  );
};
