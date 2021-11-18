export class Immunisation {
    vaccine: string;
    brandName: string;
    batchNumber: string;
    drugExpiry: Date;
    dateGiven: Date;
    
    constructor(vaccine: string, brandName: string, batchNumber: string, drugExpiry: Date, dateGiven: Date) {
        this.vaccine = vaccine;
        this.brandName = brandName;
        this.batchNumber = batchNumber;
        this.drugExpiry = drugExpiry;
        this.dateGiven = dateGiven;
    }
}
