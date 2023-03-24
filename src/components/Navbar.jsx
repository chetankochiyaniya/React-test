import { Link } from "react-router-dom";

const NavaBar = () => {
    return <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/product">Product</Link></li>
        </ul>
    </>
}
export default NavaBar;