const express = require("express");
const sqlite3 = require("sqlite3").verbose();

// Crear una instancia de la aplicación Express
const app = express();
app.use(express.json());

// Configurar la conexión a la base de datos SQLite
const db = new sqlite3.Database("BDD_BytesMusic.db");

// Obtener todas las canciones
app.get("/songs", (req, res) => {
  db.all("SELECT * FROM TBL_SONG", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error en el servidor" });
    } else {
      res.json(rows);
    }
  });
});

// Obtener una canción por su ID
app.get("/song/:id", (req, res) => {
  const songId = req.params.id;
  db.get("SELECT * FROM TBL_SONG WHERE ID_SONG = ?", [songId], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error en el servidor" });
    } else if (row) {
      res.json(row);
    } else {
      res.status(404).json({ error: "Canción no encontrada" });
    }
  });
});

// Crear una nueva canción
app.post("/song", (req, res) => {
  const { songName, songPath, plays } = req.body;
  db.run(
    "INSERT INTO TBL_SONG (SONG_NAME, SONG_PATH, PLAYS) VALUES (?, ?, ?)",
    [songName, songPath, plays],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error en el servidor" });
      } else {
        res.json({ id: this.lastID });
      }
    }
  );
});

// Actualizar una canción existente por su ID
app.put("/song/:id", (req, res) => {
  const songId = req.params.id;
  const { songName, songPath, plays } = req.body;
  db.run(
    "UPDATE TBL_SONG SET SONG_NAME = ?, SONG_PATH = ?, PLAYS = ? WHERE ID_SONG = ?",
    [songName, songPath, plays, songId],
    function (err) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error en el servidor" });
      } else if (this.changes === 0) {
        res.status(404).json({ error: "Canción no encontrada" });
      } else {
        res.json({ message: "Canción actualizada correctamente" });
      }
    }
  );
});

// Eliminar una canción por su ID
app.delete("/song/:id", (req, res) => {
  const songId = req.params.id;
  db.run("DELETE FROM TBL_SONG WHERE ID_SONG = ?", [songId], function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error en el servidor" });
    } else if (this.changes === 0) {
      res.status(404).json({ error: "Canción no encontrada" });
    } else {
      res.json({ message: "Canción eliminada correctamente" });
    }
  });
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Microservicio ejecutándose");
});
