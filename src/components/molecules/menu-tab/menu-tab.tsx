import { FC, useState } from 'react';

import { Skeleton } from 'components/atoms';
import { TabContent } from '../tab-content';

import { useGetMenuByCategory } from 'hooks/endpoints';

import { OrderCustomer } from 'models';

import styles from './menu-tab.module.css';

type MenuTabProps = {
  selectedItems: OrderCustomer[];
  handleClickItem: (
    dataItem: OrderCustomer,
    state: 'selected' | 'unselected'
  ) => void;
};

export const MenuTab: FC<MenuTabProps> = ({
  selectedItems,
  handleClickItem,
}) => {
  const { data: menuData, isLoading } = useGetMenuByCategory();
  const [currentTab, setCurrentTab] = useState('Most Popular');

  return (
    <Skeleton
      isLoading={isLoading}
      items={5}
      heightItem="medium"
      boxClasses="flex flex-col mt-6">
      <div className={styles.tab_container}>
        <ul
          className={styles.ul_tab_container}
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist">
          {menuData?.data.data &&
            Object.keys(menuData?.data.data).map(keyName => (
              <li key={keyName} className="mr-2" role="presentation">
                <button
                  className={
                    currentTab === keyName
                      ? styles.button_tab_selected
                      : styles.button_tab_unselected
                  }
                  id="menu-tab"
                  data-tabs-target="#menu"
                  type="button"
                  role="tab"
                  aria-controls="menu"
                  aria-selected="false"
                  onClick={() => setCurrentTab(keyName)}>
                  {keyName}
                </button>
              </li>
            ))}
        </ul>
      </div>
      <TabContent
        selectedItems={selectedItems}
        dataItems={menuData?.data.data[currentTab] || []}
        handleClickItem={handleClickItem}
      />
    </Skeleton>
  );
};
