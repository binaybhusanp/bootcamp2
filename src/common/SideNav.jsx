import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <nav className='sidenav'>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/theme'>Theme App</a></li>
                <li><Link to='/timer'>Timer App</Link></li>
                <li><Link to='/todo'>Todo App</Link></li>
                <li><a href='/covid-tracker'>Covid Tracker</a></li>
            </ul>
        </nav>
    )
};

export default SideNav;