import { ReactNode } from "react"

export default function CheckBox({
  isChecked,
  setChecked,
  children,
}: {
  isChecked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
}) {
  return (
    <section className="flex gap-2 items-center p-2 border border-black rounded-md my-2">
      <input
        type="checkbox"
        id="topping"
        name="topping"
        value="Paneer"
        checked={isChecked}
        onChange={() => setChecked((p) => !p)}
      />
      <section onClick={() => setChecked((p) => !p)}>{children}</section>
    </section>
  )
}
