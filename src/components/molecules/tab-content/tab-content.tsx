import { FC, useCallback } from 'react';

import { CheckIcon } from '@heroicons/react/24/outline';

import { MenuItemData, OrderCustomer } from 'models';

import styles from './tab-content.module.css';

type TabContentProps = {
  dataItems: MenuItemData[];
  selectedItems: OrderCustomer[];
  handleClickItem: (
    dataItem: OrderCustomer,
    state: 'selected' | 'unselected'
  ) => void;
};

export const TabContent: FC<TabContentProps> = ({
  dataItems,
  selectedItems,
  handleClickItem,
}) => {
  const stateItem = useCallback(
    (id: string) => {
      return selectedItems.some(p => p._id === id) ? 'selected' : 'unselected';
    },
    [selectedItems]
  );
  return (
    <div id="myTabContent" className={styles.container_tab}>
      <div
        className={styles.tab_content}
        id="menu"
        role="tabpanel"
        aria-labelledby="menu-tab">
        {dataItems.map(item => (
          <button
            key={item._id}
            className={styles.tab_item}
            onClick={() => handleClickItem(item, stateItem(item._id))}>
            <p>{item.name}</p>

            {stateItem(item._id) === 'selected' ? (
              <CheckIcon width={20} />
            ) : (
              <p>${item.price}</p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
