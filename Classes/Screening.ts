export default class Screening {
    protected id: number;
    protected date: string;
    protected startTime: string;
    protected movieID: number;
    protected screeningRoomNum: number;
    protected soldTicketsNumber: number;
    protected availableTicketsNumber: number;
    protected takenSeats: Array<number>;

    constructor(id: number, date: string, startTime: string, movieID: number, screeningRoomNum: number, soldTicketsNumber: number, takenSeats: Array<number>, roomCapacity: number) {
        //Unique ID number of a movie
        this.id = id;
        //Date of the screening expressed in YYYY-MM-DD format
        this.date = date;
        //Time when the screening starts expressed in HH:MM format
        this.startTime = startTime;
        //ID number used to find movie information
        this.movieID = movieID;
        //Number of the room reserved for the screening
        this.screeningRoomNum = screeningRoomNum;
        //Number of sold tickets
        this.soldTicketsNumber = soldTicketsNumber;
        //Number of tickets available for sale
        this.availableTicketsNumber = roomCapacity - soldTicketsNumber;
        //Array containing numbers of taken seats
        this.takenSeats = takenSeats;
    }

    public GetId():number {
        return this.id;
    }
    public SetId(id: number):void {
        this.id = id;
    }

    public GetDate():string {
        return this.date;
    }
    public SetDate(date: string):void {
        this.date = date;
    }

    public GetStartTime():string {
        return this.startTime;
    }
    public SetStartTime(startTime: string):void {
        this.startTime = startTime;
    }

    public GetMovieId():number {
        return this.movieID;
    }
    public SetMovieId(movieId: number):void {
        this.movieID = movieId;
    }

    public GetScreeningRoomNum():number {
        return this.screeningRoomNum;
    }
    public SetScreeningRoomNum(screeningRoomNum: number) {
        this.screeningRoomNum = screeningRoomNum;
    }

    public GetSoldTicketsNumber():number {
        return this.soldTicketsNumber;
    }
    public SetSoldTicketsNumber(soldTicketsNumber: number):void {
        this.soldTicketsNumber = soldTicketsNumber;
    }

    public GetAvailableTicketsNumber():number {
        return this.availableTicketsNumber;
    }
    public SetAvailableTicketsNumber(availableTicketsNumber: number):void {
        this.availableTicketsNumber = availableTicketsNumber;
    }

    public GetTakenSeats():Array<number> {
        return this.takenSeats;
    }
    public SetTakenSeats(takenSeats: Array<number>):void {
        this.takenSeats = takenSeats;
    }
}