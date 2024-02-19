import './rightbar.css'
import SearchIcon from "@mui/icons-material/Search";

const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="mainText">
                    Find your teammate!
                </div>
                <div className="gameChooseText">
                    Search for game:
                </div>
                <div className="searchBar">
                    <input placeholder="Game name" className="searcherInput"/>
                    <SearchIcon className="searcher"/>
                </div>
                <div className="gameChooseText">
                    Popular games:
                </div>
                <div className="gameWrapper">
                    <div className="game">
                        <img src="/assets/humans/dg1morxxl4q51.webp" alt="" className="gameImg"/>
                        <div className="gameName">Genshin Impact</div>
                    </div>
                    <div className="game">
                        <img src="/assets/humans/dg1morxxl4q51.webp" alt="" className="gameImg"/>
                        <div className="gameName">Counter Strike: Global Offensive</div>
                    </div>
                    <div className="game">
                        <img src="/assets/humans/dg1morxxl4q51.webp" alt="" className="gameImg"/>
                        <div className="gameName">Rust</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rightbar;