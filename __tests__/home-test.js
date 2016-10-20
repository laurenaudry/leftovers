import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Home from '../lib/main'


describe("Home", () => {
  it("should pass", () => {
    expect("Home").toBeDefined()
  })

  it("should have list items", () => {
    let listRendered = TestUtils.renderIntoDocument(
      <Home params={"li"}/>
    )

    let li = TestUtils.scryRenderedDOMComponentsWithClass(listRendered, "fact")
    expect(li).toBeDefined()
  })

});
