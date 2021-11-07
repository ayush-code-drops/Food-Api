import { navbar } from "./navbar.js";

const nav = document.getElementById('navbar');
nav.innerHTML = navbar()


const results = document.getElementById('results-latest');



function searchFoodItems() {
  
    return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(
            (response) => response.json()
        ).then(
            (data) => {
               
                for (let recipe of data.categories) {
                    const div = document.createElement('div');
                    div.className='latest-div'
                    
                
                    console.log(data.categories)
                   
                    const img = document.createElement('img')
                    img.src = `${recipe.strCategoryThumb}`
                    img.style.height = '200px'
                    img.style.width = '200px'
               
                    const h1 = document.createElement('h3');
                    h1.style.marginTop = '15px'
                    h1.innerHTML = recipe.strCategory;
                    
                    div.append(img, h1)
                    results.append(div)
                }
                
            }

        )

}

window.addEventListener('load',searchFoodItems)