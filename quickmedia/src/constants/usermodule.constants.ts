export class userModuleConstants{
    
    public static user = "username"
    public static pass = "password"

    public static superAdmin = "IsSuperAdmin";
    public static admin = "IsAdmin";
    public static manager = "IsManager";
    public static uploader = "IsUploader";
    public static broadcastApprover = "IsBroadcasterApprover";
    public static broadcastViewer = "IsBroadcasterViewer";
    public static client = "IsClient";
    public static agency = "IsAgency";
    public static qp = "IsQP";

    public static conversion = 1;
    public static administrator = 2;
    public static invoicing = 3;
    public static reporting = 4;


    public static headmenu = {
        Conversion: userModuleConstants.conversion,
        Admin: userModuleConstants.administrator,
        Invoicing: userModuleConstants.invoicing,
        Reporting: userModuleConstants.reporting
    };

}

