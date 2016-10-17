import React from 'react'

export default React.createClass({

 onSubmitClickHandler(e){
   // Find element to add
   e.preventDefault();
   var listElement = this.refs.list;
   var inputElement = this.refs.input;
   // Have string/html to add
   // Replace/append inner html
   listElement.innerHTML += `<li class="grocery__listItems">
          ${inputElement.value}
      </li>`;
      // clears the place to enter a new grocery.
      inputElement.value = "";
 },

 render() {
   return (
     <div>
       <div className="heading">
        <h1 className="home__heading">
         Leftovers
        </h1>
       </div>
      <div>
         <form method="POST"
               action="#"
               className="grocery__form"
               onSubmit={this.onSubmitClickHandler}>
           <input type="text"
                  ref="input"
                  className="grocery__text"/>
           <input type="submit"
                  value="Add Item"
                  className="grocery__submit"/>
          </form>
         <ul className="grocery__items"
             ref="list">
         </ul>
         <footer className="footer">
         </footer>
       </div>
    </div>
 )}
})
