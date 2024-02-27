import Meditation from './images/meditation.png'
import ExercisePic from './images/exercises.png'
import Food from './images/food.png'
import './homeIntro.css'
import { Link } from 'react-router-dom';

function HomeIntro() {
    return ( 
        <div class='homeIntroContainer'>
            <div id="topContainer">
                <div class="textContent">
                    <h1>Fange hier mit der Veränderung an!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                    <button>Mehr erfahren</button>
                    <button>
                        <Link to="/login" style={{color: "white", textDecoration: "none"}}>
                            Zum Login
                        </Link>
                    </button>
                </div>
                <img id='meditationPic' src={Meditation} />
            </div>
            <div id="introExerciseContainer">
                <img id='meditationPic' src={ExercisePic} />
                <div class="textContent">
                    <h1>Lass dich inspirieren!</h1>
                    <p>
                        Unsere Datenbank umfasst verschiedenste Übungen für jede Trainingsart und jede Sportart.
                        Greife auf bestehende Übungen zu, füge deine eigenen hinzu und tracke deinen Fortschritt.
                        Training muss weder einseitig, noch langweilig sein. Wir bringen Spannung und Abwechslung
                        in jedes Workout.
                    </p>
                    <button>Mehr erfahren</button>
                    <button>
                        <Link to="/exercises" style={{color: "white", textDecoration: "none"}}>
                            Zu den Übungen
                        </Link>
                    </button>
                </div>
            </div>
            <div id="introNutritionContainer">
                <div class="textContent">
                    <h1>Schluss mit Hungern!</h1>
                    <p>
                        Die leckersten Rezepte für jeden Geschmack. Egal ob du vegan, vegetarisch oder einfach nur ein
                        Picky-Eater bist. Wir haben alle möglichen Rezepte, die dich sättigen und nicht unnötig viel Zucker,
                        Kalorien oder Kohlenhydrate haben. Erstelle deinen Plan und iss dich jeden Tag satt ohne schlechtes
                        Gewissen.
                    </p>
                    <button>Mehr erfahren</button>
                    <button>
                        <Link to="/nutrition" style={{color: "white", textDecoration: "none"}}>
                            Zu den Rezepten
                        </Link>
                    </button>
                </div>
                <img id='meditationPic' src={Food} />
            </div>
        </div>
    );
}

export default HomeIntro;

// Bilder gelöscht, Homeseite bearbeitet (dafür neue Komponenten usw.)