export class mpr{
    id:number;
    quickid:string;
    language:string;
    caption:string;
    brand:string;
    duration:number;
    type:string;
    specscode:string;
    link:string;
}

export class client{
    Id:number
    Name:string
}
export class ClientData{
    data:client[];
    success: boolean;
    errors: string[];

}
export class qkState{
    clientdata:ClientData;   
}