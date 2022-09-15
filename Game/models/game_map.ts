import { Zombie } from './zombie'
import { Entity } from './entity'

interface ZombiesInMap  {
    x_position: number
    y_position: number
    zombie: Zombie
}

export class GameMap {
    private x_size: number
    private y_size: number
    private entities: Array<Entity> = []
    //private zombies_in_map: Array<ZombiesInMap> = []

    constructor(size: number) {
        console.log(`Creating ${size} x ${size} map...`)
        this.x_size = size
        this.y_size = size
    }

    public addEntity(entity: Entity): void {
        this.entities.push(entity)
    }

    public getEntity(entityName: string): Entity | undefined {
        return this.entities.find((entity) => entity.getName() == entityName);
    }

    public canMove (x_position: number, y_position: number): boolean {
        if (
            x_position > this.x_size || 
            y_position > this.y_size ||
            x_position < 0 || 
            y_position < 0
        ) {
            return false
        }

        return true
    }

    public addZombieInMap () {

    }
}