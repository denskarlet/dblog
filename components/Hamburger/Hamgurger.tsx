import * as React from 'react';
import Link from 'next/link';
import { LinkType } from '../../util/navigation';
import HamburgerIcon from '../../svgs/Hamburger.svg'
import styles from './Hamburger.module.css';

export const Hamburger = ({ links, onClickCallback }: HamburgerProps) => {
  return (
    <div className={styles.hamburger}>
      <button onClick={onClickCallback}>
        <HamburgerIcon />
      </button>
      {links.map(([url, display]) => (
        <li className={styles.list} key={url}>
          <Link href={url}>
            <a>{display}</a>
          </Link>
        </li>
      ))}
    </div>
  );
};

type HamburgerProps = {
  links: LinkType[];
  onClickCallback: () => void
};
