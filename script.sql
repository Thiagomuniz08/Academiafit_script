-- DDL - Estrutura
drop database if exists Academia_Fit;
create database Aulinha_Fit;
use Aulinha_Fit;
create table Clientes(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null,
    altura varchar(20) not null,
    peso varchar(10) not null,
    endereço varchar(150) not null

);
describe Clientes;

-- DML - Popular com dados de teste
insert into Clientes(cpf, nome, sobrenome, nascimento, altura, peso, endereço)
values
("111.111.111-11","Jair","Silva","1980-01-01","1,90","90","Maria das Neves"),
("222.222.222-22","Jafoi","Solza","1990-02-25","1,80","80","Roraima"),
("333.333.333-33","Javai","Santos","1985-03-18","1,70","70","Francisco Miranda"),
("444.444.444-44","Jaera","Silveira","1982-04-13","1,60","60","Itapira"),
("555.555.555-55","Jacinto","Pena","2005-05-15","1,50","50","Otavio Nozes");

select * from Clientes;

create table Treinadores(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    nascimento date not null,
    endereço varchar(150) not null,
    formação varchar(20) not null
);
describe Treinadores;

insert into Treinadores(cpf, nome, sobrenome, nasciment,altura, peso, endereço, formação)
values
("666.666.666-66","Thiago","Muniz","2008-05-05","1,70","60","Benedito Norival","Personal"),
("777.777.777-77","Thomas","Souza","1990-09-10","1,85","65","Guanabara","Nutricionista"),
("888.888.888-88","Théo","Santos","2000-06-07","1,56","70","Fabio Neves","Educação Física"),
("999.999.999-99","Tales","Ramos","1997-10-5","1,77","88","João Batista","Segurança")

select * from Treinadores;