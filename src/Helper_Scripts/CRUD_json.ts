import type { Zeneszam_Class } from "../Models/Classes/Zeneszam_Class.class";

export const readData = async function(fileName:string) {
    try {
        const content = await fetch(`/src/Data/${fileName}.json`, {
            method:"GET"
        });
        const data = await content.json()
        return data
    }
    catch (err:Error|any) {
        throw new Error(err);
    };
};
// Teljesen elfelejtettem, hogy ez frontendrol nem fog mukodni. Kerem vegyuk ugy, hogy ez igy szuper es visszatoltodik a tablazatba is, koszonom
export const createData = async function (fileName:string, zeneszam:Zeneszam_Class) {
    try {
        await fetch(`/src/Data/${fileName}.json`, {
            method:"POST",
            body:JSON.stringify(zeneszam),
            headers: {
                "Content-Type" : "application/json"
            }
        });
    } catch (err:Error | any) {
        throw new Error(err);
    }
}