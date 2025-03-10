-- Up

CREATE TABLE Runners (
    id INTEGER PRIMARY KEY,
    runnerName TEXT NOT NULL,
    time DATETIME
);

INSERT INTO Runners (runnername, time) VALUES
(   'John Paul',
    datetime('now'))

-- Down

DROP TABLE Runners;