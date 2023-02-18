import "./game.css";

import rect from "../images/Rectangle 6.png";
import g1 from '../images/g12.png'
import g2 from '../images/g22.png'
import g3 from '../images/g32.png'
import links2 from '../images/links2.jpg'

const Game1 = () => {
  return (
    <div className="game2">
      <img src={rect} className="rect" />
      <div className="desc">
        <div className="title2">The Keeper</div>
        <div className="impressions2">
          <img src={g3} className="heart" />
          <p className="likes-num">232</p>
          <div>
            <img src={g2} className="g2" />
            <img src={g1} className="g1" />
          </div>
          <p className="likes-num">146k</p>
        </div>
      </div>
      <div className="game-desc dark">Its your last night shift as a forklift operator at…</div>
      <div className="footer">
        <img src={links2} className="links" />
        <button className="footer-btn white">Download</button>
      </div>
    </div>
  );
};

export default Game1;
