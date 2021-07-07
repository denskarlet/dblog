import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
const { linkList, linkWrapper, wrapper, header, hamburger } = styles;
const links = [
  ['/', 'Home'],
  ['/posts', 'Blog'],
  ['/about', 'About me'],
  ['/contact', 'Contact'],
  ['/github', 'Github'],
];

const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  return (
    <div className={wrapper}>
      <button
        className={hamburger}
        onClick={() => setShowHamburger(!showHamburger)}
      >
        HAM
      </button>
      {showHamburger && <div>Ill be a hamburger</div>}
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
