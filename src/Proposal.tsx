import { Fragment } from "react"
import { ClientReview, PortfolioLink, github } from "./content"

export default function Proposal({
  name,
  intro,
  responsive,
  timeItTake,
  projects,
  whoAmI,
  reviews,
  end,
}: {
  name: string
  intro: string
  responsive: string
  timeItTake: string
  projects: PortfolioLink[]
  whoAmI: string
  reviews: ClientReview[]
  end: string
}) {
  return (
    <article>
      <h1 className="text-6xl">Proposal</h1>
      <section className="p-2 border border-black rounded-md my-2">
        <p className="">Hi {name},</p>
        <p>{intro}</p>
        <p>
          I am willing to provide a free, 2-3 hour test task for you to assess
          my abilities before making a hiring decision.
        </p>
        <p>{timeItTake}</p>
        {responsive}
        <br />
        You can see my previous work samples in my portfolio, and here are my
        projects links:
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
        Here is what my clients are saying about me:
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
        <p>{end}</p>
      </section>
    </article>
  )
}
