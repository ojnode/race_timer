import 'dotenv/config';
import express from 'express';
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

const macIp = process.env.macIp;

app.listen(port, macIp, () => {
    console.log(`listening on port ${port}`);
});