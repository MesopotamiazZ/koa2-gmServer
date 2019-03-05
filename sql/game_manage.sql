DROP TABLE IF EXISTS game_user;
CREATE TABLE game_user (
   id varchar(32) NOT NULL,
   username varchar(100) not null,
   password varchar(100) not null,
   createtime DATETIME NOT NULL,
   avatar varchar(100),
   phone varchar(20),
   state int,
   PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO game_user VALUES(0, 'admin', 'admin', NOW(), '', '', 0);