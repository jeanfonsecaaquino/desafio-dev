CREATE DATABASE IF NOT EXISTS `DESAFIO_DEV`;
use DESAFIO_DEV;

GRANT ALL PRIVILEGES ON *.* TO 'desafio-dev';

CREATE TABLE `TipoTransacoes` (
    `id` int NOT NULL,
    `descricao` VARCHAR(40),
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `TipoTransacoes` (`id`, `descricao`) VALUES (1, 'Debito');
INSERT INTO `TipoTransacoes` (`id`, `descricao`) VALUES (2, 'Boleto');
INSERT INTO `TipoTransacoes` (`id`, `descricao`) VALUES (3, 'Financiamento');
INSERT INTO `TipoTransacoes` (`id`, `descricao`) VALUES (4, 'Credito');
INSERT INTO `TipoTransacoes` (`id`, `descricao`) VALUES (5, 'Recebimento Emprestimo');
INSERT INTO `TipoTransacoes` (`id`, `descricao`) VALUES (6, 'Vendas');
INSERT INTO `TipoTransacoes` (`id`, `descricao`) VALUES (7, 'Recebimento TED');
INSERT INTO `TipoTransacoes` (`id`, `descricao`) VALUES (8, 'Recebimento DOC');
INSERT INTO `TipoTransacoes` (`id`, `descricao`) VALUES (9, 'Aluguel');

CREATE TABLE `Transacoes` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `tipoTransacao` int NOT NULL,
  `dataOcorrencia` date NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `cartao` varchar(12) NOT NULL,
  `hora` TIME NOT NULL,
  `donoLoja` varchar(14) NOT NULL,
  `nomeLoja` varchar(19) NOT NULL,
  `dataCriacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dataAtualizacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=latin1;

ALTER TABLE Transacoes
ADD FOREIGN KEY (tipoTransacao) REFERENCES TipoTransacoes(id);

-- INSERT INTO DESAFIO_DEV.Transacoes (tipoTransacao,dataOcorrencia,valor,cpf,cartao,hora,donoLoja,nomeLoja)
-- 	VALUES (1,'2022-01-01',200.0,'11636540783','92198291','10:00','Jean Teste 2','Jean Teste 2');
