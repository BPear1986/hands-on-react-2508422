import React from "react"
import renderer from "react-test-renderer"
import ListCast from"../components/ListCast"

it("test runs successfuly", ()=>{
  const truth = true
  expect(truth).toEqual(true)
})

/*it("renders all cast members", () => {
  list = renderer.create(<ListCast/>)
  expect(list.length).toEqual(16)
})*/