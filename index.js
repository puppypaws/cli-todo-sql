console.log("works!!", process.argv[2]);

const pg = require('pg');

const configs = {
    user: 'Romeo',
    host: '127.0.0.1',
    database: 'todo',
    port: 5432,
};

const client = new pg.Client(configs);

let action = process.argv[2];


let queryDoneCallback = (err, result) => {
    if (err) {
      console.log("query error", err.message);
    } else {
      console.log("result", result.rows );
    }
};

let thing = {name:"mark"}




let clientConnectionCallback = (err) => {

let str =  `my name is ${thing.name}`



  if( err ){
    console.log( "error", err.message );
  }

let text = "INSERT INTO todo (name) VALUES ($1) RETURNING id";

// const values = ["go shopping","eat cheese","be usable","fly kite","420"];

// for (let i=0; i<values.length;i++){

  //client.query(text, [values], queryDoneCallback);

};

const showAll = () => {

    const query = "SELECT * FROM todo ORDER BY id ASC"

    client.query(query,(err,res)=>{
        for (let i in res.rows){
            console.log(res.rows[i])
        }
    })
    console.log("showing stuff")
}



client.connect(clientConnectionCallback);

if (action == "show"){
    showAll()
}

let reeeCallBack = (err,res)=>{
    showAll()
}

if (action =="turtle"){

    const query = "INSERT INTO todo (name) VALUES ($1) RETURNING id";
    const values = []


console.log(process.argv);
//loop the process.argv, den ni the loop, push the arg into the valuesc

for (let input=3; input<process.argv.length; input++) {
    console.log(process.argv[input]);
    values.push(process.argv[input]);
}

    // const values = ["jsdlkfkj", "asddasd","hbhbb"];

    for (let i=0; i<values.length;i++){
        client.query(query, [values[i]], reeeCallBack);
    }

};



if (action =="update"){
//UPDATE students SET email='bobby@example.com' WHERE name = 'Bob Jones';

    console.log(process.argv)
    let josh = process.argv[4] == "completed" ? "x" : ''

    const query = `UPDATE todo SET done='${josh}' WHERE id = ${process.argv[3]}`;

        client.query(query, reeeCallBack);

}



   // client.query("some text",callbackFunc)


  //      app.get("/some route", someOtherCallbackFunc)