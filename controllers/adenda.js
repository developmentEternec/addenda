// Parseo de XML a JSON
var parseString = require('xml2js').parseString;

const ctrl_addAdenda = async (pi_req, pe_res) => {

    const parametro = pi_req.params.po;
    const docsGetInfo = pi_req.files;
    const xml2js = require('xml2js');
    fileModel = [];

    const json =
    {
        'cfdi:Addenda':
        {
            'orderIdentification':
            {
                'referenceIdentification': 'COR4001840'
            }
        }
    }

    let nuevoXml = {

    }

    let xml
    docsGetInfo.forEach((file) => {
        if (file.mimetype === 'text/xml' || file.mimetype === 'application/xml') {
            xml = file.buffer
            parseString(xml, (err, result) => {
                nuevoXml = result           
            })
        } 
    })
    
    console.log(nuevoXml['cfdi:Comprobante'])
    // const builder = new xml2js.Builder();
    // data = builder.buildObject(nuevoXml);
    







}


module.exports = {
    ctrl_addAdenda
};