const pool = require("../db");

exports.createPost = async(req,res)=>{

const {user_id,content}=req.body;

const result = await pool.query(
"INSERT INTO posts(user_id,content) VALUES($1,$2) RETURNING *",
[user_id,content]
);

res.json(result.rows[0]);

};

exports.getPosts = async(req,res)=>{

const result = await pool.query(
"SELECT users.name,posts.content FROM posts JOIN users ON posts.user_id=users.id"
);

res.json(result.rows);

};
