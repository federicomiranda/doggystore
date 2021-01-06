import {useContext} from 'react';
import './FreeShipping.css';
import {Store} from '../../../store';

const FreeShipping = () => {
    const [data, setData] = useContext(Store);

    return (
        <div className="free_shipping">
            <p>Envío gratis desde ${data.freeShipping} | {data.cuotas} cuotas sin interés</p>
        </div>
    )
}

export default FreeShipping;