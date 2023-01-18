import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { Skeleton, Button } from 'components/atoms';
import { CheckOrdertable } from 'components/organisms';

import { useGetOrderCheck, usePatchChangeOrderState } from 'hooks/endpoints';

import styles from './order-check.module.css';

export const OrderCheck: FC = () => {
  const navigate = useNavigate();
  let { orderId } = useParams();

  const { data, isLoading } = useGetOrderCheck(orderId ? orderId : '123');
  const patchChangeState = usePatchChangeOrderState(orderId ? orderId : '123');

  const handleClickChangeState = () => {
    patchChangeState.mutate(orderId ? orderId : '', {
      onSuccess: () => {
        navigate('/');
      },
      onError: e => {
        console.error(e);
      },
    });
  };

  return (
    <>
      <div className={styles.container_title}>
        <button onClick={() => navigate('/')}>
          <ArrowLeftIcon width={40} />
        </button>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Check - Table {data?.data.data.table_num}
          </h1>
        </div>

        <Skeleton
          isLoading={isLoading}
          items={4}
          boxClasses="flex flex-col mt-4"
          heightItem="medium">
          <CheckOrdertable
            data={data?.data.data.order_check_details || []}
            grand_total={data?.data.data.grand_total || '0'}
            tip_total={data?.data.data.tip_total || '0'}
          />
        </Skeleton>

        {!isLoading && (
          <Button
            onClick={handleClickChangeState}
            isLoading={patchChangeState.isLoading}>
            Finish
          </Button>
        )}
      </div>
    </>
  );
};
