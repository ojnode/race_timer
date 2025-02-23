import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));

const macIp = '192.168.0.15';

app.listen(port, macIp, () => {
    console.log(`listening on port ${port}`);
});