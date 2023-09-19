

class Car{
    constructor(name, color, bonus){
        this.name = name
        this.color = color
        this.extraBonus = bonus
    }

    info() {
        console.log(`Name of car: ${this.name},color is ${this.color}. There is some bonus ${this.extraBonus}`)
    }

    getBonus() {
        return this.extraBonus
    }

    setBonus() {
        if(typeof bonus === 'number' && bonus > 0 && bonus < 100) {
            this.extraBonus = bonus
        }else{
            console.log('Something went wrong')
        }
    }
}

const bmw = new Car ('bmw', 'black', 10)

bmw.info()