import type { Zeneszam } from "../Interfaces/Zeneszam.interface";

export class Zeneszam_Class implements Zeneszam {
    nev: string;
    datum: Date;
    eloado: string;
    eladasok_szama: number;
    magyar: boolean;
    constructor(musicName: string, musicDatum: Date, musicMusician: string, musicSalesNumber: number, musicHungarian: boolean) {
        if (typeof musicName != "string" || musicName.trim() == "") {
            throw new Error("A nev mezo nincs megfeleloen kitoltve")
        }
        if (!(musicDatum instanceof Date) || musicDatum > new Date()) {
            throw new Error("A datum mezo nincs megfeleloen kitoltve")
        }
        if (typeof musicMusician != "string" || musicMusician.trim() == "") {
            throw new Error("Az eloado mezo nincs megfeleloen kitoltve")
        }
        if (typeof musicSalesNumber != "number" || musicSalesNumber < 0 || musicSalesNumber == undefined || musicSalesNumber == null) {
            throw new Error("Az eladasok szama mezo nincs megfeleloen kitoltve")
        }
        if (typeof musicHungarian != "boolean") {
            throw new Error("A magyar mezo nincs megfeleloen kitoltve")
        }
        this.nev = musicName;
        this.datum = musicDatum;
        this.eloado = musicMusician;
        this.eladasok_szama = musicSalesNumber;
        this.magyar = musicHungarian;
    }
}