DROP TABLE IF EXISTS sounds,pass_count;

CREATE TABLE sounds (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  file MEDIUMBLOB NOT NULL,
  name varchar(11) NOT NULL
);

CREATE TABLE pass_count(
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  count tinyint,
  date date NOT NULL
);

