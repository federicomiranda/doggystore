import './Nav.css';

function Nav() {
    return (
        <header>
            <div className="container">
                <h1>DoggyStore</h1>

                <nav>
                    <ul>
                        <li>
                            <a href="#">Camas</a>
                        </li>
                        <li>
                            <a href="#">Comederos y bebederos</a>
                        </li>
                        <li>
                            <a href="#">Elementos de paseo</a>
                        </li>
                        <li>
                            <a href="#">Elementos de viaje</a>
                        </li>
                        <li>
                            <a href="#">Juguetes</a>
                        </li>
                        <li>
                            <a href="#">Ropa</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav;