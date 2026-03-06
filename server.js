const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.get("/",(req,res)=>{
res.sendFile(__dirname + "/public/login.html");
});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});
