import Link from 'next/link';
import { Hamburger } from '../Hamburger/Hamgurger';
import { useState } from 'react';
import { links } from '../../util/navigation';
import HamburgerIcon from '../../svgs/Hamburger.svg'
import styles from './Header.module.css';

const { linkList, linkWrapper, wrapper, header, hamburger } = styles;

const Header = () => {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const handleClose = () => {
    setShowHamburger(false)
  }
  return (
    <div className={wrapper}>
      <button
        className={hamburger}
        onClick={() => setShowHamburger(!showHamburger)}
      >
        <HamburgerIcon/>
      </button>
      {showHamburger && <Hamburger onClickCallback={handleClose} links={links} />}
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
