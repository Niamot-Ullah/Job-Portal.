require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.odar0io.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
        // await client.connect();

        const jobsCollection = client.db('jobsDB').collection('jobs')

        app.get('/jobs', async (req, res) => {
            const cursor = jobsCollection.find({}).sort({ deadline: -1 }) ;
            const result = await cursor.toArray();
            res.send(result)
        })
        app.get('/featured-jobs', async (req, res) => {

            const cursor = jobsCollection
                .find({})
                .sort({ deadline: -1 }) // Sort by deadline descending (latest first)
                .limit(6);
            const result = await cursor.toArray();
            res.send(result)
        })
        app.get('/job/:id', async (req, res) => {
            const params = req.params.id
            const id = { _id: new ObjectId(params) };
            const result = await jobsCollection.findOne(id)
            res.send(result)
        })
        app.get('/my-posted-jobs/:email',async(req,res)=>{
            const email =req.params.email;
            const query = {email : email};
            const result = await jobsCollection.find(query).toArray();
            res.send(result);
        })

        app.post('/jobs', async (req, res) => {
            const newJob = req.body;
            console.log(newJob);
            const result = await jobsCollection.insertOne(newJob)
            res.send(result)
        })

        app.put('/update-job/:id', async(req,res)=>{
            const id = req.params.id;
            const data = req.body;
            const query = {_id: new ObjectId(id)};
            const updatedDoc = {
                $set:data,
            };
            const result= await jobsCollection.updateOne(query,updatedDoc);
            res.send(result);
        });

        app.delete('/job/:id', async(req,res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await jobsCollection.deleteOne(query);
            res.send(result);
        });



        //send a ping to confirm a successful connection
        // await client.db("admin").command({ping:1})
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {

    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Simple Crud Server running");
});

app.listen(port, () => {
    console.log("Simple CRUD server running on ", port);
});
