
const express = require('express');
const mongoose = require('mongoose');
const Patient = require('./models/patients.model.js')

const app = express()

app.use(express.json());

mongoose.connect("mongodb+srv://ancgc:AcmNM24@cluster101.dhgcnvj.mongodb.net/appoinmentManager?retryWrites=true&w=majority&appName=Cluster101")
.then(()=>{
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
})

app.listen(3000, () => {
    console.log("Serve is running on port 3000");
});

app.get('/', (req,res) => {
    res.send("Welcomee here");
});

app.post('/api/patients', async (req,res) => {
    try{
        const patient = await Patient.create(req.body);
        res.status(200).json(patient);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

