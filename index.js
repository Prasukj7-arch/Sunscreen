import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const yourAPIKey = "Your API";
const yourAPIKey1 = "Your API";

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req,res)=>{
  res.render("index.ejs");
})  

app.post("/submit", async (req,res)=>{
  console.log(req.body)
  const city = req.body.city;
  const country = req.body.country;
  const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${yourAPIKey}`);
  const result = response.data;
  console.log(result[0].lat);
  console.log(result[0].lon);
  const latitude = result[0].lat;
  const longitude = result[0].lon;
  const countryName = result[0].country;
  const State = result[0].State;
  const response1 = await axios.get(`https://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${longitude}`,{
    headers:{
      "x-access-token": yourAPIKey1,
    }
  });
  const result1 = response1.data;
  console.log(result1.result.uv)
  res.render("index.ejs", {
    uvi : result1.result.uv,
  });
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
