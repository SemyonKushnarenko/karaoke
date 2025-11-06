import clsx from "clsx"
import type { SongString } from "../types/song.types"
import { useEffect, useRef, useState } from "react"
import { START_STRING } from "../constants/song.constants"

interface StringsProps {
    strings: SongString[]
    currentString: SongString
    isPlayed: boolean
}

const Strings: React.FC<StringsProps> = ({ strings, currentString, isPlayed }) => {
    const previousStringRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [ targetScroll, setTargetScroll ] = useState(0)
    
    useEffect(() => {
        if (!previousStringRef.current || !containerRef.current) return
        
        const height = previousStringRef.current.getBoundingClientRect().height
        
        const currentTargetScroll = targetScroll + height;
        setTargetScroll(currentTargetScroll)
        
        containerRef.current.style.transition = 'transform 1000ms ease-in-out'
        containerRef.current.style.transform = `translateY(-${currentTargetScroll}px)`
    }, [currentString, strings])

    return (
        <div className="h-full mt-[250px] overflow-hidden min-w-[800px] relative">
            <div 
                ref={containerRef}
                className="flex flex-col items-center justify-start absolute w-full"
            >
                {strings.map((string) => (
                    <div 
                        ref={string.id === currentString.id - 1 ? previousStringRef : null}
                        key={string.id} 
                        className={clsx(
                            `text-center max-w-[800px] w-full h-auto opacity-1 pointer-events-none pb-8 text-6xl font-bold origin-top transition-all duration-1000 ease-in-out`,
                            {
                                'text-10xl text-red-500 scale-100 opacity-100': string.id === currentString.id,
                                'text-gray-500 scale-100 opacity-100': string.id !== currentString.id,
                                'text-gray-500/75 scale-95 opacity-75': string.id > currentString.id,
                                '!text-gray-500/25 scale-90 opacity-25': string.id > currentString.id + 1 || string.id < currentString.id,
                            }
                        )}
                    >
                        <span className={clsx({
                            'animate-(--animate-wiggle)': string.id === currentString.id && currentString.name === START_STRING && isPlayed,
                        })}>{string.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Strings
