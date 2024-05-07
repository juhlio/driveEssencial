const getDoc = require("../controllers/getDoc");
const upFile = require("../controllers/upFile");
const deleteDoc = require("../controllers/deleteDoc");
const tasks = require("../dbfiles/tasks.js");
const clients = require("../dbfiles/clients.js");
const { Op } = require("sequelize");

async function iniciar() {
  const today = new Date();

  const jobs = await tasks.findAll({
    where: {
    /*   taskDate: {
        [Op.gte]: today.setHours(0, 0, 0),
        [Op.lte]: today.setHours(23, 59, 59),
      }, */
    },
  });

  for (let job of jobs) {
    console.log(`Iniciando o robo que busca o documento no link ${job.osurl}`);
    await getDoc.getDoc(job);
    console.log("Iniciando o upload no google Drive");
    await upFile.uploadFile(job);
    console.log("Iniciando a exclusão do arquivo");
    await deleteDoc.deleteDoc(job);
  }

  /*  console.log(`Iniciando o robo que busca o documento no link ${job.osurl}`);
    await getDoc.getDoc(job);
    console.log("Iniciando o upload no google Drive");
    await upFile.uploadFile(job);
    console.log("Iniciando a exclusão do arquivo");
    await deleteDoc.deleteDoc(job); */

  /*
    console.log("Iniciando o upload no google Drive")
    await upFile.uploadFile()
    console.log("Iniciando a exclusão do arquivo")
    await deleteDoc.deleteDoc()
 */
}

module.exports = {
  iniciar: iniciar,
};
