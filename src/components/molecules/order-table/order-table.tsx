import { FC } from 'react';

import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

import { NewOrder } from 'models';

import styles from './order-table.module.css';

type OrderTableProps = {
  dataOrder: NewOrder;
  onEditOrderCustomer: (guest_id: string, action: string) => void;
};

export const OrderTable: FC<OrderTableProps> = ({
  dataOrder,
  onEditOrderCustomer,
}) => {
  return (
    <div className={styles.container_table}>
      <table className={styles.table_styles}>
        <thead>
          <tr>
            <th className={styles.th_styles}>
              Table No: {dataOrder.nro_table}
            </th>
            <th className={`${styles.th_styles} ${styles.th_right_styles}`}>
              Customers: {dataOrder.nro_guest}
            </th>
          </tr>
        </thead>

        <tbody>
          {dataOrder.order.map(item => (
            <tr key={item.name_guest} className={styles.tr_styles}>
              <th className={styles.tbody_th_styles}>
                <p className={styles.title_customer}>{item.name_guest}</p>
                {item.order_customer.length > 0
                  ? item.order_customer.map(item => (
                      <p key={item._id}>{item.name}</p>
                    ))
                  : null}
              </th>
              <td className={styles.tbody_td_styles}>
                <div className={styles.container_buttons}>
                  {item.order_customer.length > 0 ? (
                    <button
                      onClick={() => onEditOrderCustomer(item._id, 'delete')}
                      className={styles.delete_button}>
                      <MinusIcon width={20} />
                    </button>
                  ) : (
                    <button
                      onClick={() => onEditOrderCustomer(item._id, 'add')}
                      className={styles.plus_button}>
                      <PlusIcon width={20} />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
