import './WidgetCart.css';

const WidgetCart = ({show}) => {
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <p>Soy un widget</p>
        </div>
    )
}

export default WidgetCart;