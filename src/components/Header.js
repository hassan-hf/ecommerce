import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import {Searchproduct} from '../redux/ProductAction'

const Header = () => {
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
    console.warn("Redux data from header", result)
    return (
        <div className="header">
            
            <Link to='/'><h1 className='logo'>E-Comm</h1></Link>
            <div className="search-box">
                <input type="text" onChange={(event)=>dispatch(Searchproduct(event.target.value))} placeholder="Search Products" />
            </div>
            <Link to="/cartitem">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
            </div>
            </Link>
        </div>
    )
}

export default Header;