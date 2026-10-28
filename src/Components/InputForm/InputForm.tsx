import { useState } from "react";
import { Zeneszam_Class } from "../../Models/Classes/Zeneszam_Class.class";

export const InputForm = function () {
    const [musicName, changeMusicName] = useState<string>("");
    const [musicDate, changeMusicDate] = useState<Date>(new Date())
    const [musicMusician, changeMusician] = useState<string>("")
    const [musicHungarian, changeMusicHungarian] = useState<boolean>(false)
    const [musicSalesNumber, changeMusicSalesNumber] = useState<number>()
    return (
        <>
            <ul>
                <li>{musicName}</li>
                <li>{musicDate.toString()}</li>
                <li>{musicMusician}</li>
                <li>{musicHungarian ? "igen" : "nem"}</li>
                <li>{musicSalesNumber}</li>
            </ul>
            <form className="postMusicForm">
                <div className="input-group">
                    <label htmlFor="nameInput">Nev</label>
                    <input required onChange={(e) => {
                        changeMusicName(e.target.value)
                    }} type="text" id="nameInput" name="name" value={musicName} />
                </div>
                <div className="input-group">
                    <label htmlFor="dateInput">Datum</label>
                    <input required onChange={(e) => {
                        changeMusicDate(new Date(e.target.value))
                    }} type="date" name="date" id="dateInput" value={musicDate.toISOString().split("T")[0]} />
                </div>
                <div className="input-group">
                    <label htmlFor="musicianInput">Eloado</label>
                    <input required onChange={(e) => {
                        changeMusician(e.target.value)
                    }} type="text" name="musician" id="musicianInput" value={musicMusician} />
                </div>
                <div className="input-group">
                    <label>Magyar az eloado?</label>
                    <label htmlFor="hungarianInputTrue">Igen</label>
                    <input onChange={() => {
                        changeMusicHungarian(true)
                    }} type="radio" name="hunagrianInput" id="hungarianInputTrue" checked={musicHungarian == true} />
                    <label htmlFor="hungarianInputFalse">Nem</label>
                    <input onChange={() => {
                        changeMusicHungarian(false)
                    }} type="radio" name="hunagrianInput" id="hungarianInputFalse" checked={musicHungarian == false} />
                </div>
                <div className="input-group">
                    <label htmlFor="salesNumberInput">Eladasok szama</label>
                    <input required onChange={(e) => {
                        changeMusicSalesNumber(Number(e.target.value))
                    }} type="number" name="salesNumber" id="salesNumberInput" value={musicSalesNumber} />
                </div>
                <input type="button" value="Mentes" onClick={() => {
                    try {
                        const music = new Zeneszam_Class(musicName, musicDate, musicMusician, Number(musicSalesNumber), musicHungarian)
                    } catch (err: Error | any) {
                        console.log(`HIBAUZENET: ${err.message}`)
                    }
                }} />
            </form>
        </>
    )
};