# Questão 6

---

## Letra A.
**Enunciado:** Você concorda que o banco faz o cadastro de duas entidades e ainda faz regras de negócios?

**Resposta:** Sim, ao mesmo tempo em que realiza a validação de duplicidade das suas entidades, o banco ainda continua seguindo as regras de negócios impostas.

---

## Letra B.
**Enunciado:** Não seria adequado o banco ter uma class CadastroDeClientes e CadastroDeContas e algumas regras de validação serem feitas no banco e deixar os métodos de consulta e inclusão os mais simples possíveis?

**Resposta:** Sim, essa seria a opção mais adequada. Separar classes como CadastroDeClientes e CadastroDeContas tornaria o código mais modular e fácil de manter, sendo benéfico para a organização, simplicidade e manutenção do código.

---

## Letra C.
**Enunciado:** O método associar cliente a uma conta deveria estar em que classe?
Banco, CadastroDeContas ou CadastroDeClientes?

**Resposta:** O método associarContaCliente deveria estar na classe Banco, visando centralizar as regras de negócios.

---
