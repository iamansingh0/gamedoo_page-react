import "./navbar.css";
import searchIcon from "../images/s2.png";
import s1 from "../images/s1.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import profile from "../images/profile.png";
import circle from "../images/Ellipse2.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-box">
        <input type="text" placeholder="Search game..." className="search" />
        <img src={searchIcon} className="search-icon" />
      </div>
      <div className="menu-box">
        <div className="s">
          <img src={s3} />
        </div>
        <div className="s">
          <img src={s4} />
          <img src={circle} className='circle1'/>
        </div>
        <div className="s">
          <img src={s1} />
        </div>
        <div className="profile">
          <img src={profile} className='pro'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
