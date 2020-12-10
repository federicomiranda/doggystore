import './NavCart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const NavCart = () => {
    return (
        <div className="navCart">
            <AiOutlineShoppingCart />
            <span>0</span>
        </div>
    )
}

export default NavCart;