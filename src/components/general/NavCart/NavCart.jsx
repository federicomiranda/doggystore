import './NavCart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const NavCart = ({action}) => {
    return (
        <div className="navCart" onClick={action}>
            <AiOutlineShoppingCart />
            <span>0</span>
        </div>
    )
}

export default NavCart;