import './FreeShipping.css';
import {useSelector} from 'react-redux';

const FreeShipping = () => {
    // const freeShipping = useSelector(state => state.freeShipping)
    // const cuotas = useSelector(state => state.cuotas)
    const {freeShipping, cuotas} = useSelector(state => state);

    return (
        <div className="free_shipping">
            <p>Envío gratis desde ${freeShipping} | {cuotas} cuotas sin interés</p>
        </div>
    )
}

export default FreeShipping;