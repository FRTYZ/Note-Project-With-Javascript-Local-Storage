#Note Project With Javascript ES6 Local Storage

## Hello Everyone
This is the project that I have been planning to develop for a long time in my new project. Although it is not similar to the Google Keep application, I tried to make it in the same function.

Developed with Javascript ES6 OOP

### Project Content
* Search process between notes
* Filtering by category
* Add Note (pop-up)
* Delete multiple notes
* Delete not


https://user-images.githubusercontent.com/58048971/186950433-4d13879c-93aa-4ecd-aaae-f312fe265be2.mp4



## Note Page (index.html)
![alt text](https://github.com/FRTYZ/Note-Project-With-Javascript-Local-Storage/blob/main/img/ss/1.png?raw=true)

## Add Note (Pop-up)
![alt text](https://github.com/FRTYZ/Note-Project-With-Javascript-Local-Storage/blob/main/img/ss/2.png?raw=true)

## Search process between notes
![alt text](https://github.com/FRTYZ/Note-Project-With-Javascript-Local-Storage/blob/main/img/ss/3filter.png?raw=true)

## Filtering by category
![alt text](https://github.com/FRTYZ/Note-Project-With-Javascript-Local-Storage/blob/main/img/ss/4nav.PNG?raw=true)

## Alert function
![alt text](https://github.com/FRTYZ/Note-Project-With-Javascript-Local-Storage/blob/main/img/ss/5error.png?raw=true)
![alt text](https://github.com/FRTYZ/Note-Project-With-Javascript-Local-Storage/blob/main/img/ss/6success.png?raw=true)

# Source Code
Necessary explanations are written as a comment line in the codes.

#### index.html
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">

  <title>Take Note Project</title>
  <style>
    .justify-content-center li a {
      border-bottom: 0.2rem solid red;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="card row">
      <nav class="navbar stick-top navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="img/logo.png" width="50px">
          Keep Project</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
          <form class="form-inline my-2 my-lg-8">
            <div class="form-group col-md-8">
              <div class="input-group-prepend">
                <div class="input-container">

                  <input class="form-control" type="text" name="filter" id="filter" placeholder="Search a note"
                    size="100">
                </div>
          </form>
        </div>
      </nav>
      <div id="dateTimeforreminder">
      </div>
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
                aria-controls="collapseOne">
                Take a Note (Add a note)
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse false" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              <form id="note-form" name="form">
                <div class="form-group">
                  <label for="exampleFormControlInput1">Title</label>
                  <input type="text" class="form-control" id="title">
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Note</label>
                  <textarea class="form-control" id="content" rows="3"></textarea>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlSelect1">Category</label>
                  <select class="form-control" id="category" name="category">
                    <option>Normal</option>
                    <option>Things to remember</option>
                    <option>İmportant</option>
                    <option>Recipe</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Reminder (Optional)</label>
                  <input type="datetime-local" class="form-control" id="reminder">
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <hr>
      </div>
      <div class="card-body">
        <hr>
        <div class="row">
          <div class="col-md-12">
            <h4 class="card-title" id="todos-title">Notes</h4>
            <a id="clear-notes" class="btn btn-dark" href="#">Clear All Note</a>

            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Normal</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Things to remember</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">İmportant</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Recipe</a>
              </li>
            </ul>

            <hr />
            <div class="card-columns">
              <!--  <div class="card" style="display:none">                                      
                <div class="card-body">                    
                  <img class="card-img-top" src="img/unnamed.jpg"  height="250px" width="350px">
                  <h5 class="card-title">Card title that wraps to a new line</h5>    
                  <p class="card-text"># Category</p> 
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>                   
                  <p class="card-text"><img src="img/bell-fill.svg">
                  <small class="text-muted">Reminder</small></p>
                  <a href="#" id = "delete-note" class = "btn btn-danger">Delete Note</a>
                </div>
              </div>   -->
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
  <script src="js/jquery-3.4.1.min.js"></script>
  <script src="js/bootstrap.min.js"></script>

  <!-- Required JS files included -->
  <script src="ui.js"></script>
  <script src="storage.js"></script>
  <script src="note.js"></script>
  <script src="project.js"></script>

</body>

</html>
```
#### İmportant Note
Js files must be included in our "index.html" page
```
<!-- Required JS files included -->
  <script src="ui.js"></script>
  <script src="storage.js"></script>
  <script src="note.js"></script>
  <script src="project.js"></script>
```


#### note.js
* General Class
```
class Note {
    constructor(title, content, reminder, category) {
        // Created our constructive function and provided data exchange
        this.title = title;
        this.content = content;
        this.reminder = reminder;
        this.category = category;
    }
}
```

#### project.js
* File to which general operations are directed and sent

```
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
```

#### storage.js
Necessary actions for Local Storage
```
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

```

#### ui.js
Necessary actions for UI 
```
class UI {

    static addNoteToUI(newNote) {    
        const noteList = document.querySelector(".card-columns");
        /*
            It took the values from our parameters that came with the "newNote" function and transferred 
            our data to the card div via "Template Literal"   
        */

        noteList.innerHTML += `
            <div class="card-container">      
            <div class="card">                                      
                        <div class="card-body">  
                        <h5 class="card-title">${newNote.title}</h5>    
                        <p class="card-text">#${newNote.category}</p> 
                        <p class="card-text">${newNote.content}</p>                   
                        <p class="card-text"><img src="img/bell-fill.svg">
                        <small class="text-muted">${newNote.reminder}</small></p>
                        <a href="#" id = "delete-note" class = "btn btn-danger">Delete Note</a>
                        </div>
                    </div>     
                </div>
            `;
    }
    static clearInputs(element1, element2, element3, element4) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
        element4.value = "";
    }
    static displayMessages(message, type) {
        // We chose our diva to show the alert div at the relevant location
        const accordion = document.querySelector("#accordion");

        // alert div created
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;

        accordion.appendChild(div); // added alert div

        setTimeout(function () {
            div.remove();

        }, 1000);
    }
    
    static loadAllNotes(notes) {
        // in this static feature we take data from ".card-columns" and load data with the foreach loop
        const noteList = document.querySelector(".card-columns");

        notes.forEach(function (note) {
            noteList.innerHTML += `
             <div class="card-container">   
             <div class="card">                                                  
                <div class="card-body">         
                  <h5 class="card-title">${note.title}</h5>    
                  <p class="card-text">#${note.category}</p> 
                  <p class="card-text">${note.content}</p>                   
                  <p class="card-text" style="${note.reminder ? `display:inline-block` : `display:none`}"><img src="img/bell-fill.svg">
                  <small class="text-muted">${note.reminder}</small></p><br/>
                  <a href="#" id = "delete-note" class = "btn btn-danger">Delete Note</a>
                </div>
              </div>
              </div>
             `;
        });

    }
    static deleteNoteFromUI(element) {
        // To delete data from the UI, we take and delete the biggest parent element of our target from project.js
        element.parentElement.parentElement.remove();
    }
    static clearAllNotesFromUI() {

        const noteList = document.querySelector(".card-columns");

        // With the while loop, the largest parents of our data are taken and deleted individually
        while (noteList.firstElementChild !== null) { 
            noteList.firstElementChild.remove();
        }
    }
    static filterNotes(value) {
        //We got the general div class of cards in the "noteFiltList" variable, then we got the data based on the most basic div that makes up the cards
        const noteFiltList = document.querySelectorAll(".card-columns .card-container");

        const filterValue = value;

        noteFiltList.forEach(function (listItem) {
            const text = listItem.textContent.toLowerCase();

            /*
            The search has been carried out with the IndexOf function, our value from the "project.js" file. 
            If our index value is -1, we have changed the element's style Attribute properties
            */ 
            if (text.indexOf(filterValue) === -1) {                
                listItem.setAttribute("style", "display : none !important")
            }
            else {
                listItem.setAttribute("style", "display : block")
            }
        });
    }

    static NavNoteFilter(navvalue) {        

        const noteFiltList = document.querySelectorAll(".card-columns .card-container");
        const filterValue = navvalue;

        noteFiltList.forEach(function (listItem) {
            const text = listItem.textContent;

            if (text.indexOf(filterValue) === -1) {
                listItem.setAttribute("style", "display : none !important")
            }
            else {
                listItem.setAttribute("style", "display : block")
            }
        });
    }
}

```
Good Encodings





