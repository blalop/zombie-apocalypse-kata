import { Entity } from './entity'

export class Zombie extends Entity {
    private life: number = 1;

    constructor(
        name: string, 
        x_position: number, 
        y_position: number
    ) {
        super(name, x_position, y_position)
    }

    public setLife() {
        this.life = 0
    }

    public getLife() {
        return this.life
    }
}

