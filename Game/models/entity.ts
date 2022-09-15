export class Entity {
    private name: string;
    private x_position: number;
    private y_position: number;

    constructor(
        name: string,
        x_position: number,
        y_position: number
    ) {
        this.name = name;
        this.x_position = x_position;
        this.y_position = y_position;
    }
    public getName(): string {
        return this.name
    }

    public setName(name): void {
        this.name = name
    }

}