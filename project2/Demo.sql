create database Demo;
use Demo;

create table `Student`(
	id int primary key auto_increment,
    nameSchool varchar(50),
    district varchar(20),
    codeStudent varchar(30),
    classroom varchar(5),
    fullname varchar(30) not null,
    `date` int,
    `month` int,
    `year` int,
    gender bit,
    birthplace varchar(50),
    ethnic varchar(15),
    permanentResidence varchar(30),
    phoneNumber varchar(10),
    point1 int,
    point2 int,
    point3 int,
    point4 int,
    point5 int,
    sumCore int,
    priorityPoint int,
    totalPoint int,
    note varchar(50)
);
drop table Student;
select * from Student;