create table Dept
(
    deptId int auto_increment primary key,
    name varchar(255),
    location varchar(255),
    createdAt datetime,
    updatedAt datetime
);

create table Employee
(
    empId int auto_increment primary key,
    name varchar(255),
    salary float,
    deptId int,
    hiredate datetime,
    job varchar(255),
    createdAt datetime,
    updatedAt datetime
    constraint fk_Deptno foreign key (deptId) references Dept (deptId)
);


insert into Dept (name, location,createdAt,updatedAt) values('ACCOUNTING', 'NEW YORK',now(),now());
insert into Dept (name, location,createdAt,updatedAt) values('RESEARCH', 'NEW YORK',now(),now());
insert into Dept (name, location,createdAt,updatedAt) values('SALES', 'CHICAGO',now(),now());
insert into Dept (name, location,createdAt,updatedAt) Values('OPERATIONS', 'BOSTON',now(),now());

insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('KING',5789,1,'1980-12-05','PRESIDENT',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('BLAKE',4890,2,'1985-07-03','MANAGER',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('CLARK',3800,1,'1987-05-15','MANAGER',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('JONES',5900,2,'1989-02-25','MANAGER',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('SCOTT',6600,2,'1989-02-25','ANALYST',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('FORD',3500,2,'1989-02-25','ANALYST',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('ALLEN',1500,3,'1989-01-09','SALESMAN',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('WARD',1589,3,'1989-05-08','SALESMAN',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('MARTIN',1469,3,'1989-07-06','SALESMAN',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('TURNER',1459,3,'1989-02-05','SALESMAN',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('ADAMS',1459,1,'1989-09-15','CLERK',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('JAMES',1059,1,'1989-07-25','CLERK',now(),now());
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('MILLER',3451,1,'1989-01-03','CLERK',now(),now());  
insert into Employee(name,salary,empDeptId,hiredate,job,createdAt,updatedAt) values('MILLER',1457,1,'1989-05-29','CLERK',now(),now());  


-- group
INSERT INTO AppGroup (name, `desc`, admin, createdAt, updatedAt) 
VALUES ('Account', 'Account', 0, '2023-04-24 12:00:00', '2023-04-24 12:00:00');

INSERT INTO AppGroup (name,`desc`, admin, createdAt, updatedAt) 
VALUES ('HR', 'HR', 0, '2023-04-24 12:10:00', '2023-04-24 12:10:00');

INSERT INTO AppGroup (name,`desc`, admin, createdAt, updatedAt) 
VALUES ('Operation', 'Operation', 0, '2023-04-24 12:20:00', '2023-04-24 12:20:00');

INSERT INTO AppGroup (name,`desc`, admin, createdAt, updatedAt) 
VALUES ('Sales', 'Sales', 0, '2023-04-24 12:30:00', '2023-04-24 12:30:00');

INSERT INTO AppGroup (name,`desc`, admin, createdAt, updatedAt) 
VALUES ('Research', 'Research', 0, '2023-04-24 12:40:00', '2023-04-24 12:40:00');

INSERT INTO AppGroup (name,`desc`, admin, createdAt, updatedAt) 
VALUES ('Admin', 'Admin', 0, '2023-04-24 12:40:00', '2023-04-24 12:40:00');

--group user

INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(6,1,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(6,2,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(6,3,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(6,4,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(6,5,now(),now());

INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(1,6,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(1,7,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(1,8,now(),now());

INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(2,9,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(2,10,now(),now());


INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(3,11,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(3,12,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(3,13,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(3,14,now(),now());

INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(4,15,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(4,16,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(4,17,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(4,18,now(),now());

INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(5,19,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(5,20,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(5,21,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(5,22,now(),now());


INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(3,23,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(3,24,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(3,25,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(3,26,now(),now());

INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(2,27,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(2,28,now(),now());
INSERT into GroupUser(GroupId,UserId, createdAt, updatedAt) values(2,29,now(),now());