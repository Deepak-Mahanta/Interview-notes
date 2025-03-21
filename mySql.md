#  MySql Notes📚

## What is Database?
Database is a  collection of data stored in a format that can easily be accessed.

## Database operations.
```sql
1.INSERT  
2.SELECT  
3.UPDATE  
4.DELETE
```

## What is sql?
SQL is a standard language for database creation and manipulation.
Database me operation SQL(Structured Query Language) ke througe perform kia jata hai.

**NOTE - SQL Query are not case sencitive. But Database name are casesencitiv.**

## What is DBMS (Database Management System)?
DBMS is a software or tools that we use to manage our data.

## Type of database ?
```sql
1. Relational Databases (RDBMS)
Definition: Store data in structured tables with rows and columns. Each table represents an entity, and tables can be related to one another using foreign keys.

Query Language: Use SQL (Structured Query Language) for querying and managing data.

Examples: MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server.

2. NoSQL Databases
NoSQL is a type of database management system (DBMS) that is designed to handle and store large volumes of unstructured and semi-structured data.
```

## Data TYPES IN Database
A database data type refers to the format of data storage that can hold a distinct type or range of values.

## Create database using sql query 
```sql
CREATE DATABASE mydb;
```

## Delete database using sql query   
```sql
DROP DATABASE mydb;
```

## Create a table
```sql
 CREATE TABLE students ( 
    name varchar(255), 
    father_name varchar(255),
    city varchar(50), 
    date_of birth date 
    );
``` 



## Change table name 
```sql 
RENAME TABLE students TO class_student;
```

## Delete table 
```sql 
DROP TABLE class_student;
```

## ALTER QUERY (How to do changes in a table) 

### Add a new column in a existing table 
```sql 
ALTER TABLE students ADD class_name varchar(255);

//It add a new col (class_name) butoon of table
```

### Delete a column in a existing table   
```sql 
ALTER TABLE students  DROP COLUMN class_name;

// class_name wala col ko delete kardega
```

### Modification on existing column data
```sql
ALTER TABLE students MODIFY COLUMN city varchar(255);

//col ki datatype ko change kar sekte hain
```

### Change column position
```sql 
ALTER TABLE students 
MODIFY COLUMN date_of_birth date AFTER father_name;

```

### Add a colunm at a specific location
```sql 
ALTER TABLE students
ADD COLUMN mother_name varchar(290) AFTER father_name; 

```


## 2. Table -2 (INSERT QUERY)

### Table creation
```sql 
CREATE TABLE students ( 
    student_id int,
    student_name varchar(255),
    father_name varchar(255),
    mark float(10,2),  // 10 digit befor decimal, 2 digit after decimal.
    date_of_barth date
    
);
```

### Enter value in students  table
```sql
INSERT INTO students (student_id, student_name,father_name,mark,date_of_barth)
VALUES (1,"Deepak Kumar","Makunda Kumar", 89.33, "2003-12-30");

// D.O.B - format (yyyy-mm-dd) should be like this!
```

# 💡 you can write column name in any sequence but value should be same as sequence

### How to creat multiple entries
```sql 
INSERT INTO students 
 (students_id, student_name, father_name) 
  VALUES 
   (3, "John", "Smith"),
   (4, "Joy", "Don")
   ;

// coma separet karke multiple entries de sekte hain, blank field me NULL value aayaga.
```

## 3- SELECT QUERY 

### // SELECT QUERY ka kam hota hai ki database se data ko leke aana and display karna.

### How to select all data from Table
```sql 
SELECT * FROM students
```
### How to select specific data from Table
```sql 
SELECT student_name, father_name FROM students
```
### How to select specific data from Table using relation (student_id, D.O.B)
```sql 
SELECT * FROM students WHERE student_id = 4
or
SELECT * FROM students WHERE mark >= 50
or
SELECT student_name FROM students WHERE mark >= 70

// Ek hi col aaayage jisme sirf student_name hi hoga.
```

## 4- AND,OR,NOT OPERATORS (LOGICAL OPERATORS)
//TODO ADD TABLE 3 DATA

### AND QUERY (2 yaa 2 se jada condition hogata )
```sql  
SELECT * FROM students WHERE city_name = "Delhi" AND marks > 60;**

// Aagar condition match nahi hoga tab v query execut hoga but **0 row affected dekhayaga💡**
```
### OR QUERY ( ea OR wo dono ne koeisa vi match hona chahiye )
```sql  
SELECT FROM students WHERE city_name = "jaipur" OR city_name = 'mumbai'
```
### OR & AND QUERY ( ea OR wo dono ne koeisa vi match hona chahiye and ek campolsary match hona chahihe.)
```sql  
SELECT FROM students WHERE city_name = 'Jaipur' OR city_name = 'Mumbai' AND marks > 60
```
### NOT OPERATOR QUERY (sara stude data aaye bus me Delhi ka dekhn Nhi chahata hun. exclude kardo use )

## 5-UPDATE QUERY  (existing data me kuch changes karna)

```sql 
ex-1
UPDATE students SET student_name "Rakesh Sharma", father_name = "Manoj Sharma" WHERE student_id = 2

ex-2
UPDATE students SET marks 70 WHERE student_id = 3 AND city_name = "Delhi"
```

## 5- DELETE QUERY⚠️
```sql
EX-1 
DELETE FROM students WHERE student_id=1

EX-2
DELETE FROM students WHERE city_name = 'BIKANER' OR city_name = 'Mumbai'
```

## 6- MySQL CONSTRAINTS (simple matlab hai ki Kuch extra rule col me apply karna)

* ### PRIMARY KEY (UNIQUE )
```sql
CREATE TABLE results ( 
    result id INT PRIMARY KEY, 
    marks float(5,2) 
);

//PRIMARY KEY unique hogi diplicate nahi hogi and NULL nahi higi💡

```

* ### How to add PRIMARY KEY in an existing col
```sql 
ALTER TABLE students 
ADD CONSTRAINT 
PRIMARY KEY (student_id);
```

* ### Auto increment 

### //PRIMARY KEY ko hum barbar value nahi dete hain uskeliye hum use auto increment me daldete hain.
```sql 
CREATE TABLE payments ( 
    payment_id INT PRIMARY KEY AUTO_INCREMEN
    amount decimal(10,2)
    );

INSERT INTO payments (amount) VALUES (2000); // It autometically add payment_id .
```

* ### NULL AND NOT NULL (ass col jo ki null nahi raha sekta )
```sql
CREATE TABLE employees ( 
emp_id int PRIMARY KEY AUTO INCREMENT, 
first_name varchar(255) NOT NULL, 
last_name varchar(255) NULL, 
salary float(10,2) NOT NULL); 

// Besically database me **None** lekha hoga jo vi field **NOT NULL** hoga
```

* ### How to add NOT NULL in a existing col
```sql 
ALTER TABLE payments 
MODIFY amount float(10,2) NOT NULL;
```

* ### DEFAULT CONSTRAINT 
```sql 
CREATE TABLE users (
     user_id int PRIMARY KEY AUTO INCREMENT,
      full_name varchar(255) NOT NULL,
       status enum('active', 'inactive', 'blocked') DEFAULT 'inactive'
    );

    EX-1 INSERT INTO users (full_name, status) VALUES("Deepak")
    EX-2 INSERT INTO users (full_name, status) VALUES("Kumar", "active")
```

* ### FOREIGN KEY ( fk ) (DO table ke bich me relation establise karne keliye use hota hai )
```sql 
CREATE TABLE orders ( 
order_id int PRIMARY KEY AUTO_INCREMENT,
order_number int NOT NULL,
total_amount float(10,2),
user_id int,
CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCE users (user_id)
);

EX- 1
INSERT INTO orders (order_number, total amount, user_id)
VALUES (3434, 500, 2);
```

* ### Delete a FOREIGN KEY ⚠️
```sql 
ALTER TABLE orders 
DROP FOREIGN KEY fk_user_id
```

* ### Add  FOREIGN KEY CONSTRAINT in an existing table
```sql 
ALTER TABLE payments 
ADD COLUMN std id int,
add CONSTRAINT fk_std_id FOREIGN KEY (std_id) REFERENCES students (student_id);
```

## 7- JOINS (Inner, left, right)

### // multiple tables ko combine karke data provide karta hai, FOREIGN KEY and PRIMARY KEY ka relation banta hai or dona  ka data aataha

* ### display all data
```sql 
SELECT * FROM payments INNER JOIN students 
ON payments.std_id = students.student_id;
```

* ### display specific data
```sql 
SELECT payment_id, amount, std_id, student_name
 FROM payments INNER JOIN students
 ON payments.std_id = students.student_id;
```

* ### how to avoid duplicate value data
```sql 
SELECT payments.payment_id, payments.amount, payments.std_id, students.student_name
 FROM payments INNER JOIN students
 ON payments.std_id = students.student_id;
```

## Left join left table ka data lata hai, right join right table ka data latha hai, Inner join table ke bich me relation build karta hai.

```sql 
LEFT JOIN -(payments TABLE)

SELECT payments.payment_id, payments.amount, payments.std_id, students.student_name
 FROM payments LEFT JOIN students
 ON payments.std_id = students.student_id;
```

```sql 
RIGHT JOIN -(students TABLE)

SELECT payments.payment_id, payments.amount, payments.std_id, students.student_name
 FROM payments RIGHT JOIN students
 ON payments.std_id = students.student_id;
```

## 8- ALIASES (Temperary name dene keliye TABLE & COL ko)

```sql 
EX -1 col
SELECT full_name as user_name, user_id as uid from users ;

EX -2 tables
SELECT full_name as user_name, user_id as uid from users as u;
```

## 9- IN & BETWEEN OPERATOR
TODO - Create employees table 

```sql 
SELECT FROM employees WHERE department IN ('IT', 'HR')

// Ea IT & HR department data ko display kardega. 
Same kam hum AND OR se v kar sekte the but ea easy hai .
```

```sql 
SELECT FROM employees WHERE department NOT IN ('IT', 'HR')

// Ea IT & HR department data ko choad ke other department ko display kardega.
```

```sql 
SELECT FROM `employees` WHERE salary BETWEEN 25000 AND 27000

// Ea range ke ander data display karke dega.
```

## 10- FUNCTION (MIN, MAX, COUNT, AVG, SUM)

```sql 
SELECT MIN (amount) from payments
```

```sql 
SELECT MAX (amount), payment_id from payments;
```

```sql 
SELECT COUNT (payment_id) from payments;
```

```sql 
SELECT AVG (amount) from payments;
```

```sql 
SELECT SUM (amount) from payments;
```

## 11- WILDCARD (Filter karne keliye use hota hai)

```sql 
SELECT FROM employees WHERE first_name LIKE '%a%';

// Jinka first_name me *a* aata hai.

SELECT FROM employees WHERE first_name LIKE 'a%';

// Jinka first_name *a* se start hota hai💡

SELECT FROM employees WHERE first_name LIKE '%n';

// Jinka first_name end hota hai *n* wahhi data milega.

SELECT FROM `employees` WHERE first_name LIKE '_a%' OR first_name LIKE '_o%'

// first_name ka second letter *a* ho yafir *o* ho 
```

## 12- ORDER BY - KEYWORD (asending or decendaing order || for data shorting based  on col)

```sql 
SELECT FROM `employees` order by emp_id DESC;

SELECT FROM `employees` order by emp_id ASE;

SELECT FROM `employees` order by first_name DESC;

SELECT FROM `employees` order by first_name ASE;

SELECT * FROM `employees` WHERE salary > 25000 order by first name DESC;

```

## 13- GROUP BY (DATA GROUPING)

```sql
SELECT COUNT(student_id) as total_students, city_name FROM students GROUP BY city_name;
```

## 13- LIMIT (Ek bar me kitna data return kare ga)

```sql
SELECT * FROM employees LIMIT 2;

SELECT * FROM employees LIMIT 1,2;
// 1 row skip kardega uske bad 2 row data layega

SELECT * FROM employees LIMIT 2,3;
// first 2 row skip kardega uske bad 3 row data layega

SELECT * FROM employees LIMIT 3,2;
// first 3 row skip kardega uske bad 2 row data layega

//or
SELECT * FROM employees ORDER BY emp_id LIMIT 2;

//💡LIMIT SABSE LAST ME RAHEGA.
```

## 14- SUB-QUERY (Ek query ke andar dusri query ko use karna)

```sql
query-1 
SELECT first_name, hourly_pay from employees 

query-2 
SELECT AVG(hourly_pay) FROM employees I

SUB query -
SELECT first_name, hourly_pay, (SELECT AVG(hourly_pay) FROM employees) as avg_pay from employees


EX -2 
SELECT student name from students WHERE student id IN (SELECT DISTINCT (std id) from payments WHERE std id IS NOT NULL)SELECT DISTINCT (std_id) from payments WHERE std id IS NOT NULL

💡DISTINCT KEYWORD remove duplicate value 
```

## 15- UNION OPERATOR (Do se jada select query ko combine karne keliye use hota hai)

TODO - CREATE city table

```sql 
SELECT city_name FROM students 
UNION 
SELECT city_name FROM employees WHERE city_name is not null
```
## 16 - TRUNCATE TABLE (sara ka sara data delete table RAHEGA.)
```sql
TRUNCATE orders;

```
TODO see difference TRUNCATE and normal delete


// TODO 1H 27 minuts - ok do it quickly