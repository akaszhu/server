import express from 'express'
import Mongoose from 'mongoose'
import cors from 'cors'
const app = express();
import dotenv from 'dotenv'
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config()
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

// app.get('/',(req,res)=>{
//     res.send("This is Ulavar forum")
// })

app.use('/user', userRoutes)
app.use('/questions',questionRoutes)
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.CONNECTION_URL
Mongoose.set('strictQuery', true);
Mongoose.connect(DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => app.listen(PORT,() => {console.log(`server running on ${PORT}`)}))
    .catch((err)=> console.log(err.message))





