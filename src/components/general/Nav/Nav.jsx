import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';

function Nav({titulo, action}) {
    const menuItems = [
        {
            texto: 'Camas',
            ruta: '/category/camas',
        },
        {
            texto: 'Comederos y bebederos',
            ruta: '/category/comederos-y-bebederos',
        },
        {
            texto: 'Elementos de paseo',
            ruta: '/category/elementos-de-paseo',
        },
        {
            texto: 'Elementos de viaje',
            ruta: '/category/elementos-de-viaje',
        },
        {
            texto: 'Juguetes',
            ruta: '/category/juguetes',
        },
        {
            texto: 'Ropa',
            ruta: '/category/ropa',
        },
    ]

    const qty = 1;

    return (
        <nav>
            <div className="container">
                <h1>{titulo}</h1>

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