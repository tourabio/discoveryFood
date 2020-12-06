export class Food{
    id:number;
    name:string;
    type:string;
    description:string;
    image:string;
    quantity:number;
    price:number;
    country:string;
    livraison:boolean;
    like:number;

    constructor() {
        this.quantity = 1;
        this.like = 0;
        this.image = "";
    };
}