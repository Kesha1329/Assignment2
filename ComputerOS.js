var os = require('os');
console.log("CPU Architecture: " + os.arch());
console.log("Free Memory: " + os.freemem() / (1024 * 1024 * 1024));
console.log("Total Memory: " + os.totalmem() / (1024 * 1024 * 1024));
console.log("Platform: " + os.platform());
console.log("About Current User: " + os.userInfo());