import { Link, NavLink } from 'react-router-dom';
import logo from "../images/book-education-learning-school-science-study-2-svgrepo-com.svg";
import './MainNavigation.css';


function MainNavigation() {
    return (
        <header className="header">
            <div className="logo-wrapper">
                <img src={logo} alt='logo' className="logo"></img>
            </div>
            <nav className='button-wrapper'>
                <ul className="list">
                    <li>
                        <NavLink to="/" className="navbtn">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tests" className="navbtn">
                            All Tests
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create" className="navbtn">
                            Create Test
                        </NavLink>
                    </li>
                    <li>
                        <Link to={"profile"} className="Authbtn">
                            profile
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;

