import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
      <div className="heading">
        <h1 className="home__heading">
          Welcome
        </h1>
      </div>
        <p className="home__facts">
          Did you know,<br></br>
          * In the USA, organic waste is the second highest component of landfills, which are the largest source of methane emissions<br></br>
          * In the USA, 30-40% of the food supply is wasted, equaling more than 20 pounds of food per person per month
          You can help change that!
        </p>
        <Link to='/pantry'>Get Started</Link>
      </div>
    )
  }
})
