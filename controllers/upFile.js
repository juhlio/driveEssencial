const fs = require('fs');
const { google } = require('googleapis');
const { MIMEType } = require('util');

const GOOGLE_API_FOLDER_ID = '16vOUzhC1_4wvMXHrCgOrOl95Lim_8nH1'


async function uploadFile(job){

    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: './googledrive.json',
            scopes: ['https://www.googleapis.com/auth/drive']
        })


        const driveService = google.drive({
            version: 'v3',
            auth: auth
        })

        const fileMetadata = {
            'name': `${job.auvoId}.pdf`,
            'parents': [GOOGLE_API_FOLDER_ID]
        }
        
        const media = {
            mimeType: 'application/pdf',
            body : fs.createReadStream(`./ups/${job.auvoId}.pdf`)
        }

        const response = await driveService.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id'
        })
        
        console.log(response.data.id)
        return response.data.id

    } catch (error) {
        console.log(`Erro ao criar arquivo ${error}`)
    }
}




module.exports = {
    uploadFile: uploadFile,
};
