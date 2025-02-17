interface NavigationBarProps {}

function NavigationBar(props: NavigationBarProps) {
  return (
    <nav className="flex p-4 w-full">
      <ul className="flex gap-4 justify-between w-full">
        <li>HOME</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
