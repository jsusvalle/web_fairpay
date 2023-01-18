import { FC, useState } from 'react';

import { OrderDetails } from 'models';

import styles from './accordion-items-detail-order.module.css';

type AccordionItemsDetailOrderProps = {
  data: OrderDetails[];
};

export const AccordionItemsDetailOrder: FC<AccordionItemsDetailOrderProps> = ({
  data,
}) => {
  const [activeItem, setActiveItem] = useState<null | string>(null);

  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      className={styles.accordion_container}>
      {data.map(item => (
        <div key={item.name_guest}>
          <h2 id="accordion-flush-heading-1">
            <button
              type="button"
              className={styles.button_accordion}
              data-accordion-target="#accordion-flush-body-1"
              aria-expanded="true"
              aria-controls="accordion-flush-body-1"
              onClick={() =>
                setActiveItem(
                  activeItem === item.name_guest ? null : item.name_guest
                )
              }>
              <span>{item.name_guest}</span>
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
              item.name_guest === activeItem ? '' : styles.accordion_hidden
            }
            aria-labelledby="accordion-flush-heading-1">
            <div className={styles.accordion_table}>
              {item.order_customer.map(food => (
                <div key={food.name} className={styles.accordion_content}>
                  <p>{food.name}</p>
                  <p>${food.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
