import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      pantryItems: [],
      recipes: {}
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
    xhr.open("GET", `http://api.yummly.com/v1/api/recipes?_app_id=6aef4b34&_app_key=00b7a24eab4e3791060763afa70bec7b&q=${itemSearch}&requirePictures=true`);
    xhr.setRequestHeader("X-Yummly-App-ID", "6aef4b34");
    xhr.setRequestHeader("X-Yummly-App-Key", "00b7a24eab4e3791060763afa70bec7b");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(itemSearch);
  },

  onSubmitItemHandler(e){
    e.preventDefault();
    this.setState({
      pantryItems: this.state.pantryItems.concat(this.refs.input.value)
    })
    this.getRecipeHandler(this.refs.input.value)
    this.refs.input.value = "";
  },

  render() {
    return (
      <section>
        <ul ref="pantry">
          {this.state.pantryItems.map((pantryItem, i)=>{
            return <li className="pantry__items" key={i}> {pantryItem} </li>
          })}
        </ul>
        <form method="POST"
              action="#"
              className="pantry__form"
              onSubmit={this.onSubmitItemHandler}>
          <input type="text"
                 ref="input"
                 className="pantry__input"/>
          <input type="submit"
                 value="add pantry"
                 className="pantry__submit" />
        </form>
      </section>
  )
  }
})
