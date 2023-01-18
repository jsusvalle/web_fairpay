import { FC, ReactNode } from 'react';

import styles from './container.module.css';

export type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <div className={styles.container_styles} {...rest}>
      {children}
    </div>
  );
};
