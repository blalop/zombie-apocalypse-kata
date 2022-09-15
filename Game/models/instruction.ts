import {GameMap} from './game_map'

interface Instruction {

    run(gameMap: GameMap): void
}

enum Direction {
    Left, Right, Up, Down
}

class Movement implements Instruction {

    private characterName: string;
    private direction: Direction;

    constructor(characterName: string, direction: Direction) {
        this.characterName = characterName;
        this.direction = direction;
    }

    run(gameMap: GameMap): void {
        const character = gameMap.getEntity(this.characterName)!!
        switch (this.direction) {
            case Direction.Left:
                character.setX(character.getX() - 1)
                break;
            case Direction.Right:
                character.setX(character.getX() + 1)
                break;
            case Direction.Up:
                character.setY(character.getY() + 1)
                break;
            case Direction.Down:
                character.setY(character.getY() - 1)
                break;
        }
    }
}


enum Slot { LeftHand, RightHand, Backpack, Floor}

class PickUpEquipment implements Instruction {

    private survivorName: string;
    private itemName: string;
    private slot: Slot;

    constructor(survivorName: string, itemName: string, slot: Slot) {
        this.survivorName = survivorName;
        this.itemName = itemName;
        this.slot = slot;
    }

    run(gameMap: GameMap): void {
        
    }
}


class MoveEquipment implements Instruction {

    private survivorName: string;
    private itemName: string;
    private destination: Slot;

    constructor(survivorName: string, itemName: string, destination: Slot) {
        this.survivorName =survivorName;
        this.itemName = itemName;
        this.destination = destination;
    }

    run(gameMap: GameMap): void {
        
    }
}

class Attack implements Instruction {
    private attackerName: string;
    private receiverName: string;
    private itemName: string;
    private hasEffect: Boolean;

    constructor(attackerName: string, receiverName: string, itemName: string, hasEffect: Boolean) {
        this.attackerName = attackerName;
        this.receiverName = receiverName;
        this.itemName = itemName;
        this.hasEffect = hasEffect;
    }

    run(gameMap: GameMap): void {
        
    }
}