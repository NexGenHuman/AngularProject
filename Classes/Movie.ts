export default class Movie {
    protected id: number;
    protected title: string;
    protected length: number;

    constructor (id: number, title: string, length: number) {
        //Unique ID number of a movie
        this.id = id;
        //Title of a movie
        this.title = title;
        //Length of a movie given in minutes
        this.length = length;
    }

    GetId():number {
        return this.id;
    }

    SetId(id: number):void {
        this.id = id;
    }

    GetTitle():string {
        return this.title;
    }

    SetTitle(title: string):void {
        this.title = title;
    }

    GetLength():number {
        return this.length;
    }

    SetLength(length: number):void {
        this.length = length;
    }
}