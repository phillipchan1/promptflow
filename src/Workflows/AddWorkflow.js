// import React from "react"
import React, { useState } from "react"
import { db } from "../firebase"
import { doc, setDoc, addDoc, collection } from "firebase/firestore"
import { auth } from "../firebase"

export const addWorkflow = async (prompt) => {
  const user = auth.currentUser.uid
  return await addDoc(collection(db, "workflows"), {
    prompt,
    user: user,
  })
}

function AddWorkflow({ onClose }) {
  const [prompt, setPrompt] = useState("")

  const handleAddWorkflow = async () => {
    await addWorkflow(prompt)
    onClose()
  }

  return (
    <div>
      <h3>Add Workflow</h3>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <button onClick={handleAddWorkflow}>Add Workflow</button>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default AddWorkflow
