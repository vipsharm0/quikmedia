export class userModuleConstants{
    
    public static user = "username"
    public static pass = "password"

    public static superAdmin = "isSuperAdmin";
    public static admin = "isAdmin";
    public static manager = "isManager";
    public static uploader = "isUploader";
    public static broadcastApprover = "isBroadcasterApprover";
    public static broadcastViewer = "isBroadcasterViewer";
    public static client = "isClient";
    public static agency = "isAgency";
    public static qp = "isQP";

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

