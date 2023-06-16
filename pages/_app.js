import "../styles/app.scss";
import Nav from "../components/Nav";
import { emojiCursor } from 'cursor-effects';
import React, {useEffect, useState} from 'react';

function MyApp({ Component, pageProps }) {

  const [englishShowingGlobal, setEnglishShowing] = useState(true)

  useEffect(() => {
    // new emojiCursor({ emoji: ["🥎", "🥎", "🥎"] });

  }, [])

  return (
    <div>
      <div style={{right: englishShowingGlobal ? "-31px" : "-31!important"}} className='global-lang-button' onClick={()=> setEnglishShowing(prev => !prev)}><p>{!englishShowingGlobal ? "ENGLISH" : "DEUTSCH"}</p></div>
    <Nav englishShowingGlobal={englishShowingGlobal}/>
      <Component {...pageProps} englishShowingGlobal={englishShowingGlobal} />
    </div>
  )
}

export default MyApp
