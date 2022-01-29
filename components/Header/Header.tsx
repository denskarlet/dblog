import Link from 'next/link';
import { Hamburger } from '../Hamburger/Hamgurger';
import { useState } from 'react';
import { links } from '../../util/navigation';
import styles from './Header.module.css';

const { linkList, linkWrapper, wrapper, header, hamburger } = styles;

const Header = () => {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  return (
    <div className={wrapper}>
      <button
        className={hamburger}
        onClick={(e) => {
          setShowHamburger(!showHamburger);
        }}
      >
        HAM
      </button>
      {showHamburger && <Hamburger links={links} />}
      <div className={header}>Denys&apos; dev blog</div>
      <ul className={linkList}>
        {links.map(([url, display]) => (
          <li className={linkWrapper} key={url}>
            <Link href={url}>
              <a>{display}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
