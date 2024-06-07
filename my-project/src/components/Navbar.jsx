import logo from '../assets/kevinRushLogo.png';
import {FaLink, FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="nb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt="Logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaFacebook />
        </div>
    </nav>
  )
}

export default Navbar
