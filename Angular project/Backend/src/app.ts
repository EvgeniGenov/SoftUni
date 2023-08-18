import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import mainRoute from './routes/main.route';
import ErrorHandler from './middlewares/error-handler';

const connStr = 'mongodb://0.0.0.0:27017/user';
    
const app = express();

app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());
app.use(mainRoute);

app.listen(3000, () => {
  console.log('Server listenning on port 3000 and 4200');
});
mongoose.connect(connStr).then(() => {
  console.log("Database connected");
})
.catch(err => {
  console.log('Error initializing database');
})


  



