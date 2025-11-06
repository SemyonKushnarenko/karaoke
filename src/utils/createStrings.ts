import { START_STRING } from "../constants/song.constants"
import type { SongString } from "../types/song.types"

export const createStrings = (start: number, strings: Array<[string, number]>) => {
    const beginning: SongString[] = [
        {
            name: START_STRING,
            end: start - 3,
            id: -3,
        },
        {
            name: '3',
            end: start - 2,
            id: -2,
        },
        {
            name: '2',
            end: start - 1,
            id: -1,
        },
        {
            name: '1',
            end: start,
            id: 0,
        },
    ]

    return beginning.concat(strings.map((string, index) => ({
        name: string[0],
        end: string[1],
        id: index + 1,
    }))).map(s => ({
        ...s,
        end: s.end * 1000
    }))
}