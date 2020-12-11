import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';

function Nav({titulo, action}) {
    return (
        <nav>
            <div className="container">
                <h1>{titulo}</h1>

                <ul>
                    <NavItem text="Camas" url="https://www.google.com" />
                    <NavItem text="Comederos y bebederos" />
                    <NavItem text="Elementos de paseo" />
                    <NavItem text="Elementos de viaje" />
                    <NavItem text="Juguetes" />
                    <NavItem text="Ropa" />
                </ul>
                
                <NavCart action={action} />
            </div>
        </nav>
    )
}

export default Nav;