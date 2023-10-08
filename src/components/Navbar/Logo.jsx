import logo from '../../../public/logo.png';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to={'/'}>
      <img src={logo} alt='Logo Image' className='logo' />
    </Link>
  );
}
