const express = require('express');
const { Pool } = require('pg');
const fs = require('fs');

const app = express();
const port = 3001;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'techacademy',
  password: 'root',
  port: 5432,
});

app.use(express.json());

const imagePath = '../images'; // Passe dies an den Pfad zu deinen Bildern an

app.post('/upload', async (req, res) => {
  try {
    const imageFiles = fs.readdirSync(imagePath);

    for (const fileName of imageFiles) {
      const exerciseName = fileName.split('.')[0]; // Annahme: Dateiname entspricht dem Übungsnamen
      const imageData = fs.readFileSync(`${imagePath}/${fileName}`);

      // Hier die Spalte anpassen, in die du die Bilddaten einfügen möchtest
      const result = await pool.query('UPDATE exercises SET data = $1 WHERE exercise_name = $2', [imageData, exerciseName]);

      console.log(`Bild für Übung ${exerciseName} erfolgreich hochgeladen`);
    }

    res.status(200).json({ success: true, message: 'Bilder erfolgreich hochgeladen' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Fehler beim Hochladen der Bilder' });
  }
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});