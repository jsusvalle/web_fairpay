import { FC, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

import { Button } from 'components/atoms';
import { OrderTable } from 'components/molecules';

import { usePostCreateOrder } from 'hooks/endpoints';

import { CreateOrderContext, CreateOrderContextType } from 'context';

import styles from './order-view.module.css';

export const OrderView: FC = () => {
  const navigate = useNavigate();
  const { data, editOrderCustomer, changeView } = useContext(
    CreateOrderContext
  ) as CreateOrderContextType;

  const postCreateOrder = usePostCreateOrder();

  const isFullData = useMemo(() => {
    return data.order.every(p => p.order_customer.length > 0);
  }, [data]);

  const onEditOrderCustomer = (id: string, action: string) => {
    editOrderCustomer(id, action);
  };

  const handleClickSubmitData = () => {
    postCreateOrder.mutate(
      { data: data },
      {
        onSuccess: () => {
          navigate('/');
        },
        onError: e => {
          console.log(e);
        },
      }
    );
  };

  return (
    <>
      <div className={styles.container_title}>
        <button onClick={() => changeView('table-view')}>
          <ArrowLeftIcon width={40} />
        </button>
      </div>

      <OrderTable dataOrder={data} onEditOrderCustomer={onEditOrderCustomer} />

      {isFullData && (
        <div className={styles.container_title}>
          <Button
            onClick={handleClickSubmitData}
            isLoading={postCreateOrder.isLoading}>
            Send to Kitchen
          </Button>
        </div>
      )}
    </>
  );
};
