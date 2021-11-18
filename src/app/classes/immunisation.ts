export class Immunisation {
    vaccine: string;
    brandName: string;
    batchNumber: string;
    drugExpiry: Date;
    dateGiven: Date;
    nextAppointment: Date;
    
    constructor(vaccine: string, brandName: string, batchNumber: string, drugExpiry: Date, dateGiven: Date,   nextAppointment: Date) {
        this.vaccine = vaccine;
        this.brandName = brandName;
        this.batchNumber = batchNumber;
        this.drugExpiry = drugExpiry;
        this.dateGiven = dateGiven;
        this.nextAppointment = nextAppointment;
    }
}
