INSERT INTO USERS (id, username, first_name, last_name, email)
VALUES 
  (1, 'bmoy', 'Bastien', 'Moy', 'moy.bastien@gmail.com'),
  (2, 'zqiu', 'Zhihao', 'Qiu', 'jojola.sh@gmail.com');

INSERT INTO CATEGORIES (id, category_name)
VALUES
  (1, 'Flowers'),
  (2, 'Jewellery'),
  (3, 'Other')

INSERT INTO PRODUCTS (id, item_name, description, price_cents, category)
(1, 'Roses', 'Delightful bouquet of 6 roses for a special occasion', 5000, 1),
(2, 'Tulips', 'Delightful bouquet of 6 tulips for a special occasion', 4000, 1),
(3, 'Peonies', 'Delightful bouquet of 6 peonies for a special occasion', 4500, 1),
(4, 'Heart Pendant in Silver', 'Sterling silver necklace with a heart pendant', 20000, 2),
(5, 'Cross Pendant in Gold', 'Gold necklace with a cross pendant', 17500, 2),
(6, 'Mystery Chocolate Box', 'Chocolate Box includes a wide variety of sweets for your significant other', 3500, 3);