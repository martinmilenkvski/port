


import Link from 'next/link';

interface NavBarProps {}

function NavBar(props: NavBarProps) {
  return (
    <nav className="flex p-4 w-full">
      <ul className="flex gap-4 justify-between w-full">
        <li>HOME</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
