cd build;
find * -type f -exec curl -u ${FTP_USER}\@kevin-delcourt.net:${FTP_PSWD} --ftp-create-dirs -T {} ftp.online.net/soundbox/{} --no-epsv \;