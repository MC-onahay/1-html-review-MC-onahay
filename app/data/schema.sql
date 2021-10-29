SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS dshomework;

USE dshomework;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT ,
    title varchar(48),
    author varchar(48),
    publishyr int,
    pgcount int,
    msrp int
);

INSERT INTO books (id, title, author, publishyr, pgcount, msrp) VALUES 
(1, 'Bossypants', 'Tina Fey', '2011', '250', '9.00'),
(2, 'James Acaster''s Classic Scrapes', 'James Acaster', '2018', '302', '15.99'),
(3, 'The Wolf In CIO''s Clothing', 'Tina Nunno', '2015', '212', '15.61'),
(4, 'Year Book', 'Seth Rogen', '2021', '260', '28.00');


-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';
USE dshomework; SELECT * FROM books