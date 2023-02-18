import "./game.css";
import rect from "../images/Rectangle 6.png";
import g1 from '../images/g1.png'
import g2 from '../images/g2.png'
import g3 from '../images/g3.png'
import links1 from '../images/links1.jpg'


const Game1 = () => {
  return (
    <div className="game">
      <img src={rect} className="rect" />
      <div className="desc">
        <div className="title">Nocturnal</div>
        <div className="impressions">
          <img src={g3} className='heart' />
          <p className="likes-num">232</p>
          <div>
            <img src={g2} className='g2'/>
            <img src={g1} className='g1' />
          </div>
          <p className="likes-num">146k</p>
        </div>
      </div>
      <div className="game-desc white">Its your last night shift as a forklift operator at…</div>
      <div className="footer">
        <img src={links1} className="links" />
        <button className="footer-btn white">Download</button>
      </div>
    </div>
  );
};

export default Game1;
