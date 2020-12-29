import './CategoriesGrid.css';
import {Link} from 'react-router-dom';

const CategoriesGrid = () => {
    return (
        <section className="categories_grid">
            <div className="container">
                <div className="item">
                    <Link to="">
                        Camas  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Comederos y bebederos  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Elementos de paseo  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Elementos de viaje  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Juguetes  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Ropa 
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CategoriesGrid;