import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      pantryItems: [],
      recipes: {}
    }
  },
  componentDidMount(){
    this.getPantryItems();
  },
  getPantryItems(){
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e)=>{
      var responseJSON = JSON.parse(e.target.response);
      this.setState({
        recipes: responseJSON
      });

    });
    xhr.open("GET", "https://api.yummly.com/v1/api/recipes?");
    xhr.setRequestHeader("X-Yummly-App-ID", "6aef4b34");
    xhr.setRequestHeader("X-Yummly-App-Key", "00b7a24eab4e3791060763afa70bec7b");
    xhr.send();
  },
  onSubmitRecipeHandler(e){
    e.preventDefault();
    var pantryNameValue = this.refs.pantryName.value;
    var newPantryStringified = JSON.stringify({
      name: pantryNameValue
    });

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e)=>{
      var responseJSON = JSON.parse(e.target.response);
      this.getPantryItems();
    });
    xhr.open("GET", `https://api.yummly.com/v1/api/recipes?q=${pantryNameValue}`);
    xhr.setRequestHeader("X-Yummly-App-ID", "6aef4b34");
    xhr.setRequestHeader("X-Yummly-App-Key", "00b7a24eab4e3791060763afa70bec7b");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(newPantryStringified);
  },
  onSubmitItemHandler(e){
    e.preventDefault();
    this.setState({
      pantryItems: this.state.pantryItems.concat(this.refs.input.value)
    })
    // clear input value
    // call function for recipes
  },
  render() {
    console.log(this.state.pantryItems);
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
