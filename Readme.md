Create a database in SQLite
CREATE TABLE TBL_SONG (
  ID_SONG INTEGER PRIMARY KEY AUTOINCREMENT,
  SONG_NAME TEXT,
  SONG_PATH TEXT,
  PLAYS INTEGER
);

Insert some rows.
INSERT INTO TBL_SONG (SONG_NAME, SONG_PATH, PLAYS) VALUES ('Song 1', '/ruta/song1.mp3', 100);
INSERT INTO TBL_SONG (SONG_NAME, SONG_PATH, PLAYS) VALUES ('Song 2', '/ruta/song2.mp3', 50);
INSERT INTO TBL_SONG (SONG_NAME, SONG_PATH, PLAYS) VALUES ('Song 3', '/ruta/song3.mp3', 200);
INSERT INTO TBL_SONG (SONG_NAME, SONG_PATH, PLAYS) VALUES ('Song 4', '/ruta/song4.mp3', 75);
INSERT INTO TBL_SONG (SONG_NAME, SONG_PATH, PLAYS) VALUES ('Song 5', '/ruta/song5.mp3', 150);
INSERT INTO TBL_SONG (SONG_NAME, SONG_PATH, PLAYS) VALUES ('Song 6', '/ruta/song6.mp3', 90);
INSERT INTO TBL_SONG (SONG_NAME, SONG_PATH, PLAYS) VALUES ('Song 7', '/ruta/song7.mp3', 120);
INSERT INTO TBL_SONG (SONG_NAME, SONG_PATH, PLAYS) VALUES ('Song 8', '/ruta/song8.mp3', 80);
INSERT INTO TBL_SONG (SONG_NAME, SONG_PATH, PLAYS) VALUES ('Song 9', '/ruta/song9.mp3', 110);
INSERT INTO TBL_SONG (SONG_NAME, SONG_PATH, PLAYS) VALUES ('Song 10', '/ruta/song10.mp3', 160);


cd Backend

npm init -y

npm install express
npm install sqlite3

node  index.js

http://localhost:3000/songs

En este ejemplo, se han agregado las siguientes rutas y funcionalidades al microservicio MSSongBM:

- La ruta `GET /songs` permite obtener todas las canciones de la base de datos.
- La ruta `POST /song` permite crear una nueva canción utilizando los datos proporcionados en el cuerpo de la solicitud.
- La ruta `PUT /song/:id` permite actualizar una canción existente por su ID utilizando los datos proporcionados en el cuerpo de la solicitud.
- La ruta `DELETE /song/:id` permite eliminar una canción por su ID.

Recuerda reemplazar `'ruta/a/tu/base/de/datos.sqlite'` con la ruta real a tu base de datos SQLite.

Con estas funcionalidades implementadas, ahora puedes realizar operaciones CRUD completas en el microservicio MSSongBM para administrar las canciones en la base de datos SQLite.

Es importante tener en cuenta que este es solo un ejemplo básico y que se deben tomar precauciones adicionales, como validar datos de entrada y proteger la base de datos contra ataques.


----------------------------------------------------------------
Comandos Docker
