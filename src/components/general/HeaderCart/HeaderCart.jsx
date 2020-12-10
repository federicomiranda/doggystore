import './HeaderCart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'

const HeaderCart = () => {
    return (
        <div className="headerCart">
            <AiOutlineShoppingCart />
            <span>0</span>
        </div>
    )
}

export default HeaderCart;