import "./mainpage.css";
import rocket from "../images/rocket-removebg-preview.png";
import diamond from "../images/diamond.png";
import arrow from "../images/arrow.png";
import Game1 from './Game1'
import Game2 from './Game2'

const Mainpage = () => {
  return (
    <div className="mainpage">
      <div className="marketplace">
        <div className="market-data">
          <div className="market-text">
            <div className="thin">3D Game Assets Store & Free</div>
            <div className="notthin">
              High-quality premium & free 3D-game assets.
            </div>
          </div>
          <div className="market-btn">
            <img src={diamond} className="diamond" />
            <button>Download Assets</button>
          </div>
        </div>
        <div className="market-img">
          <img src={rocket} className="rocketImg" />
        </div>
      </div>

      {/* Games */}
      <div className="popular-games">
        <div className="pop">
          <span>Popular Games</span>
          <img src={arrow} />
        </div>
        <div className="game-container">
            <Game1 />
            <Game2 />
            <Game2 />
            <Game2 />
            <Game2 />
            <Game2 />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
