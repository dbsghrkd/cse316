const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// Create Express app
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "ottUser",
  password: "mjTheGreat11@",
  database: "ott",
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from("mjTheGreat11@", "utf-8"),
  },
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

//join us page
app.post("/saveUserInfo", (req, res) => {
  const { ID, password, userName, email, age } = req.body;
  const sql = "INSERT INTO users (ID, password, userName, email, age) VALUES (?, ?, ?, ?, ?)";

  db.query(sql, [ID, password, userName, email, age], (err, result) => {
    if (err) {
      console.error("Error saving user information:", err);
      res.status(500).json({ error: "Internal Server Error", details: err.message });
    } else {
      console.log("User information saved successfully");
      res.status(200).send("User information saved successfully");
    }
  });
});
//Login
app.post('/login', (req, res) => {
  const {userID, password} = req.body;
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [userID], (err,result) => {
    if(err){
      console.error('Error updating transcript:', err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
    if(result.length === 0){
      console.log('User with ID not found');
      return res.status(404).send("User not found");
    }
    const user = result[0];
    if(result[0].password === user.password){
      console.log("Success Login");
      res.json({message: "Login Successful", userID});
    }else{
      console.log("failed Login");
      res.status(404).send("Invaild Password");
    }
  })
})

app.put('/updateUserInfo', (req, res) => {
  const { ID, password, userName, email, age } = req.body;

  const sql = "UPDATE users SET password=?, userName=?, email=?, age=? WHERE ID=?";
  
  db.query(sql, [password, userName, email, age, ID], (err, result) => {
    if (err) {
      console.error("Error updating user information:", err);
      res.status(500).json({ error: "Internal Server Error", details: err.message });
    } else {
      console.log("User information updated successfully");
      res.status(200).json({ message: 'User information updated successfully' });
    }
  });
});

//info
app.post('/getName', (req, res) => {
  const { userID } = req.body;
  const sql = "SELECT userName, email, age FROM users WHERE id = ?";

  db.query(sql, [userID], (err, result) => {
      if (err) {
          console.error('Error fetching user information:', err);
          res.status(500).json({ error: 'Internal Server Error', details: err.message });
      } else {
          const userInformation = result[0];
          res.json(userInformation);
      }
  });
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
