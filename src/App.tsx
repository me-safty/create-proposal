import { useState } from "react"
import "./App.css"
import Projects from "./Projects"
import Reviews from "./Reviews"
import {
  ClientReview,
  PortfolioLink,
  clientReviews,
  discount,
  ending,
  github,
  intro,
  long,
  portfolioLinks,
  respon,
  testTask,
  whoAmI,
} from "./content"
import Proposal from "./Proposal"
import CheckBox from "./CheckBox"

function App() {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>(intro)
  const [brief, setBrief] = useState<string>(whoAmI)
  const [end, setEnd] = useState<string>(ending)
  const [links, setLinks] = useState<PortfolioLink[]>(portfolioLinks)
  const [reviews, setReviews] = useState<ClientReview[]>(clientReviews)
  const [responsive, setIrresponsive] = useState<boolean>(true)
  const [timeItTake, setTimeItTake] = useState<boolean>(true)
  const [isDiscount, setDiscount] = useState<boolean>(true)
  const [isTestTask, setIsTestTask] = useState<boolean>(true)

  return (
    <main className="m-2 max-w-3xl">
      <section className="mb-3">
        <p>example proposals</p>
        <ul>
          <li>
            <a
              className=" underline text-blue-600"
              target="_blanc"
              href="https://www.upwork.com/ab/proposals/1699519990255427585?success"
            >
              - React Developer needed to do some fixes
            </a>
          </li>
          <li>
            <a
              className=" underline text-blue-600"
              target="_blanc"
              href="https://www.upwork.com/ab/proposals/1568144192984461313"
            >
              - Create React Components in TypeScript according to XD Design
            </a>
          </li>
          <li>
            <a
              className=" underline text-blue-600"
              target="_blanc"
              href="https://www.upwork.com/ab/proposals/1678450226320551937"
            >
              - Next.js Development for Webapp
            </a>
          </li>
        </ul>
        <p
          className="my-1 text-blue-900 cursor-pointer"
          onClick={() =>
            navigator.clipboard.writeText(
              "can you write a proposal for this freelancing job description"
            )
          }
        >
          can you write a proposal for this freelancing job description
        </p>
      </section>
      <section>
        <div>
          <p className="inline-block">Hi</p>
          <input
            className="w-20 p-1 ml-2 border border-black rounded-md"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <textarea
          className="my-2 border p-1 border-black rounded-md w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          rows={10}
        ></textarea>
      </section>
      <CheckBox isChecked={isTestTask} setChecked={setIsTestTask}>
        {testTask}
      </CheckBox>
      <CheckBox isChecked={timeItTake} setChecked={setTimeItTake}>
        <p>{long}</p>
      </CheckBox>
      <CheckBox isChecked={responsive} setChecked={setIrresponsive}>
        <p>{respon}</p>
      </CheckBox>
      <Projects links={links} setLinks={setLinks} />
      {github}
      <textarea
        rows={5}
        value={brief}
        onChange={(e) => setBrief(e.target.value)}
        className="p-1 rounded-md border border-black block my-2 w-full"
      ></textarea>
      <Reviews reviews={reviews} setReviews={setReviews} />
      <CheckBox isChecked={isDiscount} setChecked={setDiscount}>
        {discount}
      </CheckBox>
      <textarea
        rows={5}
        value={end}
        onChange={(e) => setEnd(e.target.value)}
        className="p-1 rounded-md border border-black block my-2 w-full"
      ></textarea>
      <Proposal
        name={name}
        intro={description}
        testTask={isTestTask ? testTask : ""}
        timeItTake={timeItTake ? long : ""}
        responsive={responsive ? respon : ""}
        projects={links}
        whoAmI={brief}
        reviews={reviews}
        discount={isDiscount ? discount : ""}
        end={end}
      />
    </main>
  )
}

export default App
