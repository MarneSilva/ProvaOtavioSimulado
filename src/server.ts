import express from 'express';
import MainRouter from './routes/MainRoute';
import UserRouter from './routes/UserRoute';
import LeilaoRouter from './routes/LeilaoRoute';
import LanceRouter from './routes/LanceRoute';

const app = express();
app.use(express.json());

app.use(MainRouter);
app.use(UserRouter);
app.use(LeilaoRouter);
app.use(LanceRouter);

app.listen(3000, function(){
    console.log("Server running on port 3000");
})