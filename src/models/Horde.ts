import { Attack } from './Attack'
import { Creature } from './Creature'

let tejonGigante : Creature = initTejonGigante()
let horde : Creature[] = [tejonGigante]

function initTejonGigante() : Creature {
    let mordisco : Attack = new Attack("Mordisco", 3, 1, 1, 6)
    let garras : Attack = new Attack("Garras", 3, 1, 2, 4)

    return new Creature("Tejón Gigante", [mordisco, garras])
}

export {horde}