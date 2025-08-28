import express from "express";
import { getNotes, getNoteById, addNote } from "#db/notes";

const notesRouter = express.Router();

// GET /notes - returns all notes
notesRouter.get("/", (req, res) => {
  const notes = getNotes();
  res.status(200).json(notes);
});

// POST /notes - creates a new note
notesRouter.post("/", (req, res) => {
  // Check if request has a body
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send("Request must have a body.");
  }

  // Check if text is provided
  if (!req.body.text) {
    return res.status(400).send("New note must have text.");
  }

  // Create the note and return it
  const newNote = addNote(req.body.text);
  res.status(201).json(newNote);
});

// GET /notes/:id - returns a specific note by ID
notesRouter.get("/:id", (req, res) => {
  const note = getNoteById(req.params.id);
  
  if (!note) {
    return res.status(404).send("Note not found.");
  }

  res.status(200).json(note);
});

export default notesRouter;