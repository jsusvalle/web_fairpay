import { FC, ReactElement } from 'react';

import { Container } from 'components/atoms';
import { AppBar } from 'components/organisms';

import styles from './layout.module.css';

export type LayoutProps = {
  children: ReactElement;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container_layout}>
      <Container>{children}</Container>

      <AppBar />
    </div>
  );
};
