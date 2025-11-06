import biletikAudio from './assets/audio/biletik.mp3'
import { useEffect, useState, useRef } from 'react'
import biletik from './constants/biletik'
import type { SongString } from './types/song.types'
import Strings from './components/Strings'

function Karaoke() {
  const audioRef = useRef<HTMLAudioElement>(null);
  if (audioRef.current === null) {
    audioRef.current = new Audio(biletikAudio);
  }
  const [song] = useState(biletik)
  const [isAudioLoaded, setIsAudioLoaded] = useState(false)
  const [isAudioPlayed, setIsAudioPlayed] = useState(true)
  const [currentString, setCurrentString] = useState<SongString>(song.strings[0])
  const [currentStringIndex, setCurrentStringIndex] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.preload = 'auto'

    const handleCanPlay = () => {
      setIsAudioLoaded(true)
    }

    const handleError = (e: ErrorEvent) => {
      console.error('Error loading audio:', e)
    }

    audio.addEventListener('canplay', handleCanPlay)
    audio.addEventListener('error', handleError)
    audio.load()

    return () => {
      audio.removeEventListener('canplay', handleCanPlay)
      audio.removeEventListener('error', handleError)
    }
  }, [])

  useEffect(() => {
    if (!isAudioLoaded) return

    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.1

    const handleTimeUpdate = () => {
      const currentTime = audio.currentTime * 1000
      
      if (currentTime >= currentString.end) {
        if (currentStringIndex < song.strings.length - 1) {
          const nextIndex = currentStringIndex + 1
          setCurrentString(song.strings[nextIndex])
          setCurrentStringIndex(nextIndex)
        } else {
          setCurrentStringIndex(0)
          setCurrentString({end: 90000000} as SongString)
        }
      }
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [currentString, currentStringIndex, isAudioLoaded, song.strings])

  const handlePlay = async () => {
    if (!isAudioLoaded) {
      return
    }

    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try {
        await audio.play()
        setIsAudioPlayed(true)
      } catch (error) {
        console.error('Error playing audio:', error)
      }
    }
  }

  const handlePause = (currAudio?: HTMLAudioElement) => {
    if (currAudio) {
      setIsAudioPlayed(false)
      return currAudio.pause()
    }
    const audio = audioRef.current
    if (!audio) return
    if (!audio.paused) {
      setIsAudioPlayed(false)
      audio.pause()
    }
  }

  const handleClick = () => {
    const audio = audioRef.current
    if (!audio) return
    if (!audio.paused) {
      handlePause(audio)
    } else {
      handlePlay()
    }
  }

  return (
    <div className='h-full' onClick={handleClick}>
      <Strings strings={song.strings} currentString={currentString} isPlayed={isAudioPlayed} />
      {!isAudioPlayed && <div className='fixed z-999 top-0 right-0 left-0 bottom-0 bg-black opacity-75 flex justify-center items-center text-[128px]'>| |</div>}
    </div>
  )
}

export default Karaoke
