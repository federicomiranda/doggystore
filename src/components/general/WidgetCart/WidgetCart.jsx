import './WidgetCart.css';
import {useSelector} from 'react-redux';

const WidgetCart = ({show, action}) => {
    const items = useSelector(state => state.items);

    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            {
                items.map(item => <p>{item.title}</p>)
            }
            <button onClick={action}>Cerrar widget</button>
        </div>
    )
}

export default WidgetCart;