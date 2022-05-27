function search()
{
  let input = document.getElementById("input").value;
  const searchfor = document.getElementById("searchfor");
  // search value empty check 
  const empty = document.getElementById('empty')
  if (input.length == 0)
  {
    searchfor.innerText = ''
    document.getElementById("card_area").innerHTML = "";
    empty.innerText = 'Search box is Empty..😒'
    }

  else {
    // spiner
    empty.innerText = ''
    document.getElementById("spinner").style.display = "block";
    document.getElementById("noresult").style.display = "none";
    document.getElementById("searchfor").style.display = "block";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;

    // search result for
    
    searchfor.innerText = ` Search Results for: '${input}'`;

    // cleaner
    document.getElementById("card_area").innerHTML = "";

    document.getElementById("input").value = "";

    fetch(url)
      .then((res) => res.json())
      .then((data) => display(data.meals));
  }
}

function display(data)
{
 console.log(data)
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