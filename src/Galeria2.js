import React, {useState} from "react";
import obraz1 from "./assets/obraz1.jpg";
import obraz2 from "./assets/obraz2.jpg";
import obraz3 from "./assets/obraz3.jpg";
import obraz4 from "./assets/obraz4.jpg";
import obraz5 from "./assets/obraz5.jpg";
import obraz6 from "./assets/obraz6.jpg";
import obraz7 from "./assets/obraz7.jpg";
import obraz8 from "./assets/obraz8.jpg";
import obraz9 from "./assets/obraz9.jpg";
import obraz10 from "./assets/obraz10.jpg";
import obraz11 from "./assets/obraz11.jpg";
import obraz12 from './assets/obraz12.jpg';


function Galeria2(){
    const[animals, setAnimals]=useState(true);
    const[animalsDownloads, setAnimalsDownloads]=useState(0);

    const[flowers, setFlowers]=useState(true);
    const[flowerDownloads, setFlowerDownloads]=useState(0);

    const[cars, setCars]=useState(true);
    const[carsDownloads, setCarsDownloads]=useState(0);

    function animalsDownloadsChange(){
        setAnimalsDownloads(animalsDownloads +1);
    }
    function flowersDownloadsChange(){
        setFlowerDownloads(flowerDownloads +1);
    }
    function carsDownloadsChange(){
        setCarsDownloads(carsDownloads +1);
    }

    return(
        <div>
            <h1>Kategorie zdjęć</h1>
            <div>
                <label>
                    <input title="kwiaty" type="checkbox" checked={!flowers} onChange={() => setFlowers(!flowers)}/>
                </label>
                <label>
                    <input title="Zwierzęta" type="checkbox" checked={!animals} onChange={() => setAnimals(!animals)}/>
                </label>
                <label>
                    <input title="Samochody" type="checkbox" checked={!cars} onChange={() => setCars(!cars)}/>
                </label>
            </div>

            {animals && (
                <div style={{display: "flex", gap: "10px", flexWrap: 'wrap'}}>

                    <div style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                        <img src={obraz3} width="150" alt="obraz3"/>
                        <button onClick={() => animalsDownloadsChange()}>Pobierz</button>
                        <p>Liczba pobrań: {animalsDownloads}</p>
                    </div>

                    <div style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                        <img src={obraz4} width="150" alt="obraz4"/>
                        <button onClick={() => animalsDownloadsChange()}>Pobierz</button>
                        <p>Liczba pobrań: {animalsDownloads}</p>
                    </div>

                    <div style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                        <img src={obraz5} width="150" alt="obraz5"/>
                        <button onClick={() => animalsDownloadsChange()}>Pobierz</button>
                        <p>Liczba pobrań: {animalsDownloads}</p>
                    </div>

                    <div style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                        <img src={obraz7} width="150" alt="obraz7"/>
                        <button onClick={() => animalsDownloadsChange()}>Pobierz</button>
                        <p>Liczba pobrań: {animalsDownloads}</p>
                    </div>

                    <div style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                        <img src={obraz9} width="150" alt="obraz9"/>
                        <button onClick={() => animalsDownloadsChange()}>Pobierz</button>
                        <p>Liczba pobrań: {animalsDownloads}</p>
                    </div>

                    <div style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                        <img src={obraz10} width="150" alt="obraz10"/>
                        <button onClick={() => animalsDownloadsChange()}>Pobierz</button>
                        <p>Liczba pobrań: {animalsDownloads}</p>
                    </div>

                    <div style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                        <img src={obraz11} width="150" alt="obraz11"/>
                        <button onClick={() => animalsDownloadsChange()}>Pobierz</button>
                        <p>Liczba pobrań: {animalsDownloads}</p>
                    </div>

                </div>
            )}
            {flowers && (
                <div style={{display: "flex", gap: "10px", flexWrap: 'wrap'}}>

                            <div style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                                <img src={obraz1} width="150" alt="obraz1"/>
                                <button onClick={() => flowersDownloadsChange()}>Pobierz</button>
                                <p>Liczba pobrań: {flowerDownloads}</p>
                            </div>

                            <div style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                                <img src={obraz2} width="150" alt="obraz2"/>
                                <button onClick={() => flowersDownloadsChange()}>Pobierz</button>
                                <p>Liczba pobrań: {flowerDownloads}</p>
                            </div>

                            <div style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                                <img src={obraz8} width="150" alt="obraz8"/>
                                <button onClick={() => flowersDownloadsChange()}>Pobierz</button>
                                <p>Liczba pobrań: {flowerDownloads}</p>
                            </div>

                        </div>
                    )}

            {cars && (
                <div style={{display: "flex", gap: "10px", flexWrap: 'wrap'}}>

                                    <div style={{textAlign: "center", display:"flex", alignItems:"center"}}>
                                        <img src={obraz6} width="150" alt="obraz6"/>
                                        <button onClick={() => carsDownloadsChange()}>Pobierz</button>
                                        <p>Liczba pobrań: {carsDownloads}</p>
                                    </div>

                                    <div style={{textAlign: "center", display: "flex", alignItems: "center"}}>
                                        <img src={obraz12} width="150" alt="obraz12"/>
                                        <button onClick={() => carsDownloadsChange()}>Pobierz</button>
                                        <p>Liczba pobrań: {carsDownloads}</p>
                                    </div>

                </div>
            )}


        </div>
    );
}

            export default Galeria2;