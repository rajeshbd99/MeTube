console.log('videos.js loaded');
//1. -> Fetch, Load and Show Categories on html

//create loadCategories function

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=> res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error)=> console.log (error));
}

//create displayCategories function

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");

    categories.forEach((item) => {
        console.log(item);
        //create a button
        const button = document.createElement("button");
        button.classList = "btn btn-primary m-2";
        button.innerText = item.category;

        //add button to category container
        categoryContainer.appendChild(button);
    }
)}

loadCategories();