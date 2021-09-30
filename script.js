// Food Show

const foodUrlName = name => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(res => res.json())
    .then(data => displayFood(data.meals[0]))
}

const foodNameInput = () => {
  document.getElementById('button').addEventListener('click', (name) => {
    const input = document.getElementById('input')
    name = input.value
    foodUrlName(name)
    input.value = ""
  })
}
foodNameInput()

const displayFood = food => {
  console.log(food);
  const foodContainer = document.getElementById('food-container')
  const foodDiv = document.createElement('div')
  foodDiv.className = 'className'
  const foodInfo = `
  <div onclick="foodIdInput(${food.idMeal})" class="food-div">
  <img class="image" src="${food.strMealThumb}">
  <h5 class="food-name"> ${food.strMeal} </h5> 
  </div>
  `
  foodDiv.innerHTML = foodInfo
  foodContainer.appendChild(foodDiv)
}


// Food Detais Show

const foodIdInput = foodId => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
    .then(res => res.json())
    .then(data => showFoodDetails(data.meals[0]))
  console.log(foodId);
}

const showFoodDetails = foodDetails => {
  const foodDetailsDiv = document.getElementById('food-details')
  const detailsDiv = document.createElement('div')
  detailsDiv.className = "food-details mb-5"
  const detailsInfo = `
  <img src="${foodDetails.strMealThumb}" >
  <h1 class="mt-3">${foodDetails.strMeal}</h1>
  <h5>Ingredients</h5>
  <p><span>&#10003;</span> ${foodDetails.strMeasure1} ${foodDetails.strIngredient1}</p>
  <p><span>&#10003;</span> ${foodDetails.strMeasure2} ${foodDetails.strIngredient2}</p>
  <p><span>&#10003;</span> ${foodDetails.strMeasure3} ${foodDetails.strIngredient3}</p>
  <p><span>&#10003;</span> ${foodDetails.strMeasure4} ${foodDetails.strIngredient4}</p>
  <p><span>&#10003;</span> ${foodDetails.strMeasure5} ${foodDetails.strIngredient5}</p>
  <p><span>&#10003;</span> ${foodDetails.strMeasure6} ${foodDetails.strIngredient6}</p>
  
  `
  detailsDiv.innerHTML = detailsInfo
  foodDetailsDiv.appendChild(detailsDiv)

}











// function displayWeather(city) {
//   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s='${city}'}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     })
// }
// // displayWeather('Dhaka')

// function display() {
//   document.getElementById('button').addEventListener('click', (city) => {
//     const input = document.getElementById('input')
//     city = input.value
//     displayWeather(city)


//   })

// }
// display()
