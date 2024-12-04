const express =require("express");
const mysql = require("mysql");
const cors = require("cors"); 
     
//Conexão com o SGBD MySQL
const con= mysql.createConnection({
    user: 'root',
    host:'localhost',
    database: 'Academia_fit'
});

//Rota de teste
const teste = (req, res) => {
   res.send("Back-end respondendo");
}

//CRUD - create
const create = (req, res) => {
   let cpf = req.query.cpf;
   let nome = req.query.nome;
   let sobrenome = req.query.sobrenome;
   let nascimento = req.query.nascimento;
   let altura = req.query.altura;
   let peso = req.query.peso;
   let endereço = req.query.endereço;
   let query = `INSERT INTO Clientes(cpf, nome, sobrenome, nascimento) VALUE`;
   query += `('${cpf})', '${nome}', '${sobrenome}', '${nascimento}' '${altura}' '${peso}' ${endereço}');`;
   con.query(query,query,(err,result)=> {
      if (err) {
         res.json(err);
      }else {
         res.json(result);
      }
   });
console.log("Cadastrado");
}
//CRUD - Read
const read = (req, res) => {
   con.query("SELECT * FROM Clientes", (err, result) => {
       if (err)
           res.json(err);
       else
           res.json(result);
   });
}


const create2 = (req, res) => {
   let cpf = req.query.cpf;
   let nome = req.query.nome;
   let sobrenome = req.query.sobrenome;
   let nascimento = req.query.nascimento;
   let altura = req.query.altura;
   let peso = req.query.peso;
   let endereço = req.query.endereço;
   let formação = req.query.formação;
   let query = `INSERT INTO Treinadores(cpf, nome, sobrenome, nascimento, altura, peso, endereço, formação) VALUE`;
   query += `('${cpf})', '${nome}', '${sobrenome}', '${nascimento}' '${altura} '${peso} '${endereço} '${formação});`;
   con.query(query,query,(err,result)=> {
      if (err) {
         res.json(err);
      }else {
         res.json(result);
      }
   });
console.log("Cadastrado");
}

  //Configurações de saída - FrontEnd
  const app = express();
  app.use(express.json());
  app.use(cors());

  //Rotas de Saída = FrontEnd
  app.get("/", teste);
  app.get("/clientes/create", create);
  app.get("/clientes" , read);
  app.get("/treinadores/create",create2);

  //Teste e porta no console
app.listen(3000, () => {
   console.log("Back-end respondendo na porta 3000");
});