import React from "react"
import { useState } from "react"
import AddWorkflow from "./AddWorkflow"

function WorkflowHome() {
  const [showAddWorkflow, setShowAddWorkflow] = useState(false)

  const handleAddWorkflow = () => {
    setShowAddWorkflow(true)
  }

  const handleClose = () => {
    setShowAddWorkflow(false)
  }

  return (
    <div>
      Workflows
      <button onClick={handleAddWorkflow}>Add Workflow</button>
      {showAddWorkflow && <AddWorkflow onClose={handleClose} />}
    </div>
  )
}

export default WorkflowHome
