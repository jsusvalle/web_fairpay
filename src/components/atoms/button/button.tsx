import { forwardRef, ComponentProps, useMemo } from 'react';

import { classNames } from 'utils';

import styles from './button.module.css';

interface Props extends Omit<ComponentProps<'button'>, 'className'> {
  isLoading: boolean;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, isLoading, ...rest }, ref) => {
    const buttonClassNames = useMemo(() => {
      const classes = {
        [styles.button_default]: true,
        [styles.button_disabled]: isLoading,
      };

      return classNames(classes);
    }, [isLoading]);

    return (
      <button
        ref={ref}
        className={buttonClassNames}
        disabled={isLoading}
        {...rest}>
        {isLoading && (
          <svg
            className={styles.spin_animate}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none">
            <circle
              className={styles.opacity_low}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"></circle>
            <path
              className={styles.opacity_high}
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}

        {isLoading ? 'Loading...' : children}
      </button>
    );
  }
);
