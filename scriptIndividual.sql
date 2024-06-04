CREATE DATABASE IF NOT EXISTS testando;
USE testando;
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    perfil_id INT,
    FOREIGN KEY (perfil_id) REFERENCES perfil(id)
);

CREATE TABLE perfil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

INSERT INTO perfil(nome)
values('Pesqueiro'),
('Mar'),
('Praia'),
('Variado');
select * from perfil;

INSERT INTO dados_dashboard(indicacoes, dicas)
values();
select * from usuarios;
