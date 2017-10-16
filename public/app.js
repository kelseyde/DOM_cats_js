var addCat = function(name, faveFood, imageURL) {

  var unorderedList = document.createElement("ul");

  var catName = document.createElement("li");
  catName.textContent = name;

  var catFaveFood = document.createElement("li");
  catFaveFood.textContent = faveFood;

  var catImageListItem = document.createElement("li");

  var catImage = document.createElement("img");
  catImage.src = imageURL;
  catImage.width = 500;

  catImageListItem.appendChild(catImage);
  unorderedList.appendChild(catName);
  unorderedList.appendChild(catFaveFood);
  unorderedList.appendChild(catImageListItem);

  var cats = document.getElementById("cats");

  cats.appendChild(unorderedList);
  console.log(cats);

}

var cat1 = {
  name: "Name: Boba",
  faveFood: "Favourite food: Sock fluff",
  imageURL: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
}

var cat2 = {
  name: "Name: Barnaby",
  faveFood: "Favourite food: Tuna",
  imageURL: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
}

var cat3 = {
  name: "Name: Max",
  faveFood: "Favourite food: Whiskas Temptations",
  imageURL: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
}

var catArray = [];
catArray.push(cat1);
catArray.push(cat2);
catArray.push(cat3);


var app = function() {
  for (cat of catArray) {
    addCat(cat.name, cat.faveFood, cat.imageURL);
  }
  addCat("Name: Princess Horace III", "Favourite food: Mango", "https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg?response-content-disposition=inline")
}




window.addEventListener('DOMContentLoaded', app)
