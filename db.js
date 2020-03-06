const fs = require('fs');

const readJSON = (file)=> {
  return new Promise((resolve, reject)=> {
    fs.readFile(file, (err, data)=> {
      if(data){
        try {
          resolve(JSON.parse(data.toString()));
        }
        catch(ex){
          reject(ex);
        }
      }
      else {
        reject(err);
      }
    });
  });
};

const addProduct = (newProduct) => {
    return readFile('./products.json')
    .then( data => {
        const products = bodyParser.json()
    })
}

module.exports = {
  readJSON
};
