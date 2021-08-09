import { Link } from "react-router-dom"

const SideNav = () => {
    return (
        <nav className="sidenav">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/theme-app'>Theme App</Link></li>
                <li><Link to='/timer-app'>Timer App</Link></li>
                <li><Link to='/todo-app'>Todo App</Link></li>
            </ul>
        </nav>
    );
}

export default SideNav;