CREATE DATABASE teacher_timetable_db;

USE teacher_timetable_db; 

CREATE TABLE admins(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR (100),
    pw VARCHAR (255),
    email VARCHAR (255),
    phone_number INT(11),
    name VARCHAR (255),
    active BOOLEAN DEFAULT 1
);

CREATE TABLE student(
  	id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR (100),
    pw VARCHAR (255),
    email VARCHAR (255),
    phone_number INT(11),
    name VARCHAR (255),
    active BOOLEAN DEFAULT 1
);

CREATE TABLE teacher(
  	id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR (100),
    pw VARCHAR (255),
    email VARCHAR (255),
    phone_number INT(11),
    name VARCHAR (255),
    active BOOLEAN DEFAULT 1
);

CREATE TABLE student_teacher(
    id_teacher INT(6) REFERENCES teacher (id),
    id_student INT(6) REFERENCES student (id)

);

CREATE TABLE class_lost(
    id_teacher INT(6) REFERENCES student_teacher (id_teacher),
    id_student INT(6) REFERENCES student_teacher (id_student),
    class_lost_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);