import Logo from './Logo';
import SearchBar from './Search/SearchBar';
import NavbarButtons from '../Buttons/NavbarButtons/NavbarButtons';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Logo />

      <SearchBar />

      <NavbarButtons />
    </div>
  );
}
