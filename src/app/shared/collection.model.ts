export class Collection {

    public name:string;
    public description:string;
    public Date:Date;
    public rating:number;

    constructor(name:string,description:string,Date:Date,rating:number) {

        this.name=name;
        this.description=description;
        this.Date=Date;
        this.rating=rating;

    }
}