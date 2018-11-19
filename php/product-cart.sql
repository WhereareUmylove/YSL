CREATE DATABASE ysl CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE DATABASE userdata CHARACTER SET utf8 COLLATE utf8_general_ci;
DROP DATABASE ysl;

USE ysl;
CREATE TABLE product(
  productId INT  PRIMARY KEY ,
  productClass VARCHAR(50),
  productTitle VARCHAR(50),
  productImg VARCHAR(50),
  productPrices VARCHAR(50),
  productDescription VARCHAR(200),
  productDescriptionImg VARCHAR(50)
  
) ENGINE=INNODB DEFAULT CHARSET=utf8;


SELECT * FROM product WHERE productClass="banner";

SELECT * FROM product;


DROP TABLE product;


INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(0,"banner","黑色之影","images/YSL05.jpg",120,"尊贵人生，镜像奢华","images/YSL01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(1,"banner","黑色之影","images/YSL01.jpg",120,"尊贵人生，镜像奢华","images/YSL01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(2,"banner","黑色之影","images/YSL02.jpg",120,"尊贵人生，镜像奢华","images/YSL01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(3,"banner","黑色之影","images/YSL03.jpg",120,"尊贵人生，镜像奢华","images/YSL01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(4,"banner","黑色之影","images/YSL04.jpg",120,"尊贵人生，镜像奢华","images/YSL01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(5,"banner","黑色之影","images/YSL05.jpg",120,"尊贵人生，镜像奢华","images/YSL01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(6,"banner","黑色之影","images/YSL01.jpg",120,"尊贵人生，镜像奢华","images/YSL01.jpg");


INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(7,"content","限量4支，演绎金灵唇色","images/one.jpg",120,"黑金诱惑限量「方管」4支装礼盒","images/description01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(8,"content","限量4支，演绎金灵唇色","images/one.jpg",120,"黑金诱惑限量「方管」4支装礼盒","images/description02.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(9,"content","限量4支，演绎金灵唇色","images/one.jpg",120,"黑金诱惑限量「方管」4支装礼盒","images/description03.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(10,"content","限量4支，演绎金灵唇色","images/one.jpg",120,"黑金诱惑限量「方管」4支装礼盒","imagesdescription04.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(11,"content","限量4支，演绎金灵唇色","images/one.jpg",120,"黑金诱惑限量「方管」4支装礼盒","images/description01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(12,"content","限量4支，演绎金灵唇色","images/one.jpg",120,"黑金诱惑限量「方管」4支装礼盒","images/description02.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(13,"content","限量4支，演绎金灵唇色","images/one.jpg",120,"黑金诱惑限量「方管」4支装礼盒","images/description03.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(14,"content","限量4支，演绎金灵唇色","images/one.jpg",120,"黑金诱惑限量「方管」4支装礼盒","images/description04.jpg");


INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(15,"cosmetics","ROUCSG JISAFA IJIHA LJIH","images/cosmetic01.jpg",100,"黑金诱惑限量「方管」4支装礼盒","images/description01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(16,"cosmetics","ROUCSG JISAFA IJIHA LJIH","images/cosmetic02.jpg",200,"黑金诱惑限量「方管」4支装礼盒","images/description02.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(17,"cosmetics","ROUCSG JISAFA IJIHA LJIH","images/cosmetic03.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description03.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(18,"cosmetics","ROUCSG JISAFA IJIHA LJIH","images/cosmetic04.jpg",400,"黑金诱惑限量「方管」4支装礼盒","imagesdescription04.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(19,"cosmetics","ROUCSG JISAFA IJIHA LJIH","images/cosmetic05.jpg",500,"黑金诱惑限量「方管」4支装礼盒","images/description01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(20,"cosmetics","ROUCSG JISAFA IJIHA LJIH","images/cosmetic06.jpg",600,"黑金诱惑限量「方管」4支装礼盒","images/description02.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(21,"cosmetics","ROUCSG JISAFA IJIHA LJIH","images/cosmetic07.jpg",700,"黑金诱惑限量「方管」4支装礼盒","images/description03.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(22,"cosmetics","ROUCSG JISAFA IJIHA LJIH","images/cosmetic08.jpg",800,"黑金诱惑限量「方管」4支装礼盒","images/description04.jpg");


INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(23,"skin","ROUCSG JISAFA IJIHA LJIH","images/skin01.jpg",210,"黑金诱惑限量「方管」4支装礼盒","images/description01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(24,"skin","ROUCSG JISAFA IJIHA LJIH","images/skin02.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description02.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(25,"skin","ROUCSG JISAFA IJIHA LJIH","images/skin03.jpg",210,"黑金诱惑限量「方管」4支装礼盒","images/description03.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(26,"skin","ROUCSG JISAFA IJIHA LJIH","images/skin04.jpg",300,"黑金诱惑限量「方管」4支装礼盒","imagesdescription04.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(27,"skin","ROUCSG JISAFA IJIHA LJIH","images/skin05.jpg",210,"黑金诱惑限量「方管」4支装礼盒","images/description01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(28,"skin","ROUCSG JISAFA IJIHA LJIH","images/skin06.jpg",210,"黑金诱惑限量「方管」4支装礼盒","images/description02.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(29,"skin","ROUCSG JISAFA IJIHA LJIH","images/skin07.jpg",210,"黑金诱惑限量「方管」4支装礼盒","images/description03.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(30,"skin","ROUCSG JISAFA IJIHA LJIH","images/skin08.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description04.jpg");


INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(31,"perfume","ROUCSG JISAFA IJIHA LJIH","images/perfume01.jpg",1280,"黑金诱惑限量「方管」4支装礼盒","images/description01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(32,"perfume","ROUCSG JISAFA IJIHA LJIH","images/perfume02.jpg",1280,"黑金诱惑限量「方管」4支装礼盒","images/description02.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(33,"perfume","ROUCSG JISAFA IJIHA LJIH","images/perfume03.jpg",1280,"黑金诱惑限量「方管」4支装礼盒","images/description03.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(34,"perfume","ROUCSG JISAFA IJIHA LJIH","images/perfume04.jpg",1280,"黑金诱惑限量「方管」4支装礼盒","imagesdescription04.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(35,"perfume","ROUCSG JISAFA IJIHA LJIH","images/perfume05.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(36,"perfume","ROUCSG JISAFA IJIHA LJIH","images/perfume06.jpg",1280,"黑金诱惑限量「方管」4支装礼盒","images/description02.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(37,"perfume","ROUCSG JISAFA IJIHA LJIH","images/perfume07.jpg",1280,"黑金诱惑限量「方管」4支装礼盒","images/description03.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(38,"perfume","ROUCSG JISAFA IJIHA LJIH","images/perfume08.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description04.jpg");


INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(39,"gift","ROUCSG JISAFA IJIHA LJIH","images/gift01.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(40,"gift","ROUCSG JISAFA IJIHA LJIH","images/gift02.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description02.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(41,"gift","ROUCSG JISAFA IJIHA LJIH","images/gift03.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description03.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(42,"gift","ROUCSG JISAFA IJIHA LJIH","images/gift04.jpg",300,"黑金诱惑限量「方管」4支装礼盒","imagesdescription04.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(43,"gift","ROUCSG JISAFA IJIHA LJIH","images/gift05.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description01.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(44,"gift","ROUCSG JISAFA IJIHA LJIH","images/gift06.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description02.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(45,"gift","ROUCSG JISAFA IJIHA LJIH","images/gift07.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description03.jpg");
INSERT INTO product(productId,productClass,productTitle,productImg,productPrices,productDescription,productDescriptionImg) VALUES(46,"gift","ROUCSG JISAFA IJIHA LJIH","images/gift08.jpg",300,"黑金诱惑限量「方管」4支装礼盒","images/description04.jpg");



USE ysl;
CREATE TABLE cart(
  cartId INT PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(50),
  cartImg VARCHAR(50),
  cartDescription VARCHAR(200),
  cartPrice INT,
  cartCount INT
)ENGINE=INNODB DEFAULT CHARSET=utf8;


DROP TABLE cart;


SELECT *FROM cart;


INSERT INTO cart(cartId,useId,cartImg,cartDescription,cartPrice,cartCount) VALUES(1,1,"images/one.jpg","口红",1258,1);
INSERT INTO cart(cartId,useId,cartImg,cartDescription,cartPrice,cartCount) VALUES(2,1,"images/one.jpg","口红",1258,1);
INSERT INTO cart(cartId,useId,cartImg,cartDescription,cartPrice,cartCount) VALUES(3,1,"images/one.jpg","口红",1258,1);
INSERT INTO cart(cartId,useId,cartImg,cartDescription,cartPrice,cartCount) VALUES(4,1,"images/one.jpg","口红",1258,1);
INSERT INTO cart(cartId,useId,cartImg,cartDescription,cartPrice,cartCount) VALUES(5,1,"images/one.jpg","口红",1258,1);
INSERT INTO cart(cartId,useId,cartImg,cartDescription,cartPrice,cartCount) VALUES(6,1,"images/one.jpg","口红",1258,1);



USE ysl;
CREATE TABLE ysl_user(
  useId INT PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(50),
  NAME VARCHAR(50),
  PASSWORD VARCHAR(200),
  sex VARCHAR(50)
)ENGINE=INNODB DEFAULT CHARSET=utf8;

SELECT *FROM ysl_user;

DROP TABLE ysl_user;



