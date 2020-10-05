export class Product{
    constructor(id:number,title:string, price:number, like:number){
        this.id = id;
        this.title = title;
        this.price = price;
        this.like = like;
        this.quantity = 1;
    }


    id:number;
    title:string;
    price:number;
    like:number;
    quantity:number;
}