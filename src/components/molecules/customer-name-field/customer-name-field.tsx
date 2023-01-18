import { FC, useRef } from 'react';

import { PencilIcon } from '@heroicons/react/24/outline';

import styles from './customer-name-field.module.css';

type CustomerNameFieldProps = {
  valueName: string;
  onChange: (name: string) => void;
};

export const CustomerNameField: FC<CustomerNameFieldProps> = ({
  valueName,
  onChange,
}) => {
  const inputName = useRef<HTMLInputElement>(null);

  const handleClickToFocus = () => {
    if (inputName.current != null) {
      inputName.current.focus();
    }
  };

  return (
    <>
      <div className={styles.container_texfield}>
        <input
          value={valueName}
          onChange={e => {
            onChange(e.target.value);
          }}
          ref={inputName}
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Enter name"
          autoComplete="given-name"
          className={styles.textfield}
        />

        <button onClick={handleClickToFocus}>
          <PencilIcon width={30} />
        </button>
      </div>
    </>
  );
};
