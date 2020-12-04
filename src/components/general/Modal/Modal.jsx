import './Modal.css';

const Modal = ({children}) => {
    return (
        <div className="overlay" id="modal">
            <div className="modal">
                <a href="#" className="cerrar">X</a>

                {children}
            </div>
        </div>
    )
}

export default Modal;