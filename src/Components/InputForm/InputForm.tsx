import { useState } from "react";
import { Zeneszam_Class } from "../../Models/Classes/Zeneszam_Class.class";
import { showErrorModal, showSuccessModal } from "../../Helper_Scripts/Modal_Handles";
import { createData } from "../../Helper_Scripts/CRUD_json";

export const InputForm = function () {
    const [musicName, changeMusicName] = useState<string>("");
    const [musicDate, changeMusicDate] = useState<Date>(new Date())
    const [musicMusician, changeMusician] = useState<string>("")
    const [musicHungarian, changeMusicHungarian] = useState<boolean>(false)
    const [musicSalesNumber, changeMusicSalesNumber] = useState<number>(0)
    return (
        <>
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
                <input type="button" value="Mentes" onClick={async () => {
                    try {
                        const music = new Zeneszam_Class(musicName, musicDate, musicMusician, Number(musicSalesNumber), musicHungarian)
                        await createData("zeneszamok", music);
                        showSuccessModal("Sikeres zeneszam hozzaadas", "A zeneszam hozzaadas sikeres volt")
                    } catch (err: Error | any) {
                        showErrorModal(err.message, "Sikertelen zeneszam hozzaadas")
                        console.error(`HIBAUZENET: ${err.message}`)
                    }
                }} />
            </form>
        </>
    )
};