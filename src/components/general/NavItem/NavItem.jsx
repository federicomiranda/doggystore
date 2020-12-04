const NavItem = ({text, url = "#"}) => (
    <li>
        <a href={url}>{text}</a>
    </li>
)

export default NavItem;