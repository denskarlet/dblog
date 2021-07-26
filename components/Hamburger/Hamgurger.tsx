import * as React from 'react';
import Link from 'next/link';
import { LinkType } from '../../util/navigation';
import styles from './Hamburger.module.css';

export const Hamburger = ({ links }: HamburgerProps) => {
  return (
    <div>
      {links.map(([url, display]) => (
        <li className={styles.wrapper} key={url}>
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
};
