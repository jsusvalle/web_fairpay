import { FC, useCallback } from 'react';

import { classNames } from 'utils';

import styles from './num-guests.module.css';

type NumGuestsProps = {
  selectedNumber: number;
  onChangeNumber: (nro: number) => void;
};

const arrayNumGuest = [1, 2, 3, 4, 5, 6, 7];

export const NumGuests: FC<NumGuestsProps> = ({
  selectedNumber,
  onChangeNumber,
}) => {
  const buttonClassNames = useCallback(
    (valNumber: number) => {
      const classes = {
        [styles.button_guest]: true,
        [styles.button_guest_selected]: valNumber === selectedNumber,
      };

      return classNames(classes);
    },
    [selectedNumber]
  );

  const handleChange = (val: string | number) => {
    onChangeNumber(Number(val));
  };

  return (
    <div className={styles.container_nro_guest}>
      <p>No. of Guests</p>

      <div className={styles.container_button_guest}>
        {arrayNumGuest.map(item => (
          <button
            key={item}
            onClick={() => handleChange(item)}
            className={buttonClassNames(item)}>
            {item}
          </button>
        ))}
      </div>

      <div className={styles.container_texfield}>
        <input
          type="number"
          name="number-field"
          id="number-field"
          value={selectedNumber}
          onChange={e => handleChange(e.target.value)}
          placeholder="Enter no. of guests"
          min="0"
          max="20"
          className={styles.textfield}
        />
      </div>
    </div>
  );
};
