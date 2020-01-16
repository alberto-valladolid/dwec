CREATE DATABASE teacher_timetable_db;

USE teacher_timetable_db; 

CREATE TABLE admin(
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

/*Los horarios que verá el usuario se sacarán de esta tabla*/
CREATE TABLE student_teacher(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_teacher INT(6) NOT NULL REFERENCES teacher (id),
    id_student INT(6) NOT NULL REFERENCES student (id)
);

CREATE TABLE absence(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_teacher INT(6) REFERENCES student_teacher (id_teacher),
    id_student INT(6) REFERENCES student_teacher (id_student),
    absence_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*Para almacenar los días que trabaja el profesor*/
CREATE TABLE days_of_the_week(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_teacher INT(6) REFERENCES teacher (id),
    name VARCHAR (255)
);

/*Para prefijar las clases que puede dar el profesor*/
CREATE TABLE available_class(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_day_of_the_week INT(6) REFERENCES days_of_the_week (id),
    description VARCHAR (255),
    class_order INT(3),
    class_timestamp TIMESTAMP
);


/*Para almacenar las cases que ya han sido reservadas*/
CREATE TABLE requested_class(
    id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_available_class INT(6) REFERENCES available_class (id),    
    repeat_timestamp TIMESTAMP,
    timestamp TIMESTAMP
);
