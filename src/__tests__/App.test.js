import React from "react"
import renderer from "react-test-renderer"
import App from"../App"

beforeEach(() => {
  fetch.resetMocks();
});

it("test runs successfuly", ()=>{
  const truth = true
  expect(truth).toEqual(true)
})

it("App snapshot test", async () => {
  fetch.mockResponseOnce(JSON.stringify([{
    memberInfo: [{
    id: 0,
    name: "Aneirin",
    slug: "aneirin",
    bio: "Aneirin is the foremost expert of cold climates in planetoids universe-wide, with a particular inquisitiveness in areas colder than -300 F / - 184.4444444 C (hence the profound personal interest in knitting mittens). Having travelled extensively, Aneirin enjoys collecting, receiving, and sending distinctive postcards from all corners of the macrocosm.",
    origin: "Zacon II",
    eyes: 2,
    hobby: "knitting",
    ambulation: "walking, skipping",
    job_title: "Cold Climate Analyst",
    dream_job_title: "Private Island Caretaker",
    singing_voice: "alto",
    favorites: {
      food: "asparagus",
      music_genre: "hip hop, classic rock",
      book: "The Call of the Wild by Jack London",
      footwear: "cowboy boots"
    }
  },{
    id: 1,
    name: "Celestia Dristi",
    slug: "celestia-dristi",
    bio: "As a mobility engineer, Celestia Dristi helps individuals and companies to improve personal and  professional agility and growth in technology and systems. An expert in translating and implementing  needs into functionality, Celestia Dristi has a unique proclivity for solving problems and helping to   avoid future issues.",
    origin: "Krachonk",
    eyes: 1,
    hobby: "landscaping",
    ambulation: "rolling",
    job_title: "Mobility Engineer",
    dream_job_title: "Mime",
    singing_voice: "soprano",
    favorites: {
      food: "ice cream cake",
      music_genre: "reggae",
      book: "A Tale of Two Cities by Charles Dickens",
      footwear: "n/a"
    }}]}]));

  const component = renderer.create(<App/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot()
})
