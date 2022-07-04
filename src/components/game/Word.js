import React from "react";

export default function Word({
  actualWord, playedLetters
}) {
  return (
    <div className="display-flex justify-content-around word-flex">
      {[...actualWord].map((letter) => (
        <>
          {playedLetters.has(letter) ? (
            <div className="word" style={{display : 'inline'}}> {letter}</div>
          ) : (
            <div className="word" style={{display : 'inline'}}>&nbsp;_&nbsp;</div>
          )}
        </>
      ))}
    </div>
  )
}
