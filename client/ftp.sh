cd src/components/atoms;

find *.* -type f -exec curl --ftp-create-dirs -T {} ftp://${FTP_USER}%40kevin-delcourt.net:${FTP_PSWD}@ftp.online.net/www/{} --no-epsv -v -S --speed_limit 100 --speed-time 10 \;

#cd build;
#for entry in *.*
#do
#  echo $entry
#  curl -T $entry -u ${FTP_USER}\@kevin-delcourt.net:${FTP_PSWD} --ftp-create-dirs  ftp.online.net/soundbox/$entry --no-epsv -S -v \;
#done

#cd ./static/js;
#for entry in *.*
#do
#  echo $entry
#  curl -T $entry -u ${FTP_USER}\@kevin-delcourt.net:${FTP_PSWD} --ftp-create-dirs  ftp.online.net/soundbox/static/js/$entry -S \;
#done

#cd ./../media;
#for entry in *.*
#do
#  echo $entry
#  curl -T $entry -u ${FTP_USER}\@kevin-delcourt.net:${FTP_PSWD} --ftp-create-dirs  ftp.online.net/soundbox/static/media/$entry -S \;
#done