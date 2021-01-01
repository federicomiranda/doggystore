import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';
import {Link} from 'react-router-dom';

function Nav({titulo, action}) {
    const menuItems = [
        {
            texto: 'Camas',
            ruta: '/camas',
        },
        {
            texto: 'Comederos y bebederos',
            ruta: '/comederos-y-bebederos',
        },
        {
            texto: 'Elementos de paseo',
            ruta: '/elementos-de-paseo',
        },
        {
            texto: 'Juguetes',
            ruta: '/juguetes',
        },
    ]

    const qty = 1;

    return (
        <nav>
            <div className="container">
                <h1><Link to="/">{titulo}</Link></h1>

                <ul>
                    {
                     menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta} />)   
                    }
                </ul>
                
                {
                    !!qty && <NavCart action={action} qty={qty} />
                }
            </div>
        </nav>
    )
}

export default Nav;