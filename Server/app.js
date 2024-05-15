const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// Middle ware
app.use(cors());
app.use(express.json());
// .Middleware use verify
const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: true, message: "unauthorized token" });
  }

  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ error: true, message: "unauthorized token" });
    }
    req.decoded = decoded;
    next();
  });
};
// TShirtBussiness
// WXnaBIXl94LNzLWB

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

    const TShirtCollection = client
      .db("TShirtCollection")
      .collection("AllTShirt");
    const usersCollection = client.db("TShirtCollection").collection("users");
    const checkoutCollection = client
      .db("TShirtCollection")
      .collection("AllCheckout");
    // JWT
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    // User Collection
    // post user
    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exist" });
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });
    // Update user data
    app.put("/users", async (req, res) => {
      const updatedUserData = req.body;
      console.log(updatedUserData);
      const query = { email: updatedUserData.email };
      const existingUser = await usersCollection.findOne(query);
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const result = await usersCollection.updateOne(query, {
        $set: updatedUserData,
      });
      res.send(result);
    });
    // Get all user
    app.get("/users", async (req, res) => {
      const user = await usersCollection.find().toArray();
      res.send(user);
    });
    // Update user to admin
    app.patch("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      console.log(filter);
      const updatedDoc = {
        $set: {
          role: "admin",
          status: "active",
        },
      };
      const result = await usersCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    // Get admin
    app.get("/users/admin/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;

      if (req.decoded.email !== email) {
        res.send({ admin: false });
      }
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      const result = { admin: user?.role === "admin" };
      res.send(result);
    });

    app.get("/all_t_shirt", async (req, res) => {
      const allTShirt = await TShirtCollection.find().toArray();
      res.send(allTShirt);
    });
    async function fetchCurrentInvoiceId() {
      // Query the checkout collection to find the document with the highest invoiceId
      const highestInvoiceDoc = await checkoutCollection.find().sort({ invoiceId: -1 }).limit(1).toArray();
      
      if (highestInvoiceDoc.length === 0 || !highestInvoiceDoc[0].invoiceId) {
        // If no documents are found or invoiceId is not present, return a default value (e.g., starting invoice ID)
        return 10000;
      }
      
      // Extract and return the invoiceId from the highest document
      return parseInt(highestInvoiceDoc[0].invoiceId, 10); // Ensure it's parsed as an integer
    }

    app.post("/checkout", async (req, res) => {
      const body = req.body;
      const orderId = req.body.orderId;
      console.log(orderId);
      let currentInvoiceId = await fetchCurrentInvoiceId();
      currentInvoiceId++;
      body.invoiceId = currentInvoiceId;

      const query = { orderId: body.orderId };
      // console.log(query);
     
      const existingData = await checkoutCollection.findOne(query);
      if (existingData) {
        return res.status(404).json({ message: "Invoice Id already Exist" });
      }
      const result = await checkoutCollection.insertOne(body);
      res.send({ invoiceId: currentInvoiceId });
    });
    app.get("/checkout", async (req, res) => {
      const result = await checkoutCollection.find().toArray();
      res.send(result);
    });
app.put('/checkout', async(req, res) =>{
  const { id, status } = req.body; 
  // const query = { _id: new ObjectId(id) };
  const updatedCheckout = await checkoutCollection.findOneAndUpdate(
    { _id: new ObjectId(id) }, // Filter by the checkout ID
    { $set: { status: status } }, // Update the status
    { new: true } // Return the updated document
  );
  // const existingData = await checkoutCollection.findOne(query);
 

  res.send(updatedCheckout);
})
    app.get("/checkout", async (req, res) => {
      const email = req.query.email;
      console.log(email);
      if (!email) {
        res.send([]);
      }
      const query = { email: email };
      const data = await checkoutCollection.find(query).toArray();
      res.send(data);
    });
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
