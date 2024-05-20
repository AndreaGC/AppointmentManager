
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/patientRouter');


const app = express()

app.use(express.json());

mongoose.connect("mongodb+srv://ancgc:AcmNM24@cluster101.dhgcnvj.mongodb.net/appoinmentManager?retryWrites=true&w=majority&appName=Cluster101")
.then(()=>{
    console.log("Connected to database!");
})
.catch(() => {
    console.log("Connection failed!");
})



app.use('/api', userRoutes);


app.listen(3000, () => {
    console.log("Serve is running on port 3000");
});
/*
app.post('/api/patients', async (req,res) => {
    try{
        const patient = await Patient.create(req.body);
        res.status(200).json(patient);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})
app.get('/api/Getpatients', async (req,res) => {
    try{
        const patients = await Patient.find();
        res.status(200).json(patients);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})  // Path: index.js
app.post('/api/patients/:id/appointments', async (req,res) => {
    try{
        const patient = await Patient.findById(req.params.id);
        patient.appointments.push(req.body);
        await patient.save();
        res.status(200).json(patient);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})*/