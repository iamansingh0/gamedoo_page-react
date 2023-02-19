import Navbar from "./Navbar"
import './rightmenu.css'
import Rightmenu from "./Rightmenu"
import Mainpage from "./Mainpage"

const Rightpage = () => {
    return (
        <div className="rightpage">
            <Navbar />
            <div className='backChange'>
                <Rightmenu />
                <Mainpage />
            </div>
        </div>
    )
}

export default Rightpage
