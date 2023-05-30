import '../styles/Banniere.css';
import logo from '../assets/img.png';
import { Link } from 'react-router-dom';

function Banniere() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <figure className="image is-32x32">
                    <img src={logo} className="logo" alt="logo" />
                </figure>
                <div className="navbar-item">
                    <Link role="button" className="navbar-link" to="/">Home</Link>
                </div>
                <div className="navbar-item">
                    <Link role="button" className="navbar-link" to="/filmCard">filmCard</Link>
                </div>
            </div>
        </nav>
    );
}
export default Banniere;