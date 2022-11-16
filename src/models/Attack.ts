import type { Logger } from './Logger'

export class Attack {
    name: string;
    attackBonus: number;
    damageBonus: number;
    numberDamageDice: number;
    damageDice: number;

   
    constructor(name: string, ab: number, db: number, ndd: number, dd: number ) {
      this.name = name
      this.attackBonus = ab
      this.damageBonus = db
      this.numberDamageDice = ndd
      this.damageDice = dd
    }

    rollAttack(enemyCa : number, logger: Logger): number {
        let attackRoll: number = this.generateRandomValue(1, 20)
        let damage : number = 0
        logger.text += `Ataca con ${this.name} \n Att:(${attackRoll}+${this.attackBonus}) ${attackRoll + this.attackBonus}, CA: ${enemyCa}\n`
        if ( (attackRoll + this.attackBonus)  >= enemyCa ) {
            damage = this.rollDamage(attackRoll === 20, logger)
        }
        return damage
    }

    rollDamage(critical: boolean = false, logger: Logger): number {
        let totalDiceToRoll: number = critical ? this.numberDamageDice * 2 : this.numberDamageDice;
        let currentDamage : number = 0
        logger.text += `Hace un daño de: \n`
        for (let index = 0; index < totalDiceToRoll; index++) {
            let damage : number = this.generateRandomValue(1, this.damageDice)
            logger.text += `${damage}\n`
            currentDamage += damage
        }
        logger.text += `Total de daño: (${currentDamage}+${this.damageBonus}) ${currentDamage+this.damageBonus}\n`
        return currentDamage + this.damageBonus
    }

    private generateRandomValue(min: number, max: number) : number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    
  }