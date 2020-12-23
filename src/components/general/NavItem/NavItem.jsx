import {NavLink} from 'react-router-dom';

const NavItem = ({text, url = "#"}) => (
    <li>
        <NavLink to={url} activeClassName="active">{text}</NavLink>
    </li>
)

export default NavItem;