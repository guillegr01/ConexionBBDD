/**
 * * mongoclient es el nombre que le damos(puede ser otro), pero mongodb 
 * * tiene que ser asi, ya que es asi como esta en el deno.json
 */
//Import BBDD package
import { MongoClient } from "mongodb"; 

//connect BBDD
const url = "mongodb+srv://ggil:guillermitO2001@clusterbackend.rznxc.mongodb.net/?retryWrites=true&w=majority&appName=ClusterBackEnd";
const client = new MongoClient(url);

const dbName = "back-enddb";

await client.connect();
console.log("Connected succesfully to server");
const db = client.db(dbName);//elegimos la BBDD a la que queremos conectarnos dentro de nuestro cluster
const UsersCollection = db.collection("users");//elegimos la colección que queramos de la BBDD

//Convierte la coleción en un array
const users = await UsersCollection.find().toArray();

//Mostramos el array
users.forEach((elem) => {
  console.log(elem);
})
