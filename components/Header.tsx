import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="logo-nav-container">
        <div className="logo-container">
          <img src="pc-logo.png" alt="PC Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link href="#">
                <a>+ Crear publicación</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Log In</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Sign Up</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="title-container">
        <img src="para-cuando-logo.png" alt="Para cuando? Logo" />
        <p>Marcas, artistas y torneos en Queretaro</p>
      </div>
      <div className="search-container">
        <input type="text" placeholder="¿Qué querés ver en tu ciudad?" />
      </div>
      <div className="categories-container">
        <button>Marcas y tiendas</button>
        <button>Artistas y conciertos</button>
        <button>Torneos</button>
      </div>
    </header>
  );
};

export default Header;
