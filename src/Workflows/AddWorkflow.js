import React from "react"

function AddWorkflow({ onClose }) {
  return (
    <div>
      <h2>Add Workflow</h2>
      {/* You can add the form or any other elements needed to add the workflow here */}
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default AddWorkflow
