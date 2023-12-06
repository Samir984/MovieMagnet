import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className=" bg-gray-800 px-4 py-3">
      <div className="flex max-w-7xl mx-auto items-center justify-between">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
