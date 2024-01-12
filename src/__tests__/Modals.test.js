import React from "react"
import renderer from "react-test-renderer"
import Modals from"../components/Modals"
import cast from"../cast.json"
import { render } from "react-dom"

it("test runs successfuly", ()=>{
  const truth = true
  expect(truth).toEqual(true)
})

cast.forEach(({memberInfo}) => 
  it("renders a modal with the members info",() => {
  const modal = renderer.create(<Modals member={memberInfo}/>)
  expect(modal).toMatchSnapshot()
}))