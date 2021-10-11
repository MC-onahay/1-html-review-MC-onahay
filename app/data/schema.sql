SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS dshomework;

USE dshomework;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(48) UNIQUE NOT NULL,
    author varchar(48),
    publishyr int,
    pgcount int,
    msrp int
);

INSERT INTO books (id, title, author, publishyr, pgcount, msrp) VALUES 
(1, 'Bossypants', 'Tina Fey', '2011', '250', '9.00'),
(1, 'James Acaster''s Classic Scrapes', 'James Acaster', '2018', '250', '9.00'),
(1, 'The Wolf In CIO''s Clothing', 'Tina Nunno', '2015', '212', '15.61'),
(1, 'Year Book', 'Seth Rogen', '2021', '260', '28.00');


-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';
