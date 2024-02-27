import './exerciseContainer.css';
import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';

function ExerciseContainer({ id, name, type, muscle, description, picsrc }) {
    const [imageUrl, setImageUrl] = useState('');

    // Funktion zur Konvertierung von Binärdaten in einen hexadezimalen String
    // Funktion zur Konvertierung von Binärdaten in einen hexadezimalen String
    // Funktion zur Konvertierung von Binärdaten in einen hexadezimalen String
    function binToHex(binary) {
        const buffer = Buffer.from(binary);
        return buffer.toString();
    }

    useEffect(() => {
        // Konvertiere Binärdaten in hexadezimalen String
        const picHexStr = picsrc ? binToHex(picsrc.data) : '';
        // Dekodiere hexadezimalen String in URL
        const url = picHexStr ? decodeURIComponent(picHexStr) : '';
        setImageUrl(url);
    }, [picsrc]);

    return (
        <div key={id} id="exerciseContainer">
            <p id="exerciseName">Übung: {name}</p>
            <p id="exerciseMuscle">Muskel: {muscle}</p>
            <p id="exerciseType">Ausführung mit: {type}</p>
            <p id="exerciseDescription">Beschreibung: {description}</p>
            <img id='exercisePic' src={imageUrl} alt={name} />
        </div>
    );
}

export default ExerciseContainer;


// Klick und Bild anzeigen

// import { useState } from 'react';

// function ExerciseContainer(props) {
//     const [isHidden, setIsHidden] = useState(false);

//     function toggleHidden() {
//         setIsHidden(!isHidden);
//     }
    
//     function test() {
//         alert("Hallo")
//     }

//     return (
//         <div className="exercise" onClick={toggleHidden}>
//             <img src={props.image} style={{ display: isHidden ? 'none' : 'block' }} />
//             <h1 style={{ display: isHidden ? 'none' : 'block' }}>{props.title}</h1>
//             <p style={{ display: isHidden ? 'block' : 'none' }}>{props.description}</p>
//             <button onClick={test} style={{ display: isHidden ? 'block' : 'none' }}>Add Progress</button>
//         </div>
//     );
// }



// export default ExerciseContainer;