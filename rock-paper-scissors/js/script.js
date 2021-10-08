const choices=["rock","paper","scissors","spock","lizard"];

const ResultsArea=({selected, setSelected, setScore})=>{

    const [house, setHouse]=React.useState(-1);
    const [winner, setWinner]=React.useState(-1);

    React.useEffect(()=>{
        setTimeout(()=>{
            console.log("house plays");
            setHouse(Math.floor(5*Math.random()));
        }, 1000)
    },[]);

    React.useEffect(()=>{
        if(house<0) return;
        setTimeout(()=>{
            console.log("calculating");
            if((selected+2)%5==house || (selected+4)%5==house){
                setScore(1);
                setWinner(0);
            }
            else if((house+2)%5==selected || (house+4)%5==selected){
                setScore(-1);
                setWinner(1);
            }
            else setWinner(3);
            document.getElementById("winner-box").className="show";
            document.getElementById("results-area").className="calculated";
        }, 1000)
    },[house]);

    return(
        <div id="results-area">
            <div id="player-choice" className="result-choice">
                <h3>YOU PICKED</h3>
                <div className={"result-icon "+choices[selected]+(winner==0?" winner":"")}><div className="wrapper">
                    <img src={"../images/icon-"+choices[selected]+".svg"} alt={choices[selected]}></img>
                </div></div>
            </div>
            <div id="house-choice" className="result-choice">
                <h3>THE HOUSE PICKED</h3>
                {house<0
                    ?<div id="house-playing" />
                    :<div className={"result-icon "+choices[house]+(winner==1?" winner":"")}><div className="wrapper"><img src={"../images/icon-"+choices[house]+".svg"} className={(winner==1?" winner":"")} alt={choices[house]}></img></div></div>
                }
            </div>
            <div id="winner-box">
                <h2>{winner==0?"YOU WIN":(winner==1?"YOU LOSE":"DRAW")}</h2>
                <button onClick={()=>setSelected(-1)}>PLAY AGAIN</button>
            </div>
        </div>
    )
}

const SelectionArea=({setSelected})=>{
    return(
        <div id="selection-area">
            {choices.map((x,i)=>(
                <button key={i} className={"selection-button "+x} onClick={()=>setSelected(i)}><div className="wrapper">
                    <img key={i} className="hand-image" src={"../images/icon-"+x+".svg"} alt={x}></img></div>
                </button>
            ))}
        </div>
    )
}

const Main=()=>{

    const [score, setScore]=React.useState(0);
    const [selected, setSelected]=React.useState(-1);
    const [help, setHelp]=React.useState(0);

    React.useEffect(()=>{
        if(localStorage.getItem("rps-score")) setScore(parseInt(localStorage.getItem("rps-score")));
    },[]);

    return(
        <div id="main">
            <header id="game-header">
                <img id="logo" src="../images/logo-bonus.svg"></img>
                <div id="score-area">
                    <h4>SCORE</h4>
                    <h2>{score}</h2>
                </div>
            </header>
            {selected<0
                ?<SelectionArea setSelected={setSelected} />
                :<ResultsArea selected={selected} setSelected={setSelected} setScore={(x)=>{
                    localStorage.setItem("rps-score",score+x);
                    setScore(score+x);
                }} />
            }
            <div id="rules">
                <button id="rules-toggle" onClick={()=>setHelp(1)}>RULES</button>
                <div id="rules-overlay" className={help?"rules-show":"rules-hide"}>
                    <div id="rules-box">
                        <h6>RULES</h6>
                        <img src="../images/image-rules-bonus.svg"></img>
                        <button onClick={()=>setHelp(0)}>
                            <img src="../images/icon-close.svg"></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Main />, document.getElementById("root"));
