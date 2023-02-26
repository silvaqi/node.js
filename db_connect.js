import { createConnection } from "mysql";

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notes'
})

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected!")
});