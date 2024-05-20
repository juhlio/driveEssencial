const getDoc = require("../controllers/getDoc");
const upFile = require("../controllers/upFile");
const deleteDoc = require("../controllers/deleteDoc");
const tasks = require("../dbfiles/tasks.js");
const clients = require("../dbfiles/clients.js");
const { Op } = require("sequelize");
const axios = require("axios");

async function iniciar() {
  let endpoint = `https://painel.essencialenergia.com.br/api/tasksdodia`;

  const config = {
    method: "GET",
    url: endpoint,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios(config);
    let jobs = response.data;

    for (let job of jobs) {
      let dadosGrupos = job.groups;

      if (dadosGrupos !== null && dadosGrupos.includes("111754")) {
        console.log("Faz parte do carrefour");

        console.log(
          `Iniciando o robo que busca o documento no link ${job.osurl}`
        );
        //await getDoc.getDoc(job);
        console.log("Iniciando o upload no google Drive");
        //await upFile.uploadFile(job);
        console.log("Iniciando a exclusão do arquivo");
        //await deleteDoc.deleteDoc(job);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  iniciar: iniciar,
};
