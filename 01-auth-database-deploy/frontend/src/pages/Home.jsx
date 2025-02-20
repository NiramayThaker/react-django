import { React, useEffect, useState } from 'react'
import api from '../api'

function Home() {

  const [notes, setNotes] = useState([])
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  
  useEffect(() => {
    getNotes();
  }, [])

  const getNotes = () => {
    api.get("/api/notes/")
    .then(res => {
      (setNotes(res.data), console.log(res.data));
    })
    .catch(err => {
      alert(err);
    })
  }

  const deleteNote = (id) => {
    api.delete(`/api/notes/delete/${id}`)
    .then(res => {
      if(res.status === 204) alert("Note deleted successfully");
      else alert("Error deleting note");
      getNotes
    })
    .catch(err => alert(err))
  }

  const createNote = (e) => {
    e.preventDefault();
    api.post("/api/notes/", {title, content})
    .then(res => {
      if(res.status === 201) alert("Note created successfully");
      else alert("Error creating note");
    }).catch(err => {
      alert(err);
    })
    getNotes();
  }

  return (
    <div>
      <div>
        <h2>Notes</h2>

      </div>
      <div>
        <h2>Notes</h2>
        <form onSubmit={createNote}>
          <label htmlFor="title">Title</label>
          <br/>
          <input id="title" value={title} name="title" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />

          <br/>
          <label htmlFor="Contene">Content</label>
          <br/>
          <textarea id="Content" name="Content" value={content} placeholder="Content" onChange={(e) => setContent(e.target.value)} required />

          <br/>
          <br/>
          <button value="submit" type="submit">Create Note</button>
        </form>
      </div>
    </div>
  )
}

export default Home