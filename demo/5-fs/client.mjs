import { createWriteStream } from "node:fs";
import { get } from "https";

/**
 * Lecture d'un côté distant depuis GitHub (joue le rôle de serveur)
 * Et écriture du contenu dans un fichier local par paquet d'information
*/
const createNewFileStream = createWriteStream("cities.json");
// get similaire à request
get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/cities.json",
  (res) => {
    if (res.statusCode === 200) {
      res.pipe(createNewFileStream);
      res.on("data", (chunk) => { // réception paquet d'info = chunk
        // Le chunk est en hexadecimal par defaut, .toString() permet de le rendre lisible pour nous les humains
        console.log("paquet", chunk.toString());
      });
      res.on("error", (error) => {
        console.error("erreur ", error.message);
      });
    }
  }
).end();