export default class ScreeningRoom {
    number: number;
    capacity: number;

    constructor (number: number, capacity: number) {
        //Unique number of the screening room
        this.number = number;
        //Maximal capacity of the screening room
        this.capacity = capacity;
    }

    public GetNumber():number {
        return this.number;
    }
    public SetNumber(number: number):void {
        this.number = number;
    }

    public GetCapacity():number {
        return this.capacity;
    }
    public SetCapacity(capacity: number):void {
        this.capacity = capacity;
    }
}