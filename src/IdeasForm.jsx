import { useState } from "react";

export default function IdeasForm (props) {
let [input, setInput] = useState("")
const handleSubmit = (e) => {
    e.preventDefault()
    props.addIdeas(input)
}
  
return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.event.value)}/>
        <button type="submit">Submit your Idea!</button>
      </form>
    </div>
  )
}

