import { useState } from "react"
import { PortfolioLink } from "./content"

export default function Projects({
  links,
  setLinks,
}: {
  links: PortfolioLink[]
  setLinks: React.Dispatch<React.SetStateAction<PortfolioLink[]>>
}) {
  const [selectAll, setSelectAll] = useState<boolean>(true)

  function handleOnChange(portfolioLink: PortfolioLink) {
    setLinks((arr) =>
      arr.map((l) => {
        if (l.link === portfolioLink.link) {
          return { ...l, isChecked: !portfolioLink.isChecked }
        } else {
          return l
        }
      })
    )
  }

  return (
    <section className="p-2 border border-black rounded-md my-2">
      <input
        type="checkbox"
        id="topping"
        name="topping"
        value="Paneer"
        checked={selectAll}
        onChange={() => {
          setSelectAll((p) => !p)
          setLinks((arr) => arr.map((l) => ({ ...l, isChecked: !selectAll })))
        }}
      />
      <p className="ml-2 mb-3 inline-block">select all</p>
      <section className="flex flex-col gap-2">
        {links.map((p) => (
          <section className="flex gap-2 items-center" key={p.link}>
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              checked={p.isChecked}
              onChange={() => handleOnChange(p)}
            />
            <section>
              <p>{p.link}</p>
              <p>{p.description}</p>
            </section>
          </section>
        ))}
      </section>
    </section>
  )
}
