
# Leia os comandos abaixo e indique o que eles fazem. Não os rode nas tabelas desse projeto! Explique o que elas fariam se fossem rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

## ALTER TABLE Actor DROP COLUMN salary

Esse comando acrescenta mais uma coluna

## ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

Esse comando vai alterar o "Gender" para o "Sex" e colocar um parâmetro. 

## ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

Essa só vai trocar a parâmetro.

ALTER TABLE Actor
ADD hometown VARCHAR(255);

ALTER TABLE Actor
DROP COLUMN hometown;

ALTER TABLE Actor
CHANGE gender gender ENUM ("male","female", "mon-binary");

UPDATE Actor
SET dessert = "Sorvetea";
WHERE id = "002"
OR id = "006";

ALTER TABLE Actor
ADD dessert  VARCHAR(255) DEFAULT "Sorvete"
SELECT LOWER(NAME);
ALTER TABLE Actor
ADD type VARCHAR(225) DEFAULT "NotDirector";


ALTER TABLE Actor 
CHANGE gender gender VARCHAR(100);

SELECT * FROM Actor;


SELECT SUM (salary)
FROM Actor;

SET SQL_SAFE_UPDATES = 0;

UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "009";

UPDATE Actor
SET name = " Juliana Paes"
WHERE name = "JULIANA PÃES";

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "003";

DELETE FROM Actor
WHERE name = "Tony Ramos";

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000 ;


SELECT COUNT(*) FROM Actor
WHERE gender = "female";

SELECT AVG(salary) from Actor;

SELECT MAX(salary) from Actor;

SELECT MIN(salary) from Actor;

SELECT SUm (salary) from Actor;

SELECT * FROM Actor LIMIT 3;

-- Ordem albabética
SELECT * FROM Actor 
ORDER BY name ASC;

SELECT * FROM Actor 
ORDER BY name ASC 
LIMIT 4;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * from Actor
ORDER BY salary;

SELECT * FROM Movie;
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER Table Movie
ADD playing_limit_date DATE;

ALTER TABLE Movie
CHANGE rating rating FLOAT;

UPDATE Movie
SET
playing_limit_date = "2020-12-31"
WHERE id = "001";

DELETE FROM Movie WHERE id = "001";

--Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?*
SELECT COUNT(*) FROM Movie
WHERE rating > 7.5;

SELECT AVG(rating) from Movie;

SELECT COUNT(*) FROM Movie 
WHERE playing_limit_date > CURDATE();

SELECT COUNT(*) FROM Movie
 WHERE release_date > CURDATE();

 SELECT MAX(rating) FROM Movie;

 SELECT MIN(rating) FROM Movie;

