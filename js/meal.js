
const loadMeals = (search) => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {

    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;

    meals.forEach(meal => {
        console.log(meal);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
       
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                 <h5 class="card-title">Name: ${meal.strMeal}</h5>
                 <p class="card-text">Introduction: ${meal.strInstructions.slice(0, 220)}.</p>
            </div>
        </div>
              
          `;
        mealContainer.appendChild(cardDiv);
    });

}


const searchFood = () => {

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = '';

}

const loadMealDetail = (idMeal) => {

    // console.log('get detail the id ', idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))


}

const displayMealDetail = meal => {
    console.log(meal);
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Name: ${meal.strMeal}</h5>
      <p class="card-text">Introduction: ${meal.strInstructions.slice(0, 220)}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    
    `;
    detailContainer.appendChild(mealDiv);


}

loadMeals('');
