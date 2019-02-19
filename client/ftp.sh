cd ./build;
#find * -type f -exec curl -u ${FTP_USER}\@kevin-delcourt.net:${FTP_PSWD} --ftp-create-dirs -T {} ftp.online.net/soundbox/{} --no-epsv \;
for entry in *.*
do
  echo $entry
  curl -T $entry -u ${FTP_USER}\@kevin-delcourt.net:${FTP_PSWD} --ftp-create-dirs  ftp.online.net/soundbox/$entry --no-epsv \;
done

cd ./static/js;
for entry in *.*
do
  echo $entry
  curl -T $entry -u ${FTP_USER}\@kevin-delcourt.net:${FTP_PSWD} --ftp-create-dirs  ftp.online.net/soundbox/static/js/$entry --no-epsv \;
done

cd ./../media;
for entry in *.*
do
  echo $entry
  curl -T $entry -u ${FTP_USER}\@kevin-delcourt.net:${FTP_PSWD} --ftp-create-dirs  ftp.online.net/soundbox/static/media/$entry --no-epsv \;
done