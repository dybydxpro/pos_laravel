CREATE DATABASE pos_aryalabs;

USE pos_aryalabs;

SHOW TABLES;

select * from users;
select * from items;
select * from stocks;
select * from good_receiving_notes;
select * from carts;
select * from holesale_carts;
select * from sales;
select * from hole_sales;

INSERT INTO users (name, userName, password, type, created_at, updated_at) VALUES ( "Tharindu", "TharinduD", "123", "Admin", Null, Null);
INSERT INTO users (name, userName, password, type, created_at, updated_at) VALUES ( "Sandun", "Sandun", "123", "Cashier", Null, Null);

INSERT INTO items (item, unit, createrID, created_at, updated_at) VALUES ( "Soap 100g", "Pcs", 1, Null, Null);
INSERT INTO items (item, unit, createrID, created_at, updated_at) VALUES ( "Cement 50kg", "Bags", 1, Null, Null);

INSERT INTO stocks (itemID, qty, holesale_price, holesaleretail_price, retail_price, stockCreaterID, created_at, updated_at) VALUES ( 1, 10, 50.25, 55.25, 65.00, 1, Null, Null);
INSERT INTO stocks (itemID, qty, holesale_price, holesaleretail_price, retail_price, stockCreaterID, created_at, updated_at) VALUES ( 1, 25, 55.25, 60.25, 75.00, 1, Null, Null);
INSERT INTO stocks (itemID, qty, holesale_price, holesaleretail_price, retail_price, stockCreaterID, created_at, updated_at) VALUES ( 2, 500, 750, 800, 900, 1, Null, Null);

INSERT INTO good_receiving_notes (grnDate, invoiceNo, invoiceDate, supplier, itemID, stockID, grnQty, payType, bulckPrice, actualBulkPrice, grnRecorderID, dueDate, remarks, created_at, updated_at) VALUES 
( '2022-02-28', 'INV00156', '2022-02-28', 'JJ Mills', '1', '1', '20', 'Cash', 1005, 1000, 1, Null, Null, Null, Null),
( '2022-02-28', 'SI-255', '2022-02-28', 'Shantha Stors', '2', '2', '500', 'Credit', 375000, 375000, 1, '2022-03-28', 'Payment via Peoples Bank', Null, Null);

INSERT INTO carts (itemID, stockID, cartQty, cartPrice, sellPrice, userID) VALUES 
(1, 2, 5, 375, 375, 1), (1, 1, 5, 325, 325, 1);

INSERT INTO holesale_carts (itemID, stockID, cartQty, cartPrice, sellPrice, userID) VALUES 
(1, 2, 5, 301.25, 301.25, 1), (1, 1, 5, 276.25, 276.25, 1);

UPDATE users SET type = "Cashier" WHERE id=2;
UPDATE stocks SET itemID = 2 WHERE stockID=4;
UPDATE good_receiving_notes SET itemID = 2 WHERE grnID=2;
UPDATE good_receiving_notes SET stockID = 3 WHERE grnID=2;

DELETE FROM sales WHERE salesID = 1;