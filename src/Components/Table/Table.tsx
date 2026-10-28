import { useState } from "react"
import type { Zeneszam } from "../../Models/Interfaces/Zeneszam.interface"
import { readFile } from "../../Helper_Scripts/CRUD_json"


const musicArr:Zeneszam[] = await readFile("zeneszamok");

export const Table = function () {
    const [zeneszamok, modifyZeneszamok] = useState<Zeneszam[]>(musicArr)
    return (
        <table>
            <thead>
                <tr>
                    <th>ID.</th>
                    <th>Nev</th>
                    <th>Datum</th>
                    <th>Eloado</th>
                    <th>Magyar</th>
                    <th>Eladasok szama</th>
                </tr>
            </thead>
            <tbody>
                {zeneszamok.map((zeneszam:Zeneszam, index:number)=>(
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{zeneszam.nev}</td>
                        <td>{`${zeneszam.datum}`}</td>
                        <td>{zeneszam.eloado}</td>
                        <td>{zeneszam.magyar ? "Igen" : "Nem"}</td>
                        <td>{zeneszam.eladasok_szama}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}