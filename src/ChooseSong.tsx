import { useSetAtom } from "jotai"
import { currentSongAtom } from "./store/songStore"
import biletik from "./constants/biletik";
import type { Song } from "./types/song.types";
import { useState } from "react";

export default function ChooseSong() {
    const setSong = useSetAtom(currentSongAtom);
    const [isSongFullScreen, setIsSongFullScreen ] = useState<Song | null>(null)
    const handleClick = (song: Song) => {
        setSong(song)
    }
    return (
        <div className="grid grid-cols-5 grid-rows-[150px] gap-4 text-[36px]">
            <div></div>
            <div className="flex justify-center items-center rounded-lg">100</div>
            <div className="flex justify-center items-center rounded-lg">200</div>
            <div className="flex justify-center items-center rounded-lg">300</div>
            <div className="flex justify-center items-center rounded-lg">400</div>
            {songs.map(song => {
                return <>
                    <div className="flex justify-center items-center">{song.name}</div>
                    {song.songs.map(song => <div className="flex justify-center items-center border border-black rounded-lg" onClick={() => handleClick(song)}>{song.name}</div>)}
                </>
            })}
        </div>
    )
}