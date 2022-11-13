import type { Attack } from './Attack'
import { v4 as uuidv4 } from 'uuid'

export class Creature {
    id: string;
    name: string;
    attacks: Attack[]
   
    constructor(name: string, attacks: Attack[]) {
      this.id = uuidv4();
      this.name = name
      this.attacks = attacks
    }
   
    attack(enemyCa : number) : number {
      console.log(`Turno de ${this.name} ${this.id} ---------------------------`)
      let totalDamage : number = 0
      this.attacks.forEach(attack => {
        totalDamage += attack.rollAttack(enemyCa)
      });
      console.log(`${this.name} ${this.id} ataca y ha hecho ${totalDamage} de daño`)
      return totalDamage;
    }
  }