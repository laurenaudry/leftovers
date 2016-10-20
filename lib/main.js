import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div className="home__page">
        <div className="heading">
          <h1 className="home__heading">
            Leftovers
          </h1>
        </div>
        <section className="home__info">
          <h3 className="home__facts-title">Facts about food waste</h3>
          <ul className="home__facts">
            <li className="fact">1.3 billion tons of food are wasted every year</li>
            <li className="fact">This amounts to US$1 trillion dollars of wasted or lost food</li>
            <li className="fact">If wasted food was a country, it would be the third largest producer of carbon dioxide in the world, after the United States and China</li>
            <li className="fact">Just one quarter of all wasted food could feed the 795 million undernourished people around the world who suffer from hunger</li>
            <li className="fact">Food waste in rich countries (222 million tons) is approximately equivalent to all of the food produced in Sub-Saharan Africa (230 million tons)</li>
          </ul>
          <div className="link">
            <Link to='/pantry' className="page__link">Find Recipes</Link>
          </div>
          <div className="link">
            <Link to='/grocery' className="page__link">Grocery List</Link>
          </div>
        </section>
        <div className="img__container">
          <img src="images/groceries.jpeg" alt="fruit, veggies and spices" className="home__image"/>
        </div>
      </div>
    )
  }
})
