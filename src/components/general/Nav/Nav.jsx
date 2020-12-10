import './Nav.css';
import NavItem from '../NavItem/NavItem';
import HeaderCart from '../HeaderCart/HeaderCart';

function Nav({titulo}) {
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
                
                <HeaderCart />
            </div>
        </nav>
    )
}

export default Nav;