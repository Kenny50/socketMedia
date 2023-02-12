const fs = require('fs');
const pairImageRouteHost = require('../route/pair_image_route/pair_image_route');
const singleImageWithDetailRouteHost = require('../route/single_image_with_detail_route/single_image_with_detail_route');
const imageWithListDataRouteHost = require('../route/image_with_list_data.js/imageWithListData');

function FolderWatcher(path){
    this.path = path,
    this.onNewFileAdded = function(fun){
        console.log(path)
        fs.watch(path, (eventType, filename) => {
          if (eventType === 'rename') {
            const filePath = path.concat('/',filename)
            fs.stat(filePath, (err, stats) => {
                if (!err && stats.isFile()) {
                    console.log(`A new file was added: ${filePath}`);
                    fun(filePath);
                }
            });
          }
        });
    }
}

// this function might throw error while directory does not exist
function installFolderWatcher(path){
    let folders = [
        { folderPath: '/pair', callback: pairImageRouteHost.boradcasting}, 
        { folderPath: '/detail', callback: singleImageWithDetailRouteHost.boradcasting}, 
        { folderPath: '/list', callback: imageWithListDataRouteHost.boradcasting}, 
    ];
    folders.forEach(({folderPath, callback} ) => {
        let fw = new FolderWatcher(path.concat('/assest', folderPath));
        fw.onNewFileAdded((filename) => {
            callback(filename);
        });
    })
    
}

module.exports = installFolderWatcher;