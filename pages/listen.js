const Listen = ({englishShowingGlobal}) => {
    return (
        <div className="listen">
            <h3>{englishShowingGlobal ? "STREAM THE MUSIC IN COMPLETE TOTALITY RIGHT HERE WITH THIS WEB AUDIO INTERFACE" : "STREAMEN SIE DAS ALBUM IN SEINER VOLLSTÄNDIGKEIT HIER"}</h3>
 
            <div className='audio-wrapper'>
                <audio
                controls
                controlsList="nodownload"
                src="/album/Album-One-Track.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
                <p>Die Trommeln Der Jugend - Harlequin Defibrillator</p>
            </div>
            <h3>{englishShowingGlobal ? "OR FIND THE MUSIC BY CLICKING THE FAVORITE CORPORATION ICON BELOW YOU" : "ODER SUCHEN SIE DIE MUSIK, INDEM SIE UNTEN AUF DAS LIEBLINGS-UNTERNEHMENSSYMBOL KLICKEN"}</h3>
            <div className="icon-wrapper">
                <a target="_blank" rel="noreferrer" href="https://bandcamp.com" className="img-wrapper">
                    <img  src="/bc.png" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://youtube.com" className="img-wrapper">
                    <img className="youtube" src="/YT.png" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://youtube.com" className="img-wrapper">
                    <img className="youtube" src="/spotify.png" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://soundcloud.com/jaywinebrenner-dietrommelnderjugend/albums" className="img-wrapper">
                    <img className="youtube" src="/sc.png" />
                </a>
            </div>

        </div>

    )
}

export default Listen;