const getElement = (selector) => {
    const element = document.querySelector(selector)

    if (element) return element
    throw Error(
        `There is no ${selector} class`
    )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

function getRecipesData(url) {
    if (url.includes("tags")) {
        return [
            {value: "Broccoli Apple Salad", link: '../recipes/broccoli-apple-salad-recipe.html'},
            {value: "Butter Cookies", link: '../recipes/butter-cookies-recipe.html'},
            {value: "Buttermilk Biscuits", link: '../recipes/buttermilk-biscuits-recipe.html'},
            {value: "Chai-Spiced Apples with Vanilla Bean Gelato", link: '../recipes/chai-spiced-apples-recipe.html'},
            {value: "Cheesy Garlic Bread", link: '../recipes/cheesy-garlic-bread-recipe.html'},
            {value: "Crispy Baked Chicken Wings", link: '../recipes/crispy-baked-chicken-wings-recipe.html'},
            {value: "Crispy Mongolian Beef", link: '../recipes/crispy-mongolian-beef-recipe.html'},
            {value: "French Toast Bake", link: '../recipes/french-toast-bake-recipe.html'},
            {value: "Fresh Summer Berry Salsa", link: '../recipes/fresh-summer-berry-salsa-recipe.html'},
            {value: "Gluten-Free Pumpkin Muffins", link: '../recipes/gluten-free-pumpkin-muffins-recipe.html'},
            {value: "Indian Minced Meat Qeemap", link: '../recipes/indian-minced-meat-qeema-recipe.html'},
            {value: "Italian Baked Eggs in Tomato Sauce", link: '../recipes/italian-baked-eggs-recipe.html'},
            {value: "Italian Chopped Salad", link: '../recipes/italian-chopped-salad-recipe.html'},
            {
                value: "Jalapeno Cheese Balls with Bacon & Chives",
                link: '../recipes/jalapeno-popper-cheese-balls-recipe.html'
            },
            {value: "Japanese Milk Bread", link: '../recipes/japanese-milk-bread-recipe.html'},
            {
                value: "Mediterranean Chicken Chickpea Salad",
                link: '../recipes/mediterranean-chicken-chickpea-salad-recipe.html'
            },
            {value: "Mini Chicken Pot Pie", link: '../recipes/mini-chicken-pot-pies-recipe.html'},
            {value: "Persian Shirazi Salad", link: '../recipes/persian-shirazi-salad-recipe.html'},
            {value: "Portobello Mushroom Chicken Burger", link: '../recipes/portobello-chicken-burger-recipe.html'},
            {value: "Spicy Indian Chapli Kebabs", link: '../recipes/spicy-indian-chapli-kebabs-recipe.html'},
            {value: "Sweet Potato Crostini", link: '../recipes/sweet-potato-crostini-recipe.html'},
            {value: "Tacos with Spicy Beef & Green Chile Queso", link: '../recipes/tacos-with-spicy-beef-recipe.html'},
            {value: "Tomato Egg Rings with Herbs", link: '../recipes/tomato-egg-rings-recipe.html'},
        ];
    } else if (url.includes("recipes/")) {
        return [
            {value: "Broccoli Apple Salad", link: 'broccoli-apple-salad-recipe.html'},
            {value: "Butter Cookies", link: 'butter-cookies-recipe.html'},
            {value: "Buttermilk Biscuits", link: 'buttermilk-biscuits-recipe.html'},
            {value: "Chai-Spiced Apples with Vanilla Bean Gelato", link: 'chai-spiced-apples-recipe.html'},
            {value: "Cheesy Garlic Bread", link: 'cheesy-garlic-bread-recipe.html'},
            {value: "Crispy Baked Chicken Wings", link: 'crispy-baked-chicken-wings-recipe.html'},
            {value: "Crispy Mongolian Beef", link: 'crispy-mongolian-beef-recipe.html'},
            {value: "French Toast Bake", link: 'french-toast-bake-recipe.html'},
            {value: "Fresh Summer Berry Salsa", link: 'fresh-summer-berry-salsa-recipe.html'},
            {value: "Gluten-Free Pumpkin Muffins", link: 'gluten-free-pumpkin-muffins-recipe.html'},
            {value: "Indian Minced Meat Qeemap", link: 'indian-minced-meat-qeema-recipe.html'},
            {value: "Italian Baked Eggs in Tomato Sauce", link: 'italian-baked-eggs-recipe.html'},
            {value: "Italian Chopped Salad", link: 'italian-chopped-salad-recipe.html'},
            {value: "Jalapeno Cheese Balls with Bacon & Chives", link: 'jalapeno-popper-cheese-balls-recipe.html'},
            {value: "Japanese Milk Bread", link: 'japanese-milk-bread-recipe.html'},
            {value: "Mediterranean Chicken Chickpea Salad", link: 'mediterranean-chicken-chickpea-salad-recipe.html'},
            {value: "Mini Chicken Pot Pie", link: 'mini-chicken-pot-pies-recipe.html'},
            {value: "Persian Shirazi Salad", link: 'persian-shirazi-salad-recipe.html'},
            {value: "Portobello Mushroom Chicken Burger", link: 'portobello-chicken-burger-recipe.html'},
            {value: "Spicy Indian Chapli Kebabs", link: 'spicy-indian-chapli-kebabs-recipe.html'},
            {value: "Sweet Potato Crostini", link: 'sweet-potato-crostini-recipe.html'},
            {value: "Tacos with Spicy Beef & Green Chile Queso", link: 'tacos-with-spicy-beef-recipe.html'},
            {value: "Tomato Egg Rings with Herbs", link: 'tomato-egg-rings-recipe.html'},
        ];
    }
    return [
        {value: "Broccoli Apple Salad", link: './recipes/broccoli-apple-salad-recipe.html'},
        {value: "Butter Cookies", link: './recipes/butter-cookies-recipe.html'},
        {value: "Buttermilk Biscuits", link: './recipes/buttermilk-biscuits-recipe.html'},
        {value: "Chai-Spiced Apples with Vanilla Bean Gelato", link: './recipes/chai-spiced-apples-recipe.html'},
        {value: "Cheesy Garlic Bread", link: './recipes/cheesy-garlic-bread-recipe.html'},
        {value: "Crispy Baked Chicken Wings", link: './recipes/crispy-baked-chicken-wings-recipe.html'},
        {value: "Crispy Mongolian Beef", link: './recipes/crispy-mongolian-beef-recipe.html'},
        {value: "French Toast Bake", link: './recipes/french-toast-bake-recipe.html'},
        {value: "Fresh Summer Berry Salsa", link: './recipes/fresh-summer-berry-salsa-recipe.html'},
        {value: "Gluten-Free Pumpkin Muffins", link: './recipes/gluten-free-pumpkin-muffins-recipe.html'},
        {value: "Indian Minced Meat Qeemap", link: './recipes/indian-minced-meat-qeema-recipe.html'},
        {value: "Italian Baked Eggs in Tomato Sauce", link: './recipes/italian-baked-eggs-recipe.html'},
        {value: "Italian Chopped Salad", link: './recipes/italian-chopped-salad-recipe.html'},
        {
            value: "Jalapeno Cheese Balls with Bacon & Chives",
            link: './recipes/jalapeno-popper-cheese-balls-recipe.html'
        },
        {value: "Japanese Milk Bread", link: './recipes/japanese-milk-bread-recipe.html'},
        {
            value: "Mediterranean Chicken Chickpea Salad",
            link: './recipes/mediterranean-chicken-chickpea-salad-recipe.html'
        },
        {value: "Mini Chicken Pot Pie", link: './recipes/mini-chicken-pot-pies-recipe.html'},
        {value: "Persian Shirazi Salad", link: './recipes/persian-shirazi-salad-recipe.html'},
        {value: "Portobello Mushroom Chicken Burger", link: './recipes/portobello-chicken-burger-recipe.html'},
        {value: "Spicy Indian Chapli Kebabs", link: './recipes/spicy-indian-chapli-kebabs-recipe.html'},
        {value: "Sweet Potato Crostini", link: './recipes/sweet-potato-crostini-recipe.html'},
        {value: "Tacos with Spicy Beef & Green Chile Queso", link: './recipes/tacos-with-spicy-beef-recipe.html'},
        {value: "Tomato Egg Rings with Herbs", link: './recipes/tomato-egg-rings-recipe.html'},
    ];
}

const $ = jQuery;
$(function () {
    let recipesData = getRecipesData(window.location.href);
    $("#searchInput").autocomplete({
        source: recipesData,
        select: function (event, ui) {
            window.location.replace(ui.item.link)
        }
    });
});

