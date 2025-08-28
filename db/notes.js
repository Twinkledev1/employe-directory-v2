/**
 * @typedef Note
 * @property {number} id - The unique identifier for the note.
 * @property {string} text - The content of the note.
 */

const notes = [
    {
      id: 1,
      text: "Pariatur deserunt esse ullamco exercitation.",
    },
    {
      id: 2,
      text: "Duis voluptate officia non officia id est ut enim deserunt sit id consequat laboris.",
    },
    {
      id: 3,
      text: "Deserunt velit sint nulla pariatur velit deserunt laborum minim anim enim ex exercitation veniam.",
    },
    {
      id: 4,
      text: "Consectetur dolor ullamco eiusmod officia fugiat exercitation magna cupidatat et sunt.",
    },
    {
      id: 5,
      text: "Est exercitation reprehenderit aute sint amet nostrud.",
    },
    {
      id: 6,
      text: "Incididunt amet cillum aliqua dolor do tempor non qui dolore adipisicing aute cillum aute do.",
    },
    {
      id: 7,
      text: "Sit consequat adipisicing veniam officia veniam do mollit laborum laboris pariatur elit in esse.",
    },
    {
      id: 8,
      text: "Ut in ut est adipisicing elit proident exercitation ullamco sunt.",
    },
    {
      id: 9,
      text: "Quis ipsum ipsum adipisicing ea sint voluptate magna veniam elit pariatur in.",
    },
    {
      id: 10,
      text: "Ad aliqua reprehenderit consectetur consequat nostrud.",
    },
  ];
  
  export function getNotes() {
    return notes;
  }
  
  /**
   * @param {number} id - the ID of the note to find
   * @returns {Note} the note with the given ID
   * @returns {undefined} if no note with the given ID exists
   */
  export function getNoteById(id) {
    return notes.find(note => note.id === parseInt(id));
  }
  
  /**
   * Creates a note with the given text and appends it into `notes`.
   * The ID of the created note is one greater than the ID of the last note.
   * @param {string} text - the text of the note to add
   * @returns {Note} the newly created note
   */
  export function addNote(text) {
    const newId = notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1;
    const newNote = {
      id: newId,
      text: text
    };
    notes.push(newNote);
    return newNote;
  }