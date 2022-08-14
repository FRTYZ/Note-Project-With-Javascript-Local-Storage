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
