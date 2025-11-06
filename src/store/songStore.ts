import { atom } from "jotai";
import biletik from "../constants/biletik";

const initialSongs = [
    {
        id: 0,
        name: 'Семён',
        songs: [
            biletik,
            biletik,
            biletik,
            biletik,
        ]
    },
    {
        id: 1,
        name: 'Замени слова',
        songs: [
            biletik,
            biletik,
            biletik,
            biletik,
        ]
    },
    {
        id: 2,
        name: 'What?',
        songs: [
            biletik,
            biletik,
            biletik,
            biletik,
        ]
    },
    {
        id: 3,
        name: 'Семён',
        songs: [
            biletik,
            biletik,
            biletik,
            biletik,
        ]
    }
]

export const currentSongAtom = atom(biletik)