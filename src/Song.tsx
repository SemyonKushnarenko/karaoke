import { useState } from "react";
import Karaoke from "./Karaoke";
import { useAtomValue } from "jotai";
import { currentSongAtom } from "./store/songStore";

function Song() {
  const [isStarted, setIsStarted] = useState(false);
  const currentSong = useAtomValue(currentSongAtom)
  
  return (
    <div className='h-full w-full'>
      {
        !isStarted ? (
          <div className="h-full flex flex-col gap-4 justify-center items-center">
            <p className="text-[64px] font-bold">{currentSong.name}</p>
            <button className="" onClick={() => setIsStarted(true)}>Начать</button>
          </div>
        ) : <Karaoke/>
      }
    </div>
  )
}

export default Song
