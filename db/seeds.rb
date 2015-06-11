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


annies_mac = Item.create(name: 'Annie\'s Mac & Cheese', img_name: "/assets/annies_mac.jpg", price: 3.49, description: "Annie’s Shells & White Cheddar is a totally delicious product that is made with real white cheddar cheese and organic shell shaped pasta.")
clifbar = Item.create(name: 'Clif Bar Chocolate Chip', img_name: "/assets/clif_bar_choco_chip.jpg", price: 1.99, description: "Clif Bar Chocolate Chip Energy Bar. Made with organic oats & soybeans. Nutrition for sustained Energy.")
chocolate = Item.create(name: 'Equal Exchange Dark Chocolate', img_name: "/assets/equal_exchange_dark_chocolate.jpg", price: 3.99, description: "Equal Exchange chocolates and cocoas are crafted using only the purest ingredients, grown with care by small farmer co-ops. We source from these small farmer organizations because we believe they are the heart and soul of the Fair Trade movement.")
itunes = Item.create(name: "iTunes $10 Gift Card", img_name: "/assets/itunes_10_giftcard.jpg", price: 10.00, description: "The iTunes Store makes is easy to give songs, albums, plylists, audiobooks, music video, TV shows, games, and movies. Or you can give iTune Gift Cards and Gift Certificates and let your frineds choose for themselves.")
meyers = Item.create(name: "Meyer's Candle Basil Scent", img_name: "/assets/meyers_candle.jpg", price: 6.99, description: "Sometimes it feels good just to have a nice candle giving off some extra fragrance while you're busy with your chores. A Mrs. Meyer's Clean Day Basil Candle can help you do exactly that.")
almondbutter = Item.create(name: "Justin's Natural Almond Butter", img_name: "/assets/organic_almond_butter.jpg", price: 11.99, description: "All Justin's Nut Butters are made in small batches to preserve premium quality standards and fresh taste, using the highest quality natural and organic ingredients that are sustainably harvested and found as locally as possible.")
coffee = Item.create(name: "Peet's House Blend", img_name: "/assets/peets_coffee.jpg", price: 9.99, description: "A perennial customer favorite, this inviting Latin American blend is a perfect introduction to Peet’s coffees. Bright, balanced, and medium-bodied. Pleasant hint of spice with a crisp finish")
siracha = Item.create(name: "Siracha Key Chain", img_name: "/assets/siracha_key_chain.jpg", price: 5.50, description: "Sriracha2Go is a must-have for every sriracha lover. With S2G, you’ll never worry about a sriracha-less meal again. No matter where you go, no matter what time of day, sriracha will be by your side.")
starbucks = Item.create(name: "Starbucks $10 Gift Card", img_name: "/assets/starbucks_gift_card_10.jpg", price: 10.00, description: 'Giving a Starbucks Card or eGift is more than a thoughtful gesture. It’s also an invitation to My Starbucks Rewards™. Simply registering a Starbucks Card or eGift puts you on the path to earning food and drink rewards all year long.')
tazo_awake_tea = Item.create(name: "Tazo Awake Tea", img_name: "/assets/tazo_awake_tea.jpg", price: 3.99, description: "Enjoy a revitalizing drink while on the go with Tazo Awake Black Tea Bags. They have a blend of natural black teas with fewer calories, making them ideal for weight management. The tantalizing taste and the bold aroma will be a delightful treat. The Tazo breakfast tea package comes with 20 refreshing tea bags.")