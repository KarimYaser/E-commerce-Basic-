import { Link } from "react-router-dom"
import './Home.css'
function Home() {
    return (<>
        <div className="container">
            <h2>Welcome To My E-Commerce</h2>
            <button> <Link className="btn" to="/Products">Go To Products</Link></button>
        </div>
    </>)
}
export default Home