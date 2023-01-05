import { Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
        <Link to="/">Quiz Game</Link>
        </div>
    )
};

export default Header;