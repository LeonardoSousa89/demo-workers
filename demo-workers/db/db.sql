CREATE DATABASE worker_admin ENCODING 'utf8';
DROP DATABASE worker_admin;

\c  worker_admin admin

CREATE TABLE IF NOT EXISTS worker(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

DROP TABLE worker;

CREATE TABLE IF NOT EXISTS workeradmin(
    id SERIAL PRIMARY KEY NOT NULL,
    workername VARCHAR(100) NOT NULL,
    workerjob VARCHAR(100) NOT NULL, 
    workersalary NUMERIC(10,2) NOT NULL,
    workersector VARCHAR(100) NOT NULL,
    worker_id int,
    
);

DROP TABLE workeradmin;

INSERT INTO worker VALUES(1, 'Leonardo Sousa', 'mendesDev@gmail.com', 1234);

INSERT INTO workeradmin VALUES(1,'Bruce Wayne','logistics manager',5658.69,'LOGISTICS');
INSERT INTO workeradmin VALUES(2,'Norman Osborn','engineering manager',7888.69,'ENGINEERING');
INSERT INTO workeradmin VALUES(3,'Bob kane','editor',4568.69,'MARKETING');

SELECT * FROM workeradmin;

\q