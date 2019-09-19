const express = require('express');
const mysql = require('mysql');

// Create connection 
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'Oksari6996',
    database : 'db'
});

db.connect((err) =>{
    if (err) {
        throw err;
        
    }

    console.log('MySql connected..')

});

const app = express();

//create table
app.get('/createtable', (req,res) => {
let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),body VARCHAR(255), PRIMARY KEY (id))';
db.query(sql,(err,result) => {
    if(err) throw err;
    console.log(result);
    res.send('posts table created..');

});

});

//insert
app.get('/addpost',(req,res) => {
    let post = {title:'Post one', body:'this is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added..');

    });
});

app.get('/addpost2',(req,res) => {
    let post = {title:'Post two',body:'this is post number two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added..');

    });
});

app.get('/getpost',(req,res) => {
   
    let sql = 'SELECT * FROM posts';
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts fetched..');

    });
});

//update
app.get('/updatepost/:id',(req,res) => {
    let newTitle = 'updated title';

    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts updated.');

    });
});

app.get('/deletepost/:id',(req,res) => {
    let newTitle = 'updated title';

    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts deleted.');

    });
});



app.listen('3000', () => {
    console.log('server started on port 3000');
});