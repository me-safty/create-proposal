import { Fragment } from "react"
import { ClientReview, PortfolioLink, github } from "./content"

export default function Proposal({
  name,
  intro,
  projects,
  whoAmI,
  reviews,
  end,
}: {
  name: string
  intro: string
  projects: PortfolioLink[]
  whoAmI: string
  reviews: ClientReview[]
  end: string
}) {
  return (
    <article className="w-[800px]">
      <p className="">Hi {name},</p>
      <br />
      <p>{intro}</p>
      <br />
      <p>
        I am willing to provide a free, 2-3 hour test task for you to assess my
        abilities before making a hiring decision.
      </p>
      <br />
      <p>
        You can see my previous work samples in my portfolio, and here are my
        projects links:
      </p>
      {projects
        .filter((p) => p.isChecked)
        .map((p, i) => (
          <Fragment key={p.link}>
            <p>
              {i + 1}- {p.link} "{p.description}".
            </p>
          </Fragment>
        ))}
      <br />
      <p>{github}</p>
      <br />
      <p>{whoAmI}</p>
      <br />
      <p>Here is what my clients are saying about me:</p>
      {reviews
        .filter((p) => p.isChecked)
        .map((p, i) => (
          <Fragment key={p.name}>
            <p>
              {i + 1}- "{p.review}" ({p.name}'s feedback').
            </p>
          </Fragment>
        ))}
      <br />
      <p>{end}</p>
    </article>
  )
}
