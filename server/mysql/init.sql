DROP TABLE IF EXISTS sounds, playlist, playlist_sounds, pass_count;

CREATE TABLE sounds (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  file MEDIUMBLOB NOT NULL,
  name varchar(11) NOT NULL
);

CREATE TABLE playlist (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(11) NOT NULL
);

CREATE TABLE playlist_sounds ( 
  id_sound INT(11) NOT NULL , 
  id_playlist INT(11) NOT NULL , 
  PRIMARY KEY (id_sound, id_playlist)
  );

ALTER TABLE playlist_sounds ADD CONSTRAINT fk_sound FOREIGN KEY (id_sound) REFERENCES sounds(id) ON DELETE CASCADE ON UPDATE CASCADE; ALTER TABLE playlist_sounds ADD CONSTRAINT fk_playlist FOREIGN KEY (id_playlist) REFERENCES playlist(id) ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE pass_count(
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  count tinyint,
  date date NOT NULL
);

