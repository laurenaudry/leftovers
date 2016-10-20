import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Grocery from '../lib/grocery'


describe("Grocery", () => {
  it("should pass", () => {
    expect("Grocery").toBeDefined()
  })

  it("should have text input", () => {
    let itemRendered = TestUtils.renderIntoDocument(
      <Grocery params={"pantryItems: chicken"}/>
    )

    let textEl = TestUtils.findRenderedDOMComponentWithClass(itemRendered, "grocery__form")
    expect(textEl).toBeDefined()
  })
});
