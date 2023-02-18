import "./rightmenu.css";
import thumbnail from "../images/SideBar Thumbnailthumbnail.jpg";
import details from "../images/details.jpg";
import star from "../images/Star Rate.png"
import awards from "../images/Awards.png"

const Rightmenu = () => {
  return (
    <div className="rightmenu">
      <img src={thumbnail} className="thumbPic" />
      <div className="header">
        <div className="header-text">Nocturnal</div>
        <div className="details">
          <img src={details} className="det-pic" />
        </div>
      </div>
      <div className="text">
        <div className="text-content">
          KeyCars is a free (multiplayer only) game where each player can play
          using a single key on a keyboard. Press a key to join, then hold that
          key to turn the vehicle. Clash into players, shoot projectiles or
          trick them into driving off the ledge…
        </div>
        <div className="text-content">
          KeyCars is a free (multiplayer only) game where each player can play
          using a single key on a keyboard. Press a key to join, then hold that
          key to turn the vehicle. Clash into players, shoot projectiles or
          trick them into driving off the ledge…
        </div>
        <div className="text-content">
          KeyCars is a free (multiplayer only) game where each player can play
          using a single key on a keyboard. Press a key to join, then hold that
          key to turn the vehicle. Clash into players, shoot projectiles or
          trick them into driving off the ledge…
        </div>
        <div className="text-content">
          KeyCars is a free (multiplayer only) game where each player can play
          using a single key on a keyboard. Press a key to join, then hold that
          key to turn the vehicle. Clash into players, shoot projectiles or
          trick them into driving off the ledge…
        </div>
        <div className="text-content">
          KeyCars is a free (multiplayer only) game where each player can play
          using a single key on a keyboard. Press a key to join, then hold that
          key to turn the vehicle. Clash into players, shoot projectiles or
          trick them into driving off the ledge…
        </div>
        <div className="footer-class">
            <img src={star} className='star'/>
            <img src={awards} className='star'/>
        </div>
      </div>
    </div>
  );
};

export default Rightmenu;
