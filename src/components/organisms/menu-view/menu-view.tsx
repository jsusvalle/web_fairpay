import { FC, useState, useContext, useMemo } from 'react';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { CustomerNameField, MenuTab } from 'components/molecules';

import { CreateOrderContext, CreateOrderContextType } from 'context';

import { OrderCustomer } from 'models';

import styles from './menu-view.module.css';

export const MenuView: FC = () => {
  const { data, currentCustomer, addOrderCustomer, changeView } = useContext(
    CreateOrderContext
  ) as CreateOrderContextType;

  const currentName = useMemo(() => {
    const findData = data.order.find(p => currentCustomer === p._id);
    if (findData) {
      return findData.name_guest;
    }
    return 'Customer';
  }, [data, currentCustomer]);

  const [selectedItems, setSelectedItems] = useState<OrderCustomer[]>([]);
  const [customName, setCustomName] = useState(currentName);
  const [note, setNote] = useState('');

  const handleClickItem = (
    dataItem: OrderCustomer,
    state: 'selected' | 'unselected'
  ) => {
    if (state === 'selected') {
      setSelectedItems(selectedItems =>
        selectedItems.filter(p => p._id !== dataItem._id)
      );
      return;
    }
    setSelectedItems(selectedItems => [...selectedItems, dataItem]);
  };

  const handleAddOrderCustomer = () => {
    addOrderCustomer({
      _id: '1',
      name_guest: customName,
      note: note,
      order_customer: [...selectedItems],
    });
  };

  return (
    <>
      <div className={styles.container_title}>
        <button onClick={() => changeView('order-view')}>
          <ArrowLeftIcon width={40} />
        </button>

        <CustomerNameField valueName={customName} onChange={setCustomName} />
      </div>

      <MenuTab
        selectedItems={selectedItems}
        handleClickItem={handleClickItem}
      />

      <div className={styles.fixed_section}>
        <div className={styles.container_textarea}>
          <textarea
            rows={2}
            name="note"
            id="note"
            placeholder="Add a note..."
            className={styles.textarea}
            value={note}
            onChange={e => setNote(e.target.value)}
          />
        </div>
        <button
          onClick={handleAddOrderCustomer}
          disabled={selectedItems.length === 0}
          className={styles.fixed_button}>
          Add <b>{selectedItems.length}</b> items
        </button>
      </div>
    </>
  );
};
