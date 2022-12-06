import { Injectable } from "@angular/core";
import { userModuleConstants } from "src/constants/usermodule.constants";
import { UserData } from "../Models/admin/qk.adminmodule.model";
import { menuitem } from "./models/qk.common";

@Injectable()
export class menuitems {
    roleswithrights: object[] = [];
    pagelist: object;
    filters = {
        "superAdmin": userModuleConstants.superAdmin,
        "admin": userModuleConstants.admin,
        "manager": userModuleConstants.manager,
        "uploader": userModuleConstants.uploader,
        "broadcastApprover": userModuleConstants.broadcastApprover,
        "broadcastViewer": userModuleConstants.broadcastViewer,
        "client": userModuleConstants.client,
        "agency": userModuleConstants.agency,
        "qp": userModuleConstants.qp
    };

    getroles(data: UserData) {

        let roles: string[] = [];
        for (let [keys, value] of Object.entries(this.filters)) {
            let obj = Object.keys(data).filter((key) => {
                if (key.includes(value) && data[key]) {
                    roles.push(key);
                }
            })
        }

        if (roles.length > 0) {
            for (let [key, value] of Object.entries(roles)) {
                this.rolerights.filter((obj) => {
                    if (obj["role"] == value) {
                        this.roleswithrights.push(obj)
                    }
                })
            }

        }
        console.log(this.getMenuBarHeading(4))
        this.getContextbymain(4)

    }

    getContextbymain(menuid: number) {
        let pagelist: menuitem[] = [];
        let pagelistitems: menuitem[] = [];

        pagelist = this.menus.filter((data) => data.menuid == menuid)
        for (const item of this.roleswithrights) {
            const pageids = item["rights"][0].data;
            pageids.forEach(id=>{
                pagelistitems.push.apply(pagelistitems, pagelist.filter((data) => data.id == id)) 
                 
            })            
        }
        console.log(pagelistitems) 
        return pagelist;
    }
    getMenuBarHeading(menuid: number): string {
        let menuHeading;
        if (this.checkMenuBarHeading(menuid)) {
            switch (menuid) {
                case userModuleConstants.headmenu.Conversion: {
                    menuHeading = "Conversion";
                    break;
                }
                case userModuleConstants.headmenu.Admin: {
                    menuHeading = "Admin";
                    break;
                }
                case userModuleConstants.headmenu.Invoicing: {
                    menuHeading = "Invoicing";
                    break;
                }
                case userModuleConstants.headmenu.Reporting: {
                    menuHeading = "Reporting";
                    break;
                }
                default: {
                    menuHeading = "-";
                    break;
                }
            }
        }

        return menuHeading;
    }

    private checkMenuBarHeading(menuid: number): boolean {
        let flag: boolean = false;

        for (const item of this.roleswithrights) {
            if (item["rights"][0].menuid.indexOf(menuid) > -1) {
                flag = true
                return flag;
            }
        }

        return flag
    }

    private rolerights: object[] = [
        {
            role: this.filters.admin,
            rights: [
                { menuid: [1], data: ["*"] }
            ]
        },
        {
            role: this.filters.superAdmin,
            rights: [
                { menuid: [1,4], data: [3,4,5,10] }
            ]
        },
        {
            role: this.filters.manager,
            rights: [
                { menuid: [1], data: ["*"] }
            ]
        },
        {
            role: this.filters.uploader,
            rights: [
                { menuid: [4,1], data: [1,11] }
            ]
        },
        {
            role: this.filters.broadcastApprover,
            rights: [
                { menuid: [1], data: ["*"] }
            ]
        },
        {
            role: this.filters.broadcastViewer,
            rights: [
                { menuid: [1], data: ["*"] }
            ]
        },
        {
            role: this.filters.agency,
            rights: [
                { menuid: [1], data: ["*"] }
            ]
        },
        {
            role: this.filters.client,
            rights: [
                { menuid: [1], data: ["*"] }
            ]
        },
        {
            role: this.filters.qp,
            rights: [
                { menuid: [1], data: ["*"] }
            ]
        }
    ];

    private menus: menuitem[] = [
        { "id":1, "menuid": userModuleConstants.conversion, "name": "Upload Gmr", "url": "vipin1" },
        { "id":2, "menuid": userModuleConstants.conversion, "name": "View Order", "url": "vipin3" },
        { "id":3, "menuid": userModuleConstants.conversion, "name": "Mpr", "url": "vipin3" },
        { "id":4, "menuid": userModuleConstants.conversion, "name": "Upload Input Tvc", "url": "vipin3" },
        { "id":5, "menuid": userModuleConstants.conversion, "name": "Conversion Status", "url": "vipin3" },
        { "id":6, "menuid": userModuleConstants.invoicing, "name": "invoicing1", "url": "invoicingurl1" },
        { "id":7, "menuid": userModuleConstants.invoicing, "name": "invoicing2", "url": "invoicingurl2" },
        { "id":8, "menuid": userModuleConstants.administrator, "name": "administrator1", "url": "administratorurl1" },
        { "id":9, "menuid": userModuleConstants.administrator, "name": "administrator2", "url": "administratorurl2" },
        { "id":10, "menuid": userModuleConstants.reporting, "name": "reporting1", "url": "reportingurl1" },
        { "id":11, "menuid": userModuleConstants.reporting, "name": "reporting2", "url": "reportingurl2" }
    ];
    getMenus() {
        return this.menus;
    };
    getRoleswithRights() {
        return this.rolerights;
    };

}