import './exerciseContainer.css';
import { useState } from 'react';

function ExerciseContainer({id, name, type, muscle, description, picSrc}) {

    const [showPic, setShowPic] = useState(false);

    return ( 
        <div key={id} id="exerciseContainer">
            <img id='exercisePic' src={picSrc} />
            <p id="exerciseName">Übung: {name}</p>
            <p id="exerciseMuscle">Muskel: {muscle}</p>
            <p id="exerciseType">Ausführung mit: {type}</p>
            <p id="exerciseDescription">Beschreibung: {description}</p>
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