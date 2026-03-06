const pool = require("../db");

exports.createJob = async (req,res)=>{

const {title,company,description}=req.body;

const result = await pool.query(
"INSERT INTO jobs(title,company,description) VALUES($1,$2,$3) RETURNING *",
[title,company,description]
);

res.json(result.rows[0]);

};

exports.getJobs = async (req,res)=>{

const result = await pool.query(
"SELECT * FROM jobs ORDER BY posted_at DESC"
);

res.json(result.rows);

};
