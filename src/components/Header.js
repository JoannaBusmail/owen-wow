import logo from '../images/WOO-removebg-preview.png';
import '../styles/components/header.scss';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='headerCont'>
        <h1 className='headerCont__titleOne'> WOW</h1>
        <h1 className='headerCont__titleTwo'> WOW</h1>
        <img
          className='headerCont__logo'
          src={logo}
          alt='logo imagen'
          title='logo imagen'
        />
        <h1 className='headerCont__titleThree'> WOW</h1>
        <h1 className='headerCont__titleFour'> WOW</h1>
      </div>
    </header>
  );
};

export default Header;
