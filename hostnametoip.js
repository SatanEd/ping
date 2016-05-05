var dns = require('dns');

var regexp = new RegExp('(?:http\:\/\/){0,1}(.*)(?:\/){0,1}', 'i');

if (process.argv[2] !== '' && process.argv[2] !== undefined) {
    var str = String(process.argv[2]);
    var hostName = regexp.exec(str);

    dns.lookup(hostName[1], function (err, addr, family) {
        console.log(addr);
    });
} else {
    console.log('Hostname can\'t be empty!');
}