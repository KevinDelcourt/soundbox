const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

var config = {
	user: ENV.FTP_USER+"@kevin-delcourt.net", 
    password: ENV.FTP_PSWD, 
	host: "ftp.online.net",
	port: 21,
	localRoot: __dirname + '/build/',
    include: ['*'],      
	remoteRoot: '/soundbox/',
    deleteRemote: true,              
    forcePasv: true                 
}

ftpDeploy.deploy(config)
	.then(res => console.log('finished:', res))
	.catch(err => console.log(err))