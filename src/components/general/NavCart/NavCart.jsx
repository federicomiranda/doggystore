import './NavCart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const NavCart = ({action, qty}) => {
    return (
        <div className="navCart" onClick={action}>
            <AiOutlineShoppingCart />
            <span>{qty}</span>
        </div>
    )
}

export default NavCart;