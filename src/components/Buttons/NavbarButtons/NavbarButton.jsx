import { Link } from 'react-router-dom';
import './NavbarButton.css';

export default function NavbarButton({ text, link }) {
  return (
    <Link to={link} className='yt-link'>
      <button className='navbar-button'>
        <p className='navbar-text'>{text}</p>
      </button>
    </Link>
  );
}
