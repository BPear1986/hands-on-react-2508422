import React from "react"
import renderer from "react-test-renderer"
import Nav from"../components/Nav" 

const myJSON = require('../cast.json')

it("test runs successfuly", ()=>{
  const truth = true
  expect(truth).toEqual(true)
})

it("renders with all cast members", () => {
  const NavBar =  renderer.create(<Nav cast = {myJSON}/>)
  expect(NavBar.toJSON).toMatchSnapshot()
})