export interface Movie {
    id:number;
    name:string;
    director:string;
    industry:string;
    details: Details[];

    
}
export class Details{
    hero:string;
    heroine:string;
    budget:number;

}