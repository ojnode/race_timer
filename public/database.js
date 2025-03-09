import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import uuid from 'uuid-random';

async function init() {
    const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database,
        verbose: true,
    });
    await db.migrate({ migrationsPath: './migrations-sqlite' });
    return db;
}

const dbConn = init();

export async function listRunners() {
    const db = await dbConn;
    return db.all('SELECT * FROM Runners');
}

export async function addRunners(runnerName) {
    const db = await dbConn;
    const id = uuid();
    const time = new Date().toISOString();
    await db.run('INSERT INTO Runners VALUES (?, ?, ?)', [id, runnerName, time]);

    return listRunners();
}