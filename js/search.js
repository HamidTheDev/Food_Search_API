function search()
{
  // spiner
  document.getElementById("spinner").style.display = "block";

  let input = document.getElementById("input").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;

  // search result for
  const searchfor = document.getElementById("searchfor");
  searchfor.innerText = ` Search Results for: '${input}'`;

  // cleaner
  document.getElementById("card_area").innerHTML = "";

  document.getElementById("input").value = "";

  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data.meals));
}

function display(data)
{

  if (data != null)
  {
    // showing card
    const cardArea = document.getElementById("card_area");

    data.forEach((meal) => {
      const card = document.createElement("div");

      card.innerHTML = ` 
  <div class="col">
    <div class="card border-danger border-2">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p style="height: 300px;" class="card-text overflow-auto">${meal.strInstructions}</p>
      </div>
    </div>
  </div> 
    
     `;
      cardArea.appendChild(card);
    });
  }
  
  if(data == null) {
    document.getElementById('searchfor').style.display = 'none'
    document.getElementById('noresult').style.display='block'
  }
    
  
  // spiner
  document.getElementById("spinner").style.display = "none";
}