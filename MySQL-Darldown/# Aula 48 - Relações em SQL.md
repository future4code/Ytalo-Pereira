# Aula 48 - Relações em SQL

## Exercício 1

### a. Explique o que é uma chave estrangeira

Tem o intuito de relacionar ou referenciar uma tabela com outra. 

### b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("001", "Muito bom", 7, "001");

### c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

Cannot add or update a child row: a foreign key constraint fails (`maryam-ytalo-cruz`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possível adicionar ou atualizar  por causa que o id é inválido. 


### d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

ALTER TABLE Movie 
DROP COLUMN rating:

### e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

## Exercício 2

### a. Explique, com as suas palavras, essa tabela

É para relacionar que um filme pode ser feito e estreado por vários atores, mostrando a relação entre N:M. Então, essa tabela vai relacionar a tabela Movie e Actor.

### b.Crie, ao menos, 6 relações nessa tabela

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
    "003",
    "008"
);

SELECT * FROM Movie; 

-- 3
SELECT * FROM Actor;
--2 até 8

### c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query

Message :
  Cannot add or update a child row: a foreign key constraint fails (`maryam-ytalo-cruz`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

  Não é possível adicionar ou atualizar  por causa que o id é inválido. 


## Exercício 3

### a. Explique, com suas palavras, a query acima. O que é o operador ON?

### b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;