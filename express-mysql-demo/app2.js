const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors=require("cors");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'world'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    //if (error)
    //{console.log(error);}
    res.send("Hello from express mysql2 and react student portal");
})
app.get("/api/get",(req,res)=>{
    //res.send("hello school express mysql2");
    let sql="select * from city where name like 'Delhi'";
            db.query(sql, (error,result)=>{
                if (error)
                {console.log(error);}
                res.send(result);
              //  console.log(result);
            })
} )

app.listen(5000, () => {
    console.log("server is listening on port 5000");
})