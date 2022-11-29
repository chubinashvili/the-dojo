import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

// styles & images
import './Navbar.css';
import Temple from '../../assets/temple.svg';

const Navbar = () => {
  return (
    <Fragment>
        <div className='navbar'>
            <ul>
                <li className='logo'>
                    <img src={Temple} alt="dojo logo" />
                    <span>The Dojo</span>
                </li>

                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <button className='btn'>Logout</button>
                </li>
            </ul>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navbar