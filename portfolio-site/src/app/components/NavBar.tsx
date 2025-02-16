interface NavigationBarProps {}

function NavigationBar(props: NavigationBarProps) {
  return (
    <nav className="flex justify-between items-center p-4">
      <ul className="flex gap-4 justify-between">
        <li>HOME</li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
