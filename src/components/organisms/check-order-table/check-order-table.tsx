import { FC, useState } from 'react';

import { DocumentTextIcon } from '@heroicons/react/24/outline';

import { OrderCheckDetails } from 'models';

import styles from './check-order-table.module.css';

type CheckOrdertableProps = {
  tip_total: string;
  grand_total: string;
  data: OrderCheckDetails[];
};

export const CheckOrdertable: FC<CheckOrdertableProps> = ({
  data,
  tip_total,
  grand_total,
}) => {
  const [activeItem, setActiveItem] = useState<null | string>(null);

  return (
    <div className={styles.container_accordion}>
      <div
        id="accordion-flush"
        data-accordion="collapse"
        className={styles.accordion_container}>
        {data.map(item => (
          <div key={item.name_customer}>
            <h2 id={'accordion-' + item.name_customer}>
              <button
                type="button"
                className={styles.button_accordion}
                data-accordion-target="#accordion-flush-body-1"
                aria-label={'button-' + item.name_customer}
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
                onClick={() =>
                  setActiveItem(
                    activeItem === item.name_customer
                      ? null
                      : item.name_customer
                  )
                }>
                <div className={styles.button_accordion_name}>
                  {item.name_customer}
                  <span>
                    <DocumentTextIcon width={20} />
                  </span>
                </div>
                <svg
                  data-accordion-icon
                  className={styles.icon_arrow}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-flush-body-1"
              className={
                item.name_customer === activeItem ? '' : styles.accordion_hidden
              }
              aria-labelledby="accordion-flush-heading-1">
              <div className={styles.accordion_table}>
                {item.order_details.map(food => (
                  <div
                    key={food._id}
                    className={styles.accordion_content_items_food}>
                    <p>{food.name}</p>
                    <p>${food.price}</p>
                  </div>
                ))}

                <div className={styles.accordion_content_items_food}>
                  <p>Tip</p>
                  <p>${item.tip}</p>
                </div>

                <div className={styles.accordion_content_total_check}>
                  <p>Total</p>
                  <p>${item.total}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.section_check_tip}>
          <p>Tip 12%</p>
          <p>${tip_total}</p>
        </div>

        <div className={styles.section_check_total}>
          <p>Grand Total</p>
          <p>${grand_total}</p>
        </div>
      </div>
    </div>
  );
};
