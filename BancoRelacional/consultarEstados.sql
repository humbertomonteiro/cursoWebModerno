SELECT * FROM estados

SELECT sigla, nome AS 'Nome do Estado' FROM estados
WHERE regiao = "Sul"

SELECT nome, regiao FROM estados
WHERE população >= 10
ORDER BY população desc