Box.create(user_id: 1)
Box.create(user_id: 2)
Box.create(user_id: 3)
Box.create(user_id: 4)
Box.create(user_id: 5)


User.create(first_name: 'Jessica', last_name: 'Grebby', email: 'jessica@jessica.com', password:  'jessica123')

User.create(first_name: 'Lukas', last_name: 'Lulu', email: 'lukas@luaks.com', password:  'lukas1234')

User.create(first_name: 'Ricky', last_name: 'Chen', email: 'ricky@ricky.com', password:  'ricky1234')

User.create(first_name: 'Bob', last_name: 'Bobby', email: 'bob@bob.com', password:  'bob123456')

User.create(first_name: 'Jake', last_name: 'Jakey', email: 'jake@jake.com', password:  'jake12345')


annies_mac = Item.create(name: 'Annie\'s Mac \& Cheese', img_name: "/assets/annies_mac.jpg", price: 3.49)
clifbar = Item.create(name: 'Clif Bar Chocolate Chip', img_name: "/assets/clif_bar_choco_chip.jpg", price: 1.99)
chocolate = Item.create(name: 'Equal Exchange Dark Chocolate', img_name: "/assets/equal_exchange_dark_chocolate.jpg", price: 3.99)
itunes = Item.create(name: "iTunes $10 Gift Card", img_name: "/assets/itunes_10_giftcard.jpg", price: 10.00)
meyers = Item.create(name: "Meyer's Candle Basil Scent", img_name: "/assets/meyers_candle.jpg", price: 6.99)
almondbutter = Item.create(name: "Justin's Natural Almond Butter", img_name: "/assets/organic_almond_butter.jpg", price: 11.99)
coffee = Item.create(name: "Peet's House Blend", img_name: "/assets/peets_coffee.jpg", price: 9.99)
siracha = Item.create(name: "Siracha Key Chain", img_name: "/asets/siracha_key_chain.jpg", price: 5.50)
starbucks = Item.create(name: "Starbucks $10 Gift Card", img_name: "/assets/starbucks_gift_card_10.jpg", price: 10.00)
tazo_awake_tea = Item.create(name: "Tazo Awake Tea", img_name: "/assets/tazo_awake_tea.jpg", price: 3.99)