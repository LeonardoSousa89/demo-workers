CREATE DATABASE worker_admin ENCODING 'utf8';
DROP DATABASE worker_admin;

\c  worker_admin admin

CREATE TABLE IF NOT EXISTS administrator(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

DROP TABLE administrator;

CREATE TABLE IF NOT EXISTS workeradmin(
    id SERIAL PRIMARY KEY NOT NULL,
    workername VARCHAR(100) NOT NULL,
    workerjob VARCHAR(100) NOT NULL, 
    workersalary NUMERIC(10,2) NOT NULL,
    workersector VARCHAR(100) NOT NULL,
    administrator_id int,
    FOREIGN KEY(administrator_id) REFERENCES administrator(id)
);

DROP TABLE workeradmin;

INSERT INTO administrator VALUES(1, 'Leonardo Sousa', 'mendesDev@gmail.com', 1234);

INSERT INTO workeradmin VALUES(1,'Bruce Wayne','logistics manager',5658.69,'LOGISTICS',1);
INSERT INTO workeradmin VALUES(2,'Norman Osborn','engineering manager',7888.69,'ENGINEERING',1);
INSERT INTO workeradmin VALUES(3,'Bob kane','editor',4568.69,'MARKETING',1);

SELECT * FROM administrator;
SELECT * FROM workeradmin;

CREATE VIEW get_user_data 
AS SELECT a.id AS admin_id,
       a.username,
       a.email,
       w.id AS worker_id,
       w.workername,
       w.workerjob,
       w.workersalary,
       w.workersector
FROM administrator a
INNER JOIN workeradmin w
ON a.id=w.administrator_id
WHERE a.id=1;

DROP VIEW IF EXISTS  get_user_data; 

SELECT * FROM  get_user_data;

\q