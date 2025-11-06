import biletikAudio from '../assets/audio/biletik.mp3'
import { createStrings } from '../utils/createStrings'

export default {
    id: 'biletik',
    name: 'Билетик в кино',
    audio: biletikAudio,
    strings: createStrings(30, [
        ['Когда на город опускается вечер', 34.5],
        ['Это кинофильм', 37.5],
        ['Где назначаются любимыми встречи', 42],
        ['Встречи для двоих', 45],
        ['Он раздаёт такие разные роли', 49.5],
        ['Роли и слова', 52.5],
        ['Где открываются любые пароли', 57],
        ['Все как дважды два', 60],
        ['Звездные огни', 64],
        ['Розовый закат', 68],
        ['Фильмы о любви', 72],
    ])
}