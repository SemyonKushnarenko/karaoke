export interface SongString {
    name: string
    end: number
    id: number
}

export interface Song {
    id: string
    name: string
    audio: string
    strings: SongString[]
}