 class user {
    EmailId:string; 
    FirstName:string;
    Id:number;
    IsAdmin:boolean;
    IsAgency:boolean;
    IsBroadcasterApprover:boolean;
    IsBroadcasterViewer:boolean;
    IsClient:boolean;
    IsQP:boolean;
    IsSuperAdmin:boolean;
    IsUploader:boolean;
    LastName:string;
    MobileNo:string;
    Password:string;
    UserId:string;    
}



export class UserData{
    data:user[];
    success: boolean;
    errors: string[];

}
