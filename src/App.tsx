import { useState } from "react"
import "./App.css"
import Projects from "./Projects"
import Reviews from "./Reviews"
import {
  ClientReview,
  PortfolioLink,
  clientReviews,
  ending,
  github,
  intro,
  portfolioLinks,
  whoAmI,
} from "./content"
import Proposal from "./Proposal"

function App() {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>(intro)
  const [brief, setBrief] = useState<string>(whoAmI)
  const [end, setEnd] = useState<string>(ending)
  const [links, setLinks] = useState<PortfolioLink[]>(portfolioLinks)
  const [reviews, setReviews] = useState<ClientReview[]>(clientReviews)

  return (
    <main className="m-2">
      <section>
        <div>
          <p className=" inline-block">Hi</p>
          <input
            className="w-20 p-1 ml-2 border border-black rounded-md"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <textarea
          className="my-2 border p-1 border-black rounded-md"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          cols={70}
          rows={6}
        ></textarea>
      </section>
      <p>
        I am willing to provide a free, 2-3 hour test task for you to assess my
        abilities before making a hiring decision.
      </p>
      <Projects links={links} setLinks={setLinks} />
      {github}
      <textarea
        cols={70}
        rows={5}
        value={brief}
        onChange={(e) => setBrief(e.target.value)}
        className="p-1 rounded-md border border-black block my-2"
      ></textarea>
      <Reviews reviews={reviews} setReviews={setReviews} />
      <textarea
        cols={70}
        rows={5}
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        className="p-1 rounded-md border border-black block my-2"
      ></textarea>
      <Proposal
        name={name}
        intro={intro}
        projects={links}
        whoAmI={brief}
        reviews={reviews}
        end={end}
      />
    </main>
  )
}

export default App