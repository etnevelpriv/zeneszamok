import { useState } from "react"
import type { Zeneszam } from "../../Models/Interfaces/Zeneszam.interface"
import { readFile } from "../../Helper_Scripts/CRUD_json"

const musicArr: Zeneszam[] = await readFile("zeneszamok");

export const Table = function () {
    const [filterValue, changeFilter] = useState<string>("")
    const [zeneszamok, modifyZeneszamok] = useState<Zeneszam[]>(musicArr)
    const filteredMusicArr: Zeneszam[] = musicArr.filter((music: Zeneszam) => {
        const tempFilterValue = filterValue.toLowerCase()
        return (
            music.datum.toString().toLowerCase().includes(tempFilterValue) ||
            music.eladasok_szama.toString().toLowerCase().includes(tempFilterValue) ||
            music.eloado.toLowerCase().includes(tempFilterValue) ||
            `${music.magyar}`.toLowerCase().includes(tempFilterValue) ||
            music.nev.toLowerCase().includes(tempFilterValue)
        )
    });
    console.log
    return (
        <>
            <form>
                <div className="input-group">
                    <label htmlFor="filter">Filter</label>
                    <input onChange={(htmlInputElement) => {
                        changeFilter(htmlInputElement.target.value)
                    }} value={filterValue} type="text" placeholder="Filter" name="filter" id="filterInput" />
                </div>
                <p>{filterValue}</p>
            </form>
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
                    {filteredMusicArr.map((zeneszam: Zeneszam, index: number) => (
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
        </>
    )
}