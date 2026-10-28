import { useState } from "react"
import type { Zeneszam } from "../../Models/Interfaces/Zeneszam.interface"
import { readFile } from "../../Helper_Scripts/CRUD_json"
import type { FilterOptions } from "../../Models/Interfaces/FilterOptions.interface";

const musicArr: Zeneszam[] = await readFile("zeneszamok");

export const Table = function () {
    const [filterValue, changeFilter] = useState<string>("")
    const [zeneszamok, modifyZeneszamok] = useState<Zeneszam[]>(musicArr)
    const [nameFilterSwitch, changeNameFilterSwitch] = useState<boolean>(false)
    const [nameFilterAscDesc, swithNameFilterAscDesc] = useState<FilterOptions>({ filterOption: "asc" })
    const filteredMusicArr: Zeneszam[] = zeneszamok.filter((music: Zeneszam) => {
        const tempFilterValue = filterValue.toLowerCase()
        return (
            music.datum.toString().toLowerCase().includes(tempFilterValue) ||
            music.eladasok_szama.toString().toLowerCase().includes(tempFilterValue) ||
            music.eloado.toLowerCase().includes(tempFilterValue) ||
            `${music.magyar}`.toLowerCase().includes(tempFilterValue) ||
            music.nev.toLowerCase().includes(tempFilterValue)
        )
    });
    if (nameFilterSwitch) {
        if (nameFilterAscDesc.filterOption == "asc") {
            filteredMusicArr.sort((a, b) => a.nev.localeCompare(b.nev))
        } else if(nameFilterAscDesc.filterOption == "desc"){
            filteredMusicArr.sort((a, b) => b.nev.localeCompare(a.nev))
        }
    }
    return (
        <>
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <div className="input-group">
                    <label htmlFor="filterInput">Filter</label>
                    <input onChange={(htmlInputElement) => {
                        changeFilter(htmlInputElement.target.value)
                    }} value={filterValue} type="text" placeholder="Filter" name="filter" id="filterInput" />
                </div>
                <div className="input-group">
                    <label htmlFor="nameSortInput">Nev alapu rendezes</label>
                    <input onChange={(e) => {
                        e.target.checked == true ? changeNameFilterSwitch(true) : changeNameFilterSwitch(false)
                    }} type="checkbox" name="nameSort" id="nameSortInput" checked={nameFilterSwitch} />
                </div>
                { nameFilterSwitch && 
                    <div className="input-group">
                        <label htmlFor="nameSortAsc">Novekvo</label>
                        <input onChange={() => {
                            swithNameFilterAscDesc({ filterOption: "asc" })
                        }} type="radio" id="nameSortAsc" name="nameSortAscDesc" checked={nameFilterAscDesc.filterOption=="asc"}/>
                        <label htmlFor="nameSortDesc">Csokkeno</label>
                        <input onChange={() => {
                            swithNameFilterAscDesc({ filterOption: "desc" })
                        }} type="radio" id="nameSortDesc" name="nameSortAscDesc" checked={nameFilterAscDesc.filterOption=="desc"} />
                    </div>
                }
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