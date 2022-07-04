import React from "react";
import Lives from './Lives';
import Word from './Word';
import Letters from './Letters';
import Start from './Start';

export default function Layout({
  lives, actualWord, played_set, guess, start, isWon, isRunning
}) {
  return (
    <>
      <div className="game-wrapper">
        {
          isRunning && <>
            <div className="left-pane">
              <Lives livesLeft={lives} />
            </div>
            <div className="right-pane">
              <Word actualWord={actualWord} playedLetters={played_set} />
              <Letters playedLetters={played_set} onSelect={guess} />
            </div>
          </>
        }
        
        {
          actualWord && isWon && <>
            <div className="message">You Won!</div>
          </>
        }

        <Start onStart={start} isRunning={isRunning} />

      </div>
    </>
  )
}