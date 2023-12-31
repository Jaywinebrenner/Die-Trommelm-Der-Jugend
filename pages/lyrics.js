import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import "../util/lyricsObject"
import { lyricsObject } from '../util/lyricsObject';

const Lyrics = ({englishShowingGlobal}) => {

  const [english, setEnglish ] = useState(true)
  const [isMobile, setIsMobile] = useState(false);
  const [clickedIndex, setClickedIndex] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [prevArrowVisible, setPrevArrowVisible] = useState();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    }
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    }
  }, [])

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      height: '60%'
    },
    content: {
      position: "absolute",
      border: "15px solid black",
      background: "rgb(255, 255, 255)",
      overflow: "auto",
      padding: isMobile ? 0 : "20px",
      margn: "auto",
      width: isMobile ? "92%" : "calc(100% - 70px)",
      height: isMobile ? "100%" : "calc(100% - 70px)",
      inset: isMobile ? "0" : ''
    }
  };

  
  function openModal(indexFromUtil) {
    setClickedIndex(indexFromUtil);
    setModalOpen(true)
  }

  function closeModal() {
    setClickedIndex()
    setModalOpen(false)
  }

  const nextModal = () => {
    let lastElement = lyricsObject.length - 1;
    console.log("last el", lastElement)
    console.log("clickedIndex", clickedIndex)

    if(clickedIndex === lastElement){
      setClickedIndex(0)
    } else {
      setClickedIndex(clickedIndex + 1)
    }
  }

  const prevModal = () => {
    let lastElement = lyricsObject.length - 1;
    console.log("last el", lastElement)
    console.log("clickedIndex", clickedIndex)
    if(clickedIndex === lastElement){
      setClickedIndex(0)
    } else {
      setClickedIndex(clickedIndex - 1)
    }
  }

    return (
      <div className="lyrics">
        {lyricsObject.map((item, i) => {
          return(
            <div key={`modal-key=${i}`} className='lyrics__wrapper'>
              <h2  onClick={() => openModal(i)}>{englishShowingGlobal ? item.englishTitle : item.title}</h2>
              <Modal
                isOpen={clickedIndex === i ? true : false}
                onRequestClose={closeModal}
                style={customStyles}
              >

                <div className='controls-wrapper'>
                  <div className='x-wrapper'>
                    <h2 onClick={closeModal}>X</h2>
                  </div>
                  <div className='arrows-wrapper'>
                    <div className='next-wrapper'>
                      <img className='prev' onClick={()=> prevModal(i)} src="/arrow.png"/>
                    </div>
                    <div className='next-wrapper'>
                      <img onClick={()=> nextModal(i)} src="/arrow.png"/>
                    </div>
                  </div>
                </div>
                <div className='audio-wrapper'>
                  <audio
                    controls
                    controlsList="nodownload"
                    src={item.audioUrl}>
                        Your browser does not support the
                        <code>audio</code> element.
                  </audio>
                </div>
  
                <h2 className='modal-lyric-title'>{englishShowingGlobal ? item.englishTitle : item.title}</h2>
                {englishShowingGlobal && <div>{item.english.map((lyric, i)=> {
                  return (
                    <>
                      <h3 key={`modal-lyric=${i}`} className='modal-lyric-line'>{lyric}</h3>
                  </>
                  )
                })}</div>}

               {!englishShowingGlobal && <div key={`modal-lyric-two=${i}`}>{item.german.map((lyric, i)=> {
                  return (
                  <h3 key={`lyric-two-key=${i}`} className='modal-lyric-line'>{lyric}</h3>
                  )
                })}</div>}

              </Modal>

            </div>
          )
        })}
        <div>
        </div>
        {modalOpen && <style jsx global>{`
          html {
            overflow: hidden;
          }
      `}</style>}







      </div>

    )
}

export default Lyrics;