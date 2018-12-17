DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    price DECIMAL(10,2) NOT NULL, 
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shoes", "clothing", 65.99, 100), ("socks", "clothing", 5.50, 10), ("shirts", "clothing", 29.99, 80), ("couch", "furniture", 899.99, 8), ("chair", "furniture", 125.50, 12), ("bed", "furniture", 999.99, 15), ("laptop", "electronics", 1299.99, 50), ("charger", "electronics", 22.50, 200), ("monitor", "electronics", 149.99, 14), ("headphones", "electronics", 89.99, 21);

