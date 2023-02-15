drop database cafe_mgmt
create database cafe_mgmt
use cafe_mgmt
--Customer
create table Customer(
cid int primary key,
email varchar(20),
phone_no bigint,
Name varchar(30),
payment_id nvarchar(30))

 
 INSERT INTO Customer  VALUES
(1, 'ram@yahoo.com', 6102315641,'ram',  100),
(2, 'shyam@gmail.com',6102315640 , 'shyam', 101),
(3, 'varma@gmail.com',6102315642 , 'varma', 102),
(4, 'sharma@gmail.com',6102315643 , 'sharma', 103),
(5, 'dharma@gmail.com',6102315644 , 'dharma', 104),
(6, 'karna@gmail.com',6102315645 , 'karna', 105),
(7, 'khan@gmail.com',6102315646 , 'khan', 106),
(8, 'shan@gmail.com',6102315646 , 'shan', 106),
(9, 'jon@gmail.com',6102315646 , 'jon', 106),
(10, 'sin@gmail.com',6102315646 , 'sin', 106);

select * from Customer

--Menu 


create table Menu(
item_id int primary key,
item_name varchar(30),
iprice decimal(10,2),
quantity int,
category varchar(10),
custid int,
foreign key(custid) references Customer(cid));

insert into Menu values
(10,'Latte',100.00,1,100,1),
(11,'Americano',107.00,2,100,1),
(13,'Espresso',109.00,1,204,3),
(14,'Mocha',103.00,4,100,4),
(15,'Cappuccino',104.00,3,100,4),
(16,'Instant coffee',105.00,5,204,5),
(12,'Cortado',106.00,2,204,7),
(17,'Black coffee',108.00,1,100,9);
select * from Menu


/*
--items
create table items(
itemid int primary key,
iname varchar(30),
iprice decimal(10,2),
quantity int,
category varchar(10))
*/


/*
--orderitem
create table orderitem
(
order_id int primary key,
itemid int,
quantity int,
unitprice decimal(10,2),
foreign key(itemid) references items(itemid)
)*/

--orders
create table orders(
oid int primary key,
item_id int,
unitprice decimal(10,2),
custid int,
quantity int,
foreign key(item_id)references Menu(item_id),
foreign key(custid) references customer(cid));

select * from orders


INSERT INTO orders VALUES
(1,10,100.00,1,1),
(2,11,107.00,2,1),
(3,13,109.00,3,3),
(4,14,103.00,4,2),
(5,15,104.00,4,4),
(6,16,105.00,5,5),
(7,12,106.00,7,1),
(8,11,107.00,5,2),
(9,15,108.00,9,3),
(10,13,109.00,10,1);


--Bill
create table Bill(
Bid int primary key,
custid int,
amount decimal(10,2),
foreign key(custid) references customer(cid))

Create trigger trBillInsert
on orders
for insert
as
insert into Bill(Bid,Custid,amount)
select oid,custid,(quantity*unitprice) from orders;

select * from Bill


--feedback
create table feedback(
fid int primary key,
custid int,
irating int,
foreign key(custid) references customer(cid))

 
 INSERT INTO Customer  VALUES
(1, 'ram@yahoo.com', 6102315641,'ram',  100),
(2, 'shyam@gmail.com',6102315640 , 'shyam', 101),
(3, 'varma@gmail.com',6102315642 , 'varma', 102),
(4, 'sharma@gmail.com',6102315643 , 'sharma', 103),
(5, 'dharma@gmail.com',6102315644 , 'dharma', 104),
(6, 'karna@gmail.com',6102315645 , 'karna', 105),
(7, 'khan@gmail.com',6102315646 , 'khan', 106),
(8, 'shan@gmail.com',6102315646 , 'shan', 106),
(9, 'jon@gmail.com',6102315646 , 'jon', 106),
(10, 'sin@gmail.com',6102315646 , 'sin', 106);

select * from Customer



 


