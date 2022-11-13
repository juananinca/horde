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

    rollAttack(enemyCa : number): number {
        let attackRoll: number = this.generateRandomValue(1, 20)
        let damage : number = 0
        console.log(`Ataca con ${this.name} un ${attackRoll} + ${this.attackBonus} cuando la CA del enemigo es de ${enemyCa}`)
        if ( (attackRoll + this.attackBonus)  >= enemyCa ) {
            damage = this.rollDamage(attackRoll === 20)
        }
        return damage
    }

    rollDamage(critical: boolean = false): number {
        let totalDiceToRoll: number = critical ? this.numberDamageDice * 2 : this.numberDamageDice;
        let currentDamage : number = 0
        console.log(`Hace un daño de: `)
        for (let index = 0; index < totalDiceToRoll; index++) {
            let damage : number = this.generateRandomValue(1, this.damageDice)
            console.log(damage)
            currentDamage += damage
        }
        console.log(`Hace un total de daño de: ${currentDamage} + ${this.damageBonus}`)
        return currentDamage + this.damageBonus
    }

    private generateRandomValue(min: number, max: number) : number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    
  }