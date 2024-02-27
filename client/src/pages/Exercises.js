import ExerciseContainer from "../components/exerciseContainer";
import { Fragment, useEffect, useState } from "react";

function Exercises() {
    const [exercises, setExercises] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const getExercises = async (muscle) => {
        try {
            const response = await fetch(`http://localhost:5001/exercises/${muscle}`);
            const jsonData = await response.json();
            console.log("Received exercises:", jsonData);
            setExercises(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };
    

    useEffect(() => {
        console.log("Selected option:", selectedOption);
        if (selectedOption) {
            getExercises(selectedOption);
        }
    }, [selectedOption]);
    
    

    return ( 
        <Fragment>
            <div className="allExerciseContainer" style={{marginTop: '150px', width: '100%'}}>
                <div className="selectContainer">
                    <label>
                        Wähle den Muskel, den du trainieren willst:
                        <select name="selectedFruit" value={selectedOption} onChange={handleSelectChange}>
                            <option value="">Bitte wählen</option>
                            <option value="brust">Brust</option>
                            <option value="rücken">Rücken</option>
                            <option value="beine">Beine</option>
                            <option value="schultern">Schultern</option>
                            <option value="bizeps">Bizeps</option>
                            <option value="trizeps">Trizeps</option>
                        </select>
                    </label>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px'}}>
                    {exercises.map((exercise) => (
                        <ExerciseContainer
                        key={exercise.id}
                        name={exercise.name}
                        muscle={exercise.muscle}
                        type={exercise.type}
                        description={exercise.description}
                        />
                ))}
                </div>
            </div>
        </Fragment>
     );
}

export default Exercises;