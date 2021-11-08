CREATE SCHEMA codehouse;
CREATE USER usercode@localhost IDENTIFIED BY "codehouse";GRANT SELECT,
SHOW VIEW ON codehouse.* TO usercode@localhost identified by 'coderhouse';
FLUSH PRIVILEGES,

