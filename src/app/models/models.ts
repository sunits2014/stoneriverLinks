export class Portal {
    public Portal_ID: number;
    public Portal_Name: string;
    public Portal_Nav: string;
    public Regions: Region[];
    constructor(portalName: string = "") {
        this.Portal_Name = portalName;
        this.Portal_ID = null;
        this.Portal_Nav = "";
        this.Regions = new Array<Region>();
    }
}

export class Region {
    public Region_ID: number;
    public Region_Name: string;
    public Region_Desc: string;
    public Tooltip: string;
    public RegionDetails: RegionDetail[];
    constructor() {
        this.Region_ID = null;
        this.RegionDetails = new Array<RegionDetail>();
    }
}

export class RegionDetail {
    constructor() {
        
    }
    public Reg_Details_ID: number;
    public Servers: string;
    public ServerName: string;
    public Address: string;
    public Link: string;
} 