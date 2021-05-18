import { useState } from "react"

function Show(props) {
  const id = props.match.params.id
  const cheese = props.cheese
  const cheeseObj = cheese.find(p => p._id === id)

  // state for form
  const [editForm, setEditForm] = useState(cheeseObj)

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  // handlesubmit for form
  const handleSubmit = event => {
    event.preventDefault()
    props.updateCheese(editForm, cheeseObj._id)
    // redirect people back to index
    props.history.push("/")
  }

  const removeCheese = () => {
    props.deleteCheese(cheeseObj._id)
    props.history.push("/")
  }

  return (
     <div className="person">
      <h1>{cheeseObj.name}</h1>
      <h2>{cheeseObj.countryOfOrigin}</h2>
      <img src={cheeseObj.image} alt={cheeseObj.name} />
      <button id="delete" onClick={removeCheese}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.countryOfOrigin}
          name="countryOfOrigin"
          placeholder="countryOfOrigin"
          onChange={handleChange}
        />
        <input type="submit" value="Update Cheese" />
      </form>
    </div>
  )
}

export default Show