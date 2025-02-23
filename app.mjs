import express from "express";
import path from "path";
const app = express();
// import bodyParser from "body-parser";
import cors from "cors";

const port = process.env.PORT || 8080;

// app.use(cors({origin: "http://localhost:5173", methods: ["POST", "GET"]}));
// app.use(express.json());
app.use(cors()) 
app.use(express.json())
const saveData = []

//it's for built dist
const __dirname = path.resolve();

app.use("/", express.static(path.join(__dirname, "./React/dist"))); 

app.get("/", (req, res) => {
  res.send("get  chlrha ha");
});

app.post("/", (req, res) => {
  console.log("POST request received:", req.body);
  res.send("Hello World!");
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
