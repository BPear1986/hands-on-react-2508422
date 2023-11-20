import React from "react"
import renderer from "react-test-renderer"
import App from"../App"

it("test runs successfuly", ()=>{
  const truth = true
  expect(truth).toEqual(true)
})

it("App snapshot test", () => {
  const component = renderer.create(<App/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot()
})
