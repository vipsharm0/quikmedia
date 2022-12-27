export class mpr{
    id:number;
    QuikID:string;
    Language:string;
    Caption:string;
    Brand:string;
    Dur:number;
    SDHD:string;
    SpecCode:string;
    OutPutURL:string;
}

export class mprData{
    data:mpr[];
    errors:object[];
    success:boolean;
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
    orders: OrderData;
}
export class qkstate{
    key:string;  
    val: {};
}

export class gmr{
    brand:string;
    caption:string;
    channelDestination:string;
    channelDestinationID:number;
    channels:string;
    clientCompaignID:number;
    createdBy:string;
    createdOn:Date
    dur:number;
    id:number;
    inputFileName:string;
    inputFileURL:string;
    isDeleted:boolean;
    isSameDestination:boolean;
    isSameSpec:boolean;
    language:string;
    linkFTP:string;
    modifiedBy:string;
    modifiedOn:Date
    orderNo:string;
    outPutURL:string;
    previewURL:string;
    quikID:string;
    remarks:string;
    sdhd:string;
    shortCaption:string;
    specCode:string;
    specNumber:number;
    statusID:number;
}
export class gmrValidationData{
    data:any;
    success: boolean;
    errors: gmr[];
    message:string;

}

export class order{
    Id:number;
    Name:string;
    ClientID:number;
}
export class OrderData{
    data:order[];
    success: boolean;
    errors: string[];

}
export class viewOrder{
    Brand:string;
    Caption:string;
    ChannelDestination:string;
    Channels:string;
    Creative:string;
    DateOfDelivery:Date;
    Dur:number;
    HD:string;
    Language:string;
    LocationType:string;
    MediaAgency:string;
    Name:string;
    OrderNo:string;
    OutPutURL:string;
    Production:string;
    QuikID:string;
    QuikIDOutput:string;
    SD:string;
    SDHD:string;
    ShortCaption:string;
    SpecCode:string;
    SpecNumber:string;
}

export class viewOrderData{
    data:viewOrder[];
    success: boolean;
    message: string;
    errors: string[];
}