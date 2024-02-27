import './GetData.css'
import { useState, Fragment } from 'react';

function GetData() {

    const [data, setData] = useState({
        user_name: "",
        goal: "",
        height_cm: "",
        current_weight: "",
        weight_goal: "",
        gender: ""
    });

      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5001/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          });
      
          window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
      };

    return(
        <div className='GetDataContainer'>
            <h1 className='welcomeHeader'>Willkommen bei unserem Techacademy Projekt!</h1>
            <h1 className='welcomeHeader'>Erzähl uns etwas über dich:</h1>
            <form onSubmit={handleSubmit}>
                <div className='dataSectionContainer' style={{marginBottom: '50px'}}>
                    <h1>Allgemein</h1>
                    <div className='dataInputContainer'>
                        <label>Vorname: </label>
                        <input
                        type="text"
                        placeholder="Vorname..."
                        name="user_name"
                        value={data.user_name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='dataInputContainer'>
                        <label>Ziel:</label>
                        <select
                        name="goal"
                        value={data.goal}
                        onChange={handleChange}
                        >
                            <option>Wähle ein Ziel</option>
                            <option>Abnehmen</option>
                            <option>Zunehmen</option>
                            <option>Gesünder leben</option>
                            <option>Fitter werden</option>
                        </select>
                    </div>
                    <div className='dataInputContainer'>
                        <label>Größe: </label>
                        <input
                        type="number"
                        placeholder="in cm..."
                        name="height_cm"
                        value={data.height_cm}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='dataInputContainer'>
                        <label>Aktuelles Gewicht: </label>
                        <input
                        type="number"
                        placeholder="in kg..."
                        name="current_weight"
                        value={data.current_weight}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='dataInputContainer'>
                        <label>Zielgewicht: </label>
                        <input
                        type="number"
                        placeholder="falls gewünscht"
                        name="weight_goal"
                        value={data.weight_goal}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='dataInputContainer'>
                        <label>Geschlecht:</label>
                        <select
                        name="gender"
                        value={data.gender}
                        onChange={handleChange}
                        >
                            <option>Wähle dein Geschlecht</option>
                            <option>Männlich</option>
                            <option>Weiblich</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit}>Jetzt loslegen</button>
                </div>
            </form>
        </div>
    )
}

export default GetData;