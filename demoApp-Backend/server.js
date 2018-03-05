import express from 'express';
import dbConfig from './src/config/db';
import {TodoRoutes } from './src/modules';

const app=express();
const PORT=process.env.PORT || 3000


dbConfig();


app.use('/api', [TodoRoutes]);

app.listen(PORT,err =>{
    console.log("ERROR")
},res => {
    console.log(`RUNNING at ${PORT}`)
});