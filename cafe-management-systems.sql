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

--Menu
create table Menu(
item_id int primary key,
item_name varchar(30),
iprice decimal(10,2),
quantity int,
category varchar(10),
custid int,
foreign key(custid) references Customer(cid));

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

--Bill
create table Bill(
Bid int primary key,
custid int,
amount decimal(10,2),
foreign key(custid) references customer(cid))

--feedback
create table feedback(
fid int primary key,
custid int,
irating int,
foreign key(custid) references customer(cid))


 


