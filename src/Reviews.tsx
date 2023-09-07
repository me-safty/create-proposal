import { useState } from "react"
import { ClientReview } from "./content"

export default function Reviews({
  reviews,
  setReviews,
}: {
  reviews: ClientReview[]
  setReviews: React.Dispatch<React.SetStateAction<ClientReview[]>>
}) {
  const [selectAll, setSelectAll] = useState<boolean>(true)

  function handleOnChange(review: ClientReview) {
    setReviews((arr) =>
      arr.map((r) => {
        if (r.name === review.name) {
          return { ...r, isChecked: !review.isChecked }
        } else {
          return r
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
          setReviews((arr) => arr.map((r) => ({ ...r, isChecked: !selectAll })))
        }}
      />
      <p className="ml-2 mb-3 inline-block">select all</p>
      <section className="flex flex-col gap-2">
        {reviews.map((p) => (
          <section className="flex gap-2 items-center" key={p.name}>
            <input
              type="checkbox"
              id="topping"
              name="topping"
              value="Paneer"
              checked={p.isChecked}
              onChange={() => handleOnChange(p)}
            />
            <section>
              <p>{p.name}</p>
              <p>{p.review}</p>
            </section>
          </section>
        ))}
      </section>
    </section>
  )
}
