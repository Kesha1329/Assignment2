var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Free Memory: "+os.freemem());
console.log("Total Memory: "+os.totalmem());