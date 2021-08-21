import classes from './main-header.module.css';
import Link from 'next/link';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>New Nine</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/items'>Browse Items</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader;
