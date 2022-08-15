class Storage {

    static addNoteToStorage(newNote){
        //Executing the "get Notes From Storage()" function and transferring the data with the return to the "notes" variable
        let notes = this.getNotesFromStorage();

        // We combined the new data with the data from the "getNotesFromStorage()" function and added it to the LocalStorage database.
        notes.push(newNote);
        localStorage.setItem("notes",JSON.stringify(notes));
    }
    static getNotesFromStorage(){
        let notes;
    
        if (localStorage.getItem("notes") === null) {
            notes = []; // If our "notes" key is empty, we initialize the array as empty
        }
        else {
            // If our "notes" key is array full, we split the data into two with Json.parse.
            // The data we separated with the return operation has been sent
            notes = JSON.parse(localStorage.getItem("notes"));    
        }
        return notes;
    }
    static deleteNoteFromStorage(noteTitle){
      //Executing the "get Notes From Storage()" function and transferring the data with the return to the "notes" variable
        let notes = this.getNotesFromStorage();
        // splice
        notes.forEach(function(note,index){
            if(note.title === noteTitle) { //If the title of the note from the "project.js" file and the data from localstorage are equal
                notes.splice(index,1); //Deleted data with splice function
            }
        });
    // adding our new array to localstorage database
        localStorage.setItem("notes",JSON.stringify(notes));    
    
    }
    static clearAllNotesFromStorage(){
        //notes key deleted so "notes" key and data is deleted
        localStorage.removeItem("notes");
        
    }

}
