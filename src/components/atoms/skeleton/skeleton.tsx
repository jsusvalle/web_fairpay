import { FC, ReactNode, useMemo } from 'react';

import styles from './skeleton.module.css';

export type SkeletonProps = {
  isLoading: boolean;
  heightItem?: 'tall' | 'medium' | 'short';
  items?: number;
  boxClasses?: string;
  children: ReactNode;
};

export const Skeleton: FC<SkeletonProps> = ({
  children,
  isLoading,
  items = 1,
  boxClasses = 'flex flex-col',
  heightItem = 'short',
}) => {
  const rowItems: number[] = useMemo(
    () => Array.from(Array(items).keys()),
    [items]
  );

  if (isLoading) {
    return (
      <div className={`${boxClasses} ${styles.skeleton_container}`}>
        {rowItems.map(i => (
          <div
            key={i}
            className={`${styles.skeleton_row} ${styles[heightItem]}`}></div>
        ))}
      </div>
    );
  }

  return <>{children}</>;
};
