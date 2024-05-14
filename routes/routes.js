const express = require("express");
const upFile = require("../controllers/upFile")
const getDoc = require("../controllers/getDoc")
const allProcess = require('../controllers/allProcess')
const router = express.Router();

/* 
// Rota para enviar documento
router.get("/driveapp/updoc", (req, res) => {
    upFile.uploadFile(); // Executa a função uploadFile apenas quando a rota for acessada
    res.send("Rota gettask executada com sucesso!");
  });
  

  router.get("/driveapp/getdoc", (req, res) => {
    getDoc.getDoc(); // Executa a função uploadFile apenas quando a rota for acessada
    res.send("Rota getdoc executada com sucesso!");
  });
   */

  
  router.get("/driveapp/all", (req, res) => {
    allProcess.iniciar(); // Executa a função uploadFile apenas quando a rota for acessada
    res.send("Rota all executada com sucesso!");
  });
  

  router.get("/", (req, res) => {
    allProcess.iniciar(); // Executa a função uploadFile apenas quando a rota for acessada
    res.send("Rota all executada com sucesso!");
  });
  

  

  module.exports = router;
