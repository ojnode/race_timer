-- Up

CREATE TABLE Runners (
    id CHAR(36) PRIMARY KEY,
    runnerName TEXT NOT NULL,
    time DATETIME
);

INSERT INTO Runners (id, runnername, time) VALUES
( 'xhhjsjsjjj',
    'John Paul',
    datetime('now'))

-- Down

DROP TABLE Runners;