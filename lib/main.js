import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="home__heading">
          Welcome
        </h1>
        <p className="home__facts">
          Did you know,
          * In the USA, organic waste is the second highest component of landfills, which are the largest source of methane emissions
          * In the USA, 30-40% of the food supply is wasted, equaling more than 20 pounds of food per person per month
          You can help change that!
        </p>
        <h2 className="home__pantryButton">Get Started</h2>
      </div>
    )
  }
})
