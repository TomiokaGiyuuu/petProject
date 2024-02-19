import './statistics.css'

const Statistics = () => {
    return (
        <div className="statistics">
            <div className="statisticsWrapper">
                <div className="userGames">
                    User Games
                </div>
                <hr className="stataHr"/>
                <div className="games">
                    <div className="gameStata">
                        <img src="/assets/games/genshin.webp" alt="" className="gameStataImg"/>
                        <div>
                            <div className="name">Genshin Impact</div>
                            <div className="hours">542 hours</div>
                        </div>
                    </div>
                    <div className="gameStata">
                        <img src="/assets/games/csgo.webp" alt="" className="gameStataImg"/>
                        <div>
                            <div className="name">Counter Strike: Global Offensive</div>
                            <div className="hours">1305 hours</div>
                        </div>
                    </div>
                    <div className="gameStata">
                        <img src="/assets/games/rust.png" alt="" className="gameStataImg"/>
                        <div>
                            <div className="name">Rust</div>
                            <div className="hours">29 hours</div>
                        </div>
                    </div>
                </div>
                <div className="games">
                    <div className="gameStata">
                        <img src="/assets/games/pubg.png" alt="" className="gameStataImg"/>
                        <div>
                            <div className="name">PUBG</div>
                            <div className="hours">230 hours</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;