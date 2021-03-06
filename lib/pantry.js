import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      pantryItems: [],
      recipes: {
        matches: []
      },
      pantryUrlString: ""
    }
  },

  getRecipeHandler(itemSearch){
    var pantryInputValue = this.refs.input.value;
    var newPantryStringified = JSON.stringify({
      name: pantryInputValue
    });

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e)=>{
      var responseJSON = JSON.parse(e.target.response);
      this.setState({
        recipes: responseJSON
      });
    });
    xhr.open("GET", `https://api.yummly.com/v1/api/recipes?_app_id=6aef4b34&_app_key=00b7a24eab4e3791060763afa70bec7b&q=${itemSearch}&requirePictures=true`);
    xhr.setRequestHeader("X-Yummly-App-ID", "6aef4b34");
    xhr.setRequestHeader("X-Yummly-App-Key", "00b7a24eab4e3791060763afa70bec7b");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(itemSearch);
  },

  onSubmitItemHandler(e){
    e.preventDefault();
    // grabbing the input value and adding it to the pantry items list
    var combinedItems = this.state.pantryItems.concat(this.refs.input.value)
    this.setState({
      pantryItems: combinedItems
    })
    var allItemsString = ""
    combinedItems.map((pantryItem) => {
      allItemsString += (pantryItem + "+")
    })
    console.log(allItemsString);
    this.getRecipeHandler(allItemsString)
    this.refs.input.value = "";
  },

  render() {
    console.log(this.state.recipes.matches);
    return (
      <div className="pantry__page">
        <div className="pantry__heading">
          <h2 className="pantry__title">
            Items in stock
          </h2>
          <h2 className="recipes__title">
            Recipes
          </h2>
        </div>
        <div className="pantry">
          <form method="POST"
                action="#"
                className="pantry__form"
                onSubmit={this.onSubmitItemHandler}>
            <div className="search__box">
              <input type="text"
                     ref="input"
                     className="pantry__input"/>
              <input type="submit"
                     value="add pantry"
                     className="pantry__submit" />
            </div>
          </form>
          <ul ref="pantry">
            {this.state.pantryItems.map((pantryItem, i)=>{
              return <li className="pantry__items" key={i}> {pantryItem} </li>
            })}
          </ul>
        </div>
        <section className="recipe__section">
          <ul ref="recipes"
              className="recipes">
            {this.state.recipes.matches.map((recipe, i) => {
              return <li className="recipe__name" key={i}> {recipe.recipeName}
              <img src={recipe.smallImageUrls[0]} alt={recipe.recipeName}
              className="recipe__img"/>
             {recipe.ingredients.map((ingredient, i) => {
                    return <span className="recipe__ingredients"key={i}>
                      •{ingredient}
                    </span>
                  })}
              </li>
            })}
          </ul>
        </section>
      </div>
  )
  }
})
