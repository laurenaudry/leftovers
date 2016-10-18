import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
      <div className="heading">
        <h1 className="home__heading">
          Leftovers
        </h1>
      </div>
        <section className="home__info">
          <p className="home__facts">
            1.3 billion tons of food are wasted every year<br></br>
            This amounts to US$1 trillion dollars of wasted or lost food<br></br>
            If wasted food was a country, it would be the third largest producer of carbon dioxide in the world, after the United States and China<br></br>
            Just one quarter of all wasted food could feed the 795 million undernourished people around the world who suffer from hunger<br></br>
            Food waste in rich countries (222 million tons) is approximately equivalent to all of the food produced in Sub-Saharan Africa (230 million tons)
          </p>
          <div className="link">
            <Link to='/pantry' className="page__link">Find Recipes</Link>
          </div>
          <div className="link">
            <Link to='/grocery' className="page__link">Grocery List</Link>
          </div>
        </section>
      </div>
    )
  }
})
