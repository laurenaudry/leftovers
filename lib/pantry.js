import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      pantryItems: [
        {
          name: ""
        }
      ]
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
        pantryItems: responseJSON
      });

    });
    xhr.open("GET", "https://api.yummly.com/v1/api/recipes?");
    xhr.setRequestHeader("X-Yummly-App-ID", "6aef4b34");
    xhr.setRequestHeader("X-Yummly-App-Key", "00b7a24eab4e3791060763afa70bec7b");
    xhr.send();
  },

  onSubmitPantryHandler(e){
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

  render() {
    return (
      <section>
        <ul>
          { this.state.pantryItems.map((item, i)=>{
            return <li key={i}> {item.name} </li>
          })}
        </ul>
        <form method="POST"
              action="#"
              onSubmit={this.onSubmitPantryHandler}>
          <input type="text"
                 placeholder="pantry item"
                 ref="pantryName" />
          <input type="submit" value="add pantry" />
        </form>
      </section>
    )
  }
})
