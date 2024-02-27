const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//  ------  ROUTES DATA  ------

// Send Data

app.post("/data", async(req,res) => {
    try {
        const { user_name, goal, height_cm, current_weight, weight_goal, gender } = req.body;
        const newData = await pool.query(
            "INSERT INTO userData (user_name, goal, height_cm, current_weight, weight_goal, gender) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [user_name, goal, height_cm, current_weight, weight_goal, gender])
        console.log(req.body)
        res.json(newData.rows);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Serverfehler" });
    }
});

// Get All Data

app.get("/data", async(req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM userData");
        res.json(allUsers.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Serverfehler" });
    }
});

// Get Special User Data by name

app.get("/data/:name", async (req, res) => {
    try {
        const {name} = req.params;
        const userData = await pool.query("SELECT * FROM userData WHERE user_name = $1", [name]);
        res.json(userData.rows[0])
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Serverfehler" });
    }
});

// Update Special User data

app.put("/data/:name", async (req, res) => {
    try {
        const {name} = req.params;
        const { user_name, goal, height_cm, current_weight, weight_goal, gender } = req.body;
        const updatedData = await pool.query(
            "UPDATE userData SET goal = $1, height_cm = $2, current_weight = $3, weight_goal = $4 WHERE user_name = $5",
            [goal, height_cm, current_weight, weight_goal, name]);
        res.json("Data was updated!");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Serverfehler" });
    }
});

// Delete Special User Data

app.delete("/data/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deletedUser = await pool.query("DELETE FROM userData WHERE user_id = $1", [id]);
        res.json("User was deleted!");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Serverfehler" });
    }
});

//  -----  ROUTES EXERCISES  -----

// Add new exercise

app.post("/exercises", async (req,res) => {
    try {
        const { name, muscle, type, description } = req.body;
        const newExercise = await pool.query(
            "INSERT INTO exercises (name, muscle, type, description) VALUES($1, $2, $3, $4) RETURNING *",
            [name, muscle, type, description]);
        console.log(req.body);
        res.json(newExercise.rows);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Serverfehler" });
    }
});

//Get All Exercises

app.get("/exercises", async (req, res) => {
    try {
        const allExercises = await pool.query("SELECT * FROM exercises");
        res.json(allExercises.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Serverfehler" });
    }
});

//Get Special Exercise by Name

app.get("/exercises/:name", async (req, res) => {
    try {
        const {name} = req.params;
        const specialExercise = await pool.query("SELECT * FROM exercises WHERE name = $1", [name]);
        if (specialExercise.rows.length === 0) {
            // Wenn keine Übung gefunden wurde, sende eine Benachrichtigung
            return res.status(404).json({ message: "Übung nicht gefunden :(" });
        }
        res.json(specialExercise.rows[0])
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Serverfehler" });
    }
});

//Get Exercises by muscle

app.get("/exercises/:muscle", async (req, res) => {
    try {
        const { muscle } = req.params;
        const exercisesByMuscle = await pool.query("SELECT * FROM exercises WHERE muscle = $1", [muscle]);
        res.json(exercisesByMuscle.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Serverfehler" });
    }
});


// Update -- Wird hier erstmal nicht benötigt

//Delete Special User Data

app.delete("/exercises/:name", async (req, res) => {
    try {
        const {name} = req.params;
        const deletedUser = await pool.query("DELETE FROM exercises WHERE name = $1", [name]);
        res.json("Übung wurde gelöscht!");
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Serverfehler" });
    }
});

app.listen(5001, () => {
    console.log('Server has started on port 5001');
});