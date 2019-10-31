const express = require('express');
const path = require('path');

const app = new express();
app.use(express.static(__dirname + '/dist/SFAdvancedTools'));
app.listen(process.env.PORT || 8080);

//-- PathlocationStrategy --//
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/SFAdvancedTools/index.html'));
});

console.log('Console Listening!!');
