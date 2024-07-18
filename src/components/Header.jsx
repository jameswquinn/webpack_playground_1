import { h } from 'preact';
import { Link } from 'wouter';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
