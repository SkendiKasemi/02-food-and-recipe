import NavbarButton from './NavbarButton';

export default function NavbarButtons() {
  return (
    <div className='other-buttons'>
      <NavbarButton text={'Favorites'} link={'/favorites'} />

      <NavbarButton text={'About Us'} link={'/aboutUs'} />
    </div>
  );
}
