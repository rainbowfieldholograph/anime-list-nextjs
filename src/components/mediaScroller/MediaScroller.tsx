import { FC, useRef } from 'react';
import { MediaScrollerProps } from './MediaScroller.props';
import styles from './MediaScroller.module.scss';
import clsx from 'clsx';

export const MediaScroller: FC<MediaScrollerProps> = ({ children }): JSX.Element => {
  const listRef = useRef<null | HTMLUListElement>(null);

  const scroll = (where: 'left' | 'right'): void => {
    const element = listRef.current;
    if (!element) return;
    let value = 0;
    const JUMP_VALUE: number = element.offsetWidth * 0.3;
    console.log(JUMP_VALUE);
    switch (where) {
      case 'left':
        value = -JUMP_VALUE;
        break;
      case 'right':
        value = JUMP_VALUE;
        break;
      default:
        return;
    }
    element.focus();
    element.scrollTo({
      left: element.scrollLeft + value,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => scroll('left')}
        className={clsx(styles.control, styles.controlLeft)}
      >
        {'<'}
      </button>
      <ul ref={listRef} tabIndex={0} className={styles.scroller}>
        {children}
      </ul>
      <button
        onClick={() => scroll('right')}
        className={clsx(styles.control, styles.controlRight)}
      >
        {'>'}
      </button>
    </div>
  );
};
