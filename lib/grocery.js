import React from 'react'

export default React.createClass({

 onSubmitClickHandler(e){
   // Find element to add
   e.preventDefault();
   var listElement = this.refs.list;
   var inputElement = this.refs.input;
   // Have string/html to add
   // Replace/append inner html
   listElement.innerHTML += `<li class="todo__listItems">
        <span class="checkOff">
        </span>
        <p class="todo__listText">` +
          inputElement.value +
        `</p>
      </li>`;
      // clears the place to enter a new todo.
      inputElement.value = "";
 },

 render() {
   return (
    <div ref="todo">
       <form className="todo__form"
             action="index.html"
             method="POST">
       <input ref="input"
           className="todo__text"
           type="text"
           name="textArea"
           placeholder="type todo item here"/>
       <input className="todo__submit"
           type="submit"
           name="submit"
           value="submit"
           onClick={this.onSubmitClickHandler}/>
        </form>
       <ul className="todo__items"
           ref="list">
       </ul>
       <footer className="footer">
       </footer>
     </div>
 )}
})
