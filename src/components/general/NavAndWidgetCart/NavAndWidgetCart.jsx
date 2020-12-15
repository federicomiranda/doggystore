import {useState} from 'react';
import Nav from '../Nav/Nav';
import WidgetCart from '../WidgetCart/WidgetCart';

const NavAndWidgetCart = () => {
    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return (
        <>
            <Nav titulo="DoggyStore" action={openWidgetCart} />
            <WidgetCart show={showWidgetCart} action={openWidgetCart} />
        </>
    )
}

export default NavAndWidgetCart;