import {useContext} from 'react';
import './WidgetCart.css';
import {Store} from '../../../store';

const WidgetCart = ({show, action}) => {
    const [data, setData] = useContext(Store);

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {
                data.items.map(item => <p key={item.id}>{item.item.title}</p>)
            }
            <button onClick={action}>Cerrar widget</button>
        </div>
    )
}

export default WidgetCart;