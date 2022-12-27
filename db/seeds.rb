# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🌱 Seeding spices..."

# Seed your database here
Recipe.create(meal_name:"Pierogi (Polish Dumplings)",
image_url: "https://www.themealdb.com/images/media/meals/45xxr21593348847.jpg",
ingredients: 
"Butter, 
Chopped Onion, 
Sauerkraut, 
Butter, 
Chopped Onion",
instructions: "To prepare the sauerkraut filling, melt the butter in a skillet over medium heat. Stir in the onion, and cook until translucent, about 5 minutes. Add the drained sauerkraut and cook for an additional 5 minutes. Season to taste with salt and pepper, then remove to a plate to cool.\r\n\r\nFor the mashed potato filling, melt the butter in a skillet over medium heat. Stir in the onion, and cook until translucent, about 5 minutes. Stir into the mashed potatoes, and season with salt and white pepper.\r\n\r\nTo make the dough, beat together the eggs and sour cream until smooth. Sift together the flour, salt, and baking powder; stir into the sour cream mixture until dough comes together. Knead the dough on a lightly floured surface until firm and smooth. Divide the dough in half, then roll out one half to 1/8 inch thickness. Cut into 3 inch rounds using a biscuit cutter.\r\n\r\nPlace a small spoonful of the mashed potato filling into the center of each round. Moisten the edges with water, fold over, and press together with a fork to seal. Repeat procedure with the remaining dough and the sauerkraut filling.\r\n\r\nBring a large pot of lightly salted water to a boil. Add perogies and cook for 3 to 5 minutes or until pierogi float to the top. Remove with a slotted spoon.",
origin: "Polish",
category: "Side",
video: "https://www.youtube.com/watch?v=lyqDmUroZrI"
)
Recipe.create(meal_name:"Pear Tarte Tatin",
image_url: "https://www.themealdb.com/images/media/meals/rxvxrr1511797671.jpg",
ingredients: 
"Pears,
Caster Sugar,
Butter,
Star Anise,
Cardamom,
Cinnamon,
Brandy,
Puff Pastry",
instructions: "Core the pears, then peel as neatly as possible and halve. If you like, they can be prepared up to a day ahead and kept in the fridge, uncovered, so that they dry out.\r\nTip the sugar, butter, star anise, cardamom and cinnamon into an ovenproof frying pan, about 20cm wide, and place over a high heat until bubbling. Shake the pan and stir the buttery sauce until it separates and the sugar caramelises to a toffee colour.\r\nLay the pears in the pan, then cook in the sauce for 10-12 mins, tossing occasionally, until completely caramelised. Don’t worry about them burning – they won’t – but you want to caramelise them as much as possible. Splash in the brandy and let it flambé, then set the pears aside.\r\nHeat oven to 200C/fan 180C/gas 6. Roll the pastry out to the thickness of a £1 coin. Using a plate slightly larger than the top of the pan, cut out a circle, then press the edges of the circle of pastry to thin them out.\r\nWhen the pears have cooled slightly, arrange them in the pan, cut side up, in a floral shape, with the pears around the edge pointing inwards. Rest the cinnamon stick on the top in the centre, with the cardamom pods scattered around.\r\nDrape the pastry over the pears, then tuck the edges down the pan sides and under the fruit (see Gordon’s guide). Pierce the pastry a few times, then bake for 15 mins. If a lot of juice bubbles up the side of the pan, pour it off at this stage (see guide). Reduce oven to 180C/fan 160C/gas 4 and bake for 15 mins more until the pastry is golden. Leave the tart to stand for 10 mins, then invert it carefully onto a serving dish.",
origin: "French",
category: "Desserts",
video: "https://www.youtube.com/watch?v=8U1tKWKDeWA"
)
Recipe.create(meal_name:"Vegetarian Casserole",
image_url: "https://www.themealdb.com/images/media/meals/vptwyt1511450962.jpg",
ingredients: 
"Rapeseed Oil,
Onion,
Garlic,
Paprika,
Cumin,
Thyme,
Carrots,
Celery,
Red Pepper,
Yellow Pepper,
Tomato,
Vegetable Stock Cube,
Courgettes,
Thyme,
Lentils",
instructions: "Heat the oil in a large, heavy-based pan. Add the onions and cook gently for 5 – 10 mins until softened.\r\nAdd the garlic, spices, dried thyme, carrots, celery and peppers and cook for 5 minutes.\r\nAdd the tomatoes, stock, courgettes and fresh thyme and cook for 20 - 25 minutes.\r\nTake out the thyme sprigs. Stir in the lentils and bring back to a simmer. Serve with wild and white basmati rice, mash or quinoa.",
origin: "British",
category: "Vegetarian",
video: "https://www.youtube.com/watch?v=oHmKE9mWtWM"
)
Recipe.create(meal_name:"Chicken Karaage",
image_url: "https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg",
ingredients: 
"Chicken thigh,
Ginger,
Garlic,
Soy sauce,
Sake,
Granulated sugar,
Potato starch,
Vegetable oil,
Lemon",
instructions: "Add the ginger, garlic, soy sauce, sake and sugar to a bowl and whisk to combine. Add the chicken, then stir to coat evenly. Cover and refrigerate for at least 1 hour.\r\n\r\nAdd 1 inch of vegetable oil to a heavy bottomed pot and heat until the oil reaches 360 degrees F. Line a wire rack with 2 sheets of paper towels and get your tongs out. Put the potato starch in a bowl\r\n\r\nAdd a handful of chicken to the potato starch and toss to coat each piece evenly.\r\n\r\nFry the karaage in batches until the exterior is a medium brown and the chicken is cooked through. Transfer the fried chicken to the paper towel lined rack. If you want the karaage to stay crispy longer, you can fry the chicken a second time, until it's a darker color after it's cooled off once. Serve with lemon wedges.",
origin: "Japanese",
category: "Chicken",
video: "https://www.youtube.com/watch?v=XivddFddthc"
)

puts "✅ Done seeding!"
