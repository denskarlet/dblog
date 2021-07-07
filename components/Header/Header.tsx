import Link from 'next/link';
import styles from './Header.module.css';
const { linkList } = styles;
const links = [
  ['/', 'Home'],
  ['/posts', 'Blog'],
  ['/about', 'About me'],
  ['/contact', 'Contact'],
  ['/github', 'Github'],
];

const Header = () => {
  return (
    <div>
      <ul className={linkList}>
        {links.map(([url, display]) => (
          <li key={url}>
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
