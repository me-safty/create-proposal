import { Fragment } from "react"
import { ClientReview, PortfolioLink } from "./content"

export default function Proposal({
  name,
  intro,
  testTask,
  github,
  responsive,
  timeItTake,
  projects,
  whoAmI,
  reviews,
  discount,
  end,
}: {
  name: string
  intro: string
  testTask: string
  github: string
  responsive: string
  timeItTake: string
  projects: PortfolioLink[]
  whoAmI: string
  reviews: ClientReview[]
  discount: string
  end: string
}) {
  return (
    <article>
      <h1 className="text-6xl">Proposal</h1>
      <section className="p-2 border border-black rounded-md my-2">
        <p className="">Hi {name},</p>
        <p>{intro}</p>
        <p>{testTask}</p>
        <p>{timeItTake}</p>
        {responsive}
        <br />
        {projects.filter((p) => p.isChecked).length > 0
          ? "You can see my previous work samples in my portfolio, and here are my projects links:"
          : ""}
        <br />
        {projects
          .filter((p) => p.isChecked)
          .map((p, i) => (
            <Fragment key={p.link}>
              {i + 1}- {p.link} "{p.description}".
              <br />
            </Fragment>
          ))}
        <p>{github}</p>
        <p>{whoAmI}</p>
        {reviews.filter((p) => p.isChecked).length > 0
          ? "Here is what my clients are saying about me:"
          : ""}
        <br />
        {reviews
          .filter((p) => p.isChecked)
          .map((p, i) => (
            <Fragment key={p.name}>
              {i + 1}- "{p.review}" ({p.name}'s feedback').
              <br />
            </Fragment>
          ))}
        <br />
        <p>{discount}</p>
        <p>{end}</p>
      </section>
    </article>
  )
}
