const fs = require('fs');

async function deleteDoc(job){

    const filePath = `./ups/${job.auvoId}.pdf`;

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Erro ao excluir o arquivo:', err);
      } else {
        console.log('Arquivo excluído com sucesso!');
      }
    });
    

}


module.exports = {
    deleteDoc : deleteDoc
}

