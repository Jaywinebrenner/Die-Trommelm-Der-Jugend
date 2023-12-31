import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import React, {useState} from 'react';


export default function Index({englishShowingGlobal}) {

  const [emailShowing, setEmailShowing] = useState(false);


  return (
    <div className='app'>
      <Head>
        <title>DIE TROMMELN DER JUGEND</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home">


        <div className="home__hero">
          <div className='hero__title'><h1>DIE TROMMELN DER JUGEND</h1>
          {/* <h3 className='pronunciation'>{englishShowingGlobal ? "(Dee Trom Uln Dare You Gend)" : null }</h3> */}
          </div>
        </div>
        <div className='home__cta'>
          <h1>{englishShowingGlobal ? "PRESENTS" : "PRÄSENTIERT"}</h1>
          <h1>{englishShowingGlobal ? "THEIR DEBUT ALBUM" : "IHR DEBÜTALBUM"}</h1>
        </div>
        <div className="home__art">
            <img src="/cover.jpg"/>
        </div>
      </div>
    </div>
  )
}
