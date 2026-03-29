function showFood(item) {
    var foodType = item.getAttribute("data-food");
    alert(foodType + " is a popular " + item.innerHTML + " food!");
}