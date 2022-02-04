import "./App.css";
import Button from "../src/components/Button/Button";
import laodDice from "./utils/loadDice";
import { useState } from "react";
import diceContext from "./diceContext.js/diceContext";
import Container from "./components/Container/Container";

function App() {
  const [diceState, setDiceState] = useState({
    randomNum: 0,
  });
  const [gameState] = useState({
    egg: ["EGG", "EGG", "EGG"],
    frog: ["FROG", "FROG", "FROG"],
    cookie: ["COOKIE", "COOKIE", "COOKIE"],
  });
  const [boardState, setBoardState] = useState({
    board: ["", "", "", "", "", ""],
    state: 0,
  });
  const onClick = (e) => {
    const number = laodDice();
    setDiceState({
      ...diceState,
      randomNum: number,
    });
    if (number === 1) {
      gameState.cookie.splice(0, 1);
    } else if (number === 2) {
      gameState.egg.splice(0, 1);
    } else if (number === 3) {
      gameState.frog.splice(0, 1);
    } else if (number === 4) {
      setBoardState({
        ...boardState,
        state: boardState.state + 1,
      });
    }
  };
  return (
    <>
      <diceContext.Provider
        value={{ diceState, setDiceState, gameState, boardState }}
      >
        <div className="container text-center">
          <h1 className="display-1">GROGU GAME</h1>
          <Button func={() => {}} text="START" prop="success" />
          <Button func={onClick} text="DICE" prop="dark" />
          <Button text={diceState.randomNum} prop="info" />
          <ul className="list-group list-group-horizontal">
            {gameState.egg.map((object, index) => {
              return <Container candy={object} key={index} />;
            })}
          </ul>

          <ul className="list-group list-group-horizontal">
            {gameState.cookie.map((object, index) => {
              return <Container key={index} candy={object} />;
            })}
          </ul>
          <ul className="list-group list-group-horizontal">
            {gameState.frog.map((object, index) => {
              return <Container key={index} candy={object} />;
            })}
          </ul>
          <div className="board">
            {boardState.board.map((object, index) => {
              return (
                <div key={index} className="boardSpot">
                  {index === boardState.state ? (
                    <img
                      src={"../../grogufavicon.ico"}
                      alt="grogu"
                      width="50"
                    />
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </diceContext.Provider>
    </>
  );
}

export default App;
