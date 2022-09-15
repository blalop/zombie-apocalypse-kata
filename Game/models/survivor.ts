import { Item } from "./item"
import { Zombie } from "./zombie"
import { Entity } from './entity'

export class Survivor extends Entity{
    private Life: number;
    private Exp: number;
    private LeftHand: Item | null;
    private RightHand: Item | null;
    private BackPack: Array<Item> = [];

    constructor(
        name: string,
        Life: number,
        Exp: number,
        LeftHand: Item,
        RightHand: Item,
        BackPack: Array<Item> =[],
        x_position: number, 
        y_position: number,
    ){
        super (name, x_position, y_position);
        this.Life = Life;
        this.Exp = Exp;
        this.LeftHand = LeftHand;
        this.RightHand = RightHand;
        this.BackPack = BackPack;
    };

    public ExpUp() {
        this.Exp++;
    };

    // public pickItem(item: Item, destination: string){
    //     /**
    //      * Pick and equip an item in one of the available hands.
    //      * If the destination hand is not free and the backpack
    //      * has some space left, store the equipped item and pick the
    //      * new one with the desired hand.
    //      */
    //     if (this[destination] == null) {
    //         this[destination] = item;
    //     } else if (this.BackPack.length < 3) {
    //         this.BackPack.push(this[destination]);
    //         this[destination] = item;
    //     };
    // };

    // public Attack(weapon: Item, effective: boolean, targetZombie: Zombie) {
    //     /* check whether the weapon is equipped */
    //     if (
    //         (this.LeftHand != null && this.LeftHand.getName() == weapon.getName()) ||
    //         (this.RightHand != null && this.RightHand.getName() == weapon.getName())
    //     ){
    //         /* ToDo - check whether the weapon can perform the attack */
    //         if (true) {
    //             /* check whether the attack is possible */
    //             if (effective) {
    //                 targetZombie.kill();
    //                 this.ExpUp();
    //             };
    //         };
    //     };
    // };
};
