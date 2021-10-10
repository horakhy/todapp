1. Buscar os nomes de todos os alunos que frequentam alguma turma do professor 'JOAO PEDRO'.
-> SELECT ALUNO.Nome FROM TURMA JOIN PROFESSOR ON (TURMA.PROFESSOR_id = PROFESSOR.id) JOIN ALUNO_TURMA 
   ON (TURMA.id = CAST(ALUNO_TURMA.turma_id AS UNSIGNED)) 
   JOIN ALUNO ON (ALUNO_TURMA.aluno_id = ALUNO.id) WHERE PROFESSOR.nome LIKE "JOAO PEDRO";

2. Buscar os dias da semana que tenham aulas da disciplina 'MATEMATICA'.
->  SELECT DISTINCT TURMA.dia_da_semana FROM TURMA JOIN DISCIPLINA
 ON TURMA.disciplina_id = DISCIPLINA.id WHERE DISCIPLINA.nome = 'MATEMATICA'

3. Buscar todos os alunos que frequentem aulas de 'MATEMATICA' e também 'FISICA'.
-> Select * FROM alunos outer join

4. Buscar as disciplinas que não tenham nenhuma turma.
-> SELECT DISCIPLINA.nome FROM TURMA RIGHT JOIN DISCIPLINA ON TURMA.disciplina_id = DISCIPLINA.id WHERE TURMA.disciplina_id = NULL;

5. Buscar os alunos que frequentem aulas de 'MATEMATICA' exceto os que frequentem 'QUIMICA'.
->