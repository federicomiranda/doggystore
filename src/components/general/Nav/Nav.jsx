import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';

function Nav({titulo, action}) {
    const menuItems = [
        {
            texto: 'Camas',
            ruta: '',
        },
        {
            texto: 'Comederos y bebederos',
            ruta: '',
        },
        {
            texto: 'Elementos de paseo',
            ruta: '',
        },
        {
            texto: 'Elementos de viaje',
            ruta: '',
        },
        {
            texto: 'Juguetes',
            ruta: '',
        },
        {
            texto: 'Ropa',
            ruta: '',
        },
    ]

    const qty = 0;

    return (
        <nav>
            <div className="container">
                <h1>{titulo}</h1>

                <ul>
                    {
                     menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} />)   
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