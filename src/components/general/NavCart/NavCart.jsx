import './NavCart.css';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {useSelector} from 'react-redux';

const NavCart = ({action}) => {
    const qty = useSelector(state => state.cantidad);

    return (
        <div className="navCart" onClick={action}>
            <AiOutlineShoppingCart />
            <span>{qty}</span>
        </div>
    )
}

export default NavCart;