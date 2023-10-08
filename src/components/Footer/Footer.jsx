import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-6 col-xs-12'>
            <p className='copyright-text'>
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by{' '}
              <Link to='/'>Meal DB</Link>.
              <br />
              Made by:{' '}
              <Link to='https://github.com/SkendiKasemi' target='_blank'>
                <i>S.K</i>
              </Link>
            </p>
          </div>

          <div className='col-md-4 col-sm-6 col-xs-12'>
            <ul className='social-icons'>
              <li>
                <Link
                  className='facebook'
                  to='https://www.facebook.com'
                  target='_blank'
                >
                  <i className='fa fa-facebook'></i>
                </Link>
              </li>
              <li>
                <Link
                  className='twitter'
                  to='https://www.twitter.com'
                  target='_blank'
                >
                  <i className='fa fa-twitter'></i>
                </Link>
              </li>
              <li>
                <Link
                  className='dribbble'
                  to='https://www.dribbble.com'
                  target='_blank'
                >
                  <i className='fa fa-dribbble'></i>
                </Link>
              </li>
              <li>
                <Link
                  className='linkedin'
                  to='https://www.linkedin.com'
                  target='_blank'
                >
                  <i className='fa fa-linkedin'></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
