const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

var config = {
	user: process.env.FTP_USER+"@kevin-delcourt.net", 
    password: process.env.FTP_PSWD, 
	host: "ftp.online.net",
	localRoot: __dirname + '/build/',
    include: ['*'],      
	remoteRoot: '/soundbox/',
    deleteRemote: true,              
    forcePasv: true                 
}

ftpDeploy.deploy(config)
	.then(res => console.log('finished:', res))
	.catch(err => console.log(err))