import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { HomeIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

import styles from './app-bar.module.css';

export const AppBar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.fixed_section}>
      <button onClick={() => navigate('/')} className={styles.button_icon}>
        <HomeIcon width={40} />
      </button>
      <button
        onClick={() => navigate('/new-order')}
        className={styles.button_icon}>
        <PlusCircleIcon width={40} />
      </button>
    </div>
  );
};
