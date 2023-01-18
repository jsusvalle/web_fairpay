import { FC, useCallback } from 'react';

import { Skeleton } from 'components/atoms';
import { useGetAvailableTables } from 'hooks/endpoints';

import { classNames } from 'utils';

import styles from './available-tables.module.css';

type AvailableTablesProps = {
  selectedTable: string;
  onChangeTable: (id: string, nro_table: number) => void;
};

export const AvailableTables: FC<AvailableTablesProps> = ({
  selectedTable,
  onChangeTable,
}) => {
  const { data, isLoading } = useGetAvailableTables();

  const buttonClassNames = useCallback(
    (idItem: string) => {
      const classes = {
        [styles.button_table]: true,
        [styles.button_selected]: idItem === selectedTable,
      };

      return classNames(classes);
    },
    [selectedTable]
  );

  const handleClickTable = (id: string, nro_table: number) => {
    onChangeTable(id, nro_table);
  };

  return (
    <div className={styles.container_available_tables}>
      <p>Available Tables</p>

      <div className={styles.container_spacing}>
        <Skeleton isLoading={isLoading} heightItem="medium">
          <div className={styles.container_button_table}>
            {data?.data.data.map(item => (
              <button
                key={item._id}
                onClick={() => handleClickTable(item._id, item.nro_table)}
                className={buttonClassNames(item._id)}>
                {item.nro_table}
              </button>
            ))}
          </div>
        </Skeleton>
      </div>
    </div>
  );
};
