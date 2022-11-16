import type { Attack } from './Attack'
import type { Logger } from './Logger'

export class Creature {
    name: string;
    attacks: Attack[]
   
    constructor(name: string, attacks: Attack[]) {
      this.name = name
      this.attacks = attacks
    }
   
    attack(enemyCa : number, logger: Logger) : number {
      logger.text += `${this.name} -----------\n`
      let totalDamage : number = 0
      this.attacks.forEach(attack => {
        totalDamage += attack.rollAttack(enemyCa, logger)
      });
      logger.text += `${this.name} ha hecho un total de ${totalDamage} puntos de daño\n`
      return totalDamage;
    }
  }