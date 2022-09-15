import { Entity } from './entity'

export class Item extends Entity{

    constructor(
        name: string, 
        x_position: number, 
        y_position: number
    ) {
        super(
            name, 
            x_position, 
            y_position
        )
    }

    public isBite(): boolean {
        return super.getName() == 'Bite'
    }
}

const i = new Item('RubberDuck', 1, 1)
console.log(i, i.getName())