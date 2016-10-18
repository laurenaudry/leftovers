import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Pantry from '../lib/pantry'


describe("Pantry", () => {
  it("should pass", () => {
    expect("Pantry").toBeDefined()
  })

  it("should have text input section", () => {
    let itemRendered = TestUtils.renderIntoDocument(
      <Pantry params={"pantryItems: cheese"}/>
    )

    let textEl = TestUtils.findRenderedDOMComponentWithClass(itemRendered, "pantry__form")
    expect(textEl).toBeDefined()
  })

  // it("should have submit button", () => {
  //   let submitButton = TestUtils.findRenderedDOMComponentWithClass("pantry__submit")
  //   expect(submitButton).toBeDefined()
  // })
});
