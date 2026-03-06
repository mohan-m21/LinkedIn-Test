const pool = require("../db");

exports.getUsers = async(req,res)=>{

const result = await pool.query(
"SELECT * FROM users"
);

res.json(result.rows);

};
