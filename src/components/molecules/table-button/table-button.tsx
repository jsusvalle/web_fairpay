import { FC, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { UsersIcon } from '@heroicons/react/24/outline';

import { TablesData } from 'models';
import { classNames } from 'utils';

import styles from './table-button.module.css';

export type TableButtonProps = {
  data: TablesData;
};

export const TableButton: FC<TableButtonProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (data.state === 'pending') {
      navigate(`/detail-order/${data._id}`);
    } else if (data.state === 'served') {
      navigate(`/order-check/${data._id}`);
    }
  };

  const buttonClassNames = useMemo(() => {
    const classes = {
      [styles.item_table]: true,
      [styles.item_table_pending]: data.state === 'pending',
      [styles.item_table_served]: data.state === 'served',
    };

    return classNames(classes);
  }, [data.state]);

  return (
    <button onClick={handleClick} className={buttonClassNames}>
      <p className={styles.item_table_number}>{data.nro_table}</p>
      <div className={styles.item_table_nro_guest}>
        <UsersIcon width={20} />
        <p>{data.nro_guest}</p>
      </div>
    </button>
  );
};
