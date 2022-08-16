const mysql=require('mysql2');
const con = mysql.createConnection({ //tbd this may be unsafe and needs fixing
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'world'
});

con.connect ((err)=>{
    if(err){
        //throw err;
       console.log(err);
            }
            console.log("Databse connected");
            let sql="select * from city";
            con.query(sql, (err,res)=>{
                if (err)
                {console.log(err);}
                console.log(res);
            })
})
