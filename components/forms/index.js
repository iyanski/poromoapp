
export const Input = ({type = "text", placeholder = "Type here"}) => (
  <input type={type} placeholder={placeholder} className="input w-full" />
)

export const Textarea = ({type = "text", placeholder = "Type here", rows = 4}) => (
  <textarea type="text" placeholder="Type here" className="textarea w-full" rows={rows} />
)
