import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { AvailableTables, NumGuests } from 'components/molecules';

import { CreateOrderContext, CreateOrderContextType } from 'context';

import styles from './open_table.module.css';

export const OpenTable: FC = () => {
  const navigate = useNavigate();
  const { data, saveTable } = useContext(
    CreateOrderContext
  ) as CreateOrderContextType;

  const [selectData, setSelectData] = useState<{
    table_id: string;
    nro_guest: number;
    nro_table: number;
  }>({
    table_id: data.table_id ? data.table_id : '',
    nro_table: data.nro_table ? data.nro_table : 0,
    nro_guest: data.nro_guest ? data.nro_guest : 0,
  });

  const handleChangeTable = (table_id: string, nro_table: number) => {
    setSelectData(prevData => ({
      ...prevData,
      table_id,
      nro_table,
    }));
  };

  const handleChangeNroGuest = (nro_guest: number) => {
    setSelectData(prevData => ({
      ...prevData,
      nro_guest,
    }));
  };

  const nextStep = () => {
    saveTable(selectData);
  };

  return (
    <>
      <div className={styles.container_title}>
        <button onClick={() => navigate('/')}>
          <ArrowLeftIcon width={40} />
        </button>
        <div className={styles.content}>
          <h1 className={styles.title}>Open Table</h1>
        </div>

        <AvailableTables
          selectedTable={selectData.table_id}
          onChangeTable={handleChangeTable}
        />

        <NumGuests
          selectedNumber={selectData.nro_guest}
          onChangeNumber={handleChangeNroGuest}
        />
      </div>

      {selectData.nro_guest !== 0 && selectData.table_id.length > 0 && (
        <button onClick={nextStep} className={styles.fixed_button}>
          Proceed
        </button>
      )}
    </>
  );
};
