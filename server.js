import 'dotenv/config';
import express from 'express';
import * as db from './public/database.js';

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));

async function saveRunner(req, res) {
    const { runnerName } = req.body;
    const runner = await db.addRunners(runnerName);

    res.json(runner);
}

async function getRunners(req, res) {
    res.json(await db.listRunners());
}

async function getRunner(req, res) {
    res.json(await db.findRunner(req.params.id));
}

async function delRunner(req, res) {
    const runner = await db.delRunner(req.params.id);
    
    res.json(runner);
}

async function putRunner(req, res) {
    const { runnerName } = req.body;
    const runner = await db.editRunner(req.params.id, runnerName);

    res.json(runner);
}

app.post('/runner', express.json(), saveRunner);
app.put('/runner/:id', express.json(), putRunner);
app.delete('/runner/:id', delRunner);
app.get('/runner', getRunners);
app.get('/runner/:id', getRunner);

app.listen(port, '0.0.0.0', () => {
    console.log(`listening on port ${port}`);
});