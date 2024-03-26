// eslint-disable-next-line no-unused-vars
function AddTodo() {
  return (
    <form>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
      />
      <input className="new-todo" placeholder="Author" />
      <input className="new-todo" placeholder="Reading Status" />
      <button className="submitButton">Submit</button>
    </form>
  )
}

export default AddTodo
