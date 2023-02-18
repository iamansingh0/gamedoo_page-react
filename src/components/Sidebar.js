import "./sidebar.css";
import Logo from "../images/Logo.png";
import shape from "../images/Shape.png";
import path1 from "../images/Path1.png";
import path2 from "../images/Path2.png";
import shape1 from "../images/Shape-1.png";
import shape2 from "../images/Shape-2.png";
import shape3 from "../images/Shape-3.png";
import shape4 from "../images/Shape-4.png";
import shape5 from "../images/Shape-5.png";
import icon from "../images/icon.png";
import circle from "../images/Ellipse 3.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="side">
        <div className="dashboard">
          <img src={shape} alt="shape" className="shape" />
          <button className="dashbtn">Dashboard</button>
          <div className="pages">
            <div className="item">
              <img src={shape1} />
              <p>Game Store</p>
            </div>
            <div className="item">
              <img src={icon} />
              <p>Live Stream TV</p>
            </div>
            <div className="item">
              <img src={shape2} />
              <p>Team Members</p>
            </div>
            <div className="item">
              <img src={shape3} />
              <p>Badges</p>
            </div>
            <div className="item">
              <img src={shape4} />
              <p>My Library</p>
              <img src={circle} className='circle'/>
              <span className="digit">2</span>
            </div>
            <div className="item">
              <img src={shape5} />
              <p>Thropies</p>
              <img src={circle} className='circle'/>
              <span className="digit">7</span>
            </div>
          </div>
        </div>
        <div className="logout">
          <img src={path1} className="path1" />
          <img src={path2} className="path2" />
          <button className="logoutbtn">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
