import { FC } from 'react';

import { Skeleton } from 'components/atoms';

import { StateTables } from 'models';

import styles from './my-tables-state.module.css';

export type MyTablesStateProps = {
  loading: boolean;
  info?: StateTables;
};

export const MyTablesState: FC<MyTablesStateProps> = ({ loading, info }) => {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.title}>My Tables</h1>
        <h2 className={styles.subtitle}>
          {info ? `Serving ${info.serving_tables} tables` : `Serving 0 tables`}
        </h2>
      </div>

      <div className={styles.container_info}>
        <Skeleton isLoading={loading} items={2}>
          <>
            <div className={styles.container_item_info}>
              <div className={styles.circle_active_yellow}></div>
              <p className={styles.number_table}>{info?.num_tables_pending}</p>
              <div className={styles.vertical_line}></div>
              <p>Table Order Cooking</p>
            </div>
            <div className={styles.horizontal_line}></div>
            <div className={styles.container_item_info}>
              <div className={styles.circle_active_green}></div>
              <p className={styles.number_table}>{info?.num_tables_served}</p>
              <div className={styles.vertical_line}></div>
              <p>Table Served</p>
            </div>
          </>
        </Skeleton>
      </div>
    </>
  );
};
