import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;

const port = 3000;
const app = express();
const airQapi = "https://api.api-ninjas.com/v1/airquality?city=";
const api_Key = apiKey;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/submit", async (req, res) =>{
    const city = req.body.city;
    try{
        const result = await axios.get(airQapi + city,{
            headers: {
                "X-Api-Key" : apiKey
            },
        });
        res.render("quality.ejs",{
            city : city,
            contents: result.data,
        });
    }catch(err){
        res.render("notfound.ejs",{
            city : city,
        } )
    }
})

app.post("/redirect", (req, res) =>{
    res.redirect("/");
})

app.listen(port, (req, res) => {
    console.log(`server running on port ${port}`);
})