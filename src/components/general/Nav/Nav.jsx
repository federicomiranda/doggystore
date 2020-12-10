import './Nav.css';
import NavItem from '../NavItem/NavItem';

function Nav({titulo}) {
    return (
        <header>
            <div className="container">
                <h1>{titulo}</h1>

                <nav>
                    <ul>
                        <NavItem text="Camas" url="https://www.google.com" />
                        <NavItem text="Comederos y bebederos" />
                        <NavItem text="Elementos de paseo" />
                        <NavItem text="Elementos de viaje" />
                        <NavItem text="Juguetes" />
                        <NavItem text="Ropa" />
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav;