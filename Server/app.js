const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();

// Middle ware
app.use(cors());
app.use(express.json());

// TShirtBussiness
// WXnaBIXl94LNzLWB

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://TShirtBussiness:WXnaBIXl94LNzLWB@cluster0.0i3pjbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const TShirtCollection = client.db("TShirtCollection").collection("AllTShirt");
    const reviewsCollection = client.db("TShirtCollection").collection("reviews");

app.get('/all_t_shirt', async(req , res) =>{
  const allTShirt = await TShirtCollection.find().toArray()
  res.send(allTShirt)
})





app.post('/reviews', async(req, res) =>{
  const reviews = req.body
  console.log(reviews);
})

    await client.db("admin").command({ ping: 1 });
    console.log("MONGODB Connect successfully😊😊😊");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Sever is running 😊😊😊");
});
app.listen(port);