import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';

// styles & images
import './Navbar.css';
import Temple from '../../assets/temple.svg';
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();
  return (
    <Fragment>
        <div className='navbar'>
            <ul>
                <li className='logo'>
                    <img src={Temple} alt="dojo logo" />
                    <span>The Dojo</span>
                </li>
                {user ? (
                    <li>
                        <button className='btn' disabled={isPending} onClick={logout}>{isPending ? 'Logging out' : 'Logout'}</button>
                    </li>
                ) : (
                    <Fragment>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </Fragment>
                )}
            </ul>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navbar