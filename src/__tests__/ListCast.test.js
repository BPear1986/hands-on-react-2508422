import React from "react"
import renderer from "react-test-renderer"
import ListCast from"../ListCast"

it("renders all cast members", () => {
  list = renderer.create(<ListCast/>)
  expect(list.length).toEqual(16)
})