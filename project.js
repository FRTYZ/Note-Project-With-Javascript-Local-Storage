// All input and div selected
const form = document.getElementById("note-form");
const titleElement = document.querySelector("#title");
const contentElement = document.querySelector("#content");
const reminderElement = document.querySelector("#reminder");
const photoElement = document.querySelector("#notephoto");
const categoryElement = document.querySelector("#category");
const cardcol = document.querySelector(".card-columns");
const clear = document.getElementById("clear-notes");
const filter = document.querySelector("#filter");
const nav = document.querySelector(".nav");

// eventListeners() function was run
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addNote);
    document.addEventListener("DOMContentLoaded", function () {
        // When uploaded all data, UI class sent data to Storage get data
        let notes = Storage.getNotesFromStorage();
        UI.loadAllNotes(notes);
    });

    cardcol.addEventListener("click", deleteNote);
    clear.addEventListener("click", clearAllNotes);
    filter.addEventListener("keyup", filterNote);
    nav.addEventListener("click", navFilter);

}
function addNote(e) {
    const title = titleElement.value;
    const content = contentElement.value;
    const reminder = reminderElement.value.replace("T", " ")
    const category = categoryElement.value;

    if (title === "" || content === "") {
        // Error
        UI.displayMessages("You need fill required input...", "danger");
    }
    else {
        // New Note
        const newNote = new Note(title, content, reminder, category);

        UI.addNoteToUI(newNote); // Add note to UI. sent data
        Storage.addNoteToStorage(newNote); // Add note to Storage. sent data

        UI.displayMessages("note successfully added...", "success"); // sent alert message
    }
    // İnputs cleaned after uploaded data
    UI.clearInputs(titleElement, reminderElement, contentElement, categoryElement);

    e.preventDefault();
}

function deleteNote(e) {

    // target clicked in ".card-columns" class checked
    if (e.target.id === "delete-note") {
        UI.deleteNoteFromUI(e.target); // sent target the UI class
        
        // Sending title of note clicked on storage class. deleting by this title
        Storage.deleteNoteFromStorage(e.target.parentElement.children[0].textContent);

        UI.displayMessages("note successfully deleted...", "success");

    }

}
function clearAllNotes() {
    if (confirm(" Are you sure to all data want delete ?")) {
        // running its two function
        UI.clearAllNotesFromUI();
        Storage.clearAllNotesFromStorage();
    }
}
function filterNote(e) {
    // Target value sent UI class for filter
    UI.filterNotes(e.target.value.toLowerCase());
}

function navFilter(e) {
    // Target textContent sent UI class for navfilter
    UI.NavNoteFilter(e.target.textContent)
}



