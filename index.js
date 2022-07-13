// alert("Khalsa JS");
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addText");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});




function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = "";
 
  notesObj.forEach(function (element, index) {
    html += `
     <div class="noteCard mx-2 my-2 " style="width: 17rem;">
     <div class="card-body" >
       <h5 class="card-title">Note ${index + 1}</h5>
       <p class="card-text">${element}</p>
       <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete Node</button>
     </div>
   
   </div>`;
});
   let notesElem = document.getElementById("notes");


  if (notesObj.length != 0) {
      //console.log("if" + notesObj.length);
      notesElem.innerHTML = html;
    }

    
   else {
    
        notesElem.innerHTML =`There to Show "Add a Note" From Add Note Button Above.`;
      }
  }




function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let searchTxt=document.getElementById("searchTxt");
searchTxt.addEventListener('input', function()
{let inputval=searchTxt.value.toLowerCase();
  let noteCard= document.getElementsByClassName("noteCard");
  
  Array.from(noteCard).forEach(function(element)
  {
    let cardTxt=element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputval))
    {
      element.style.display="block";
    }
    else{
      element.style.display="none";
    }
  })
})
// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){
//     let inputVal = search.value.toLowerCase();
//     // console.log('Input event fired!', inputVal);
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block";
//         }
//         else{
//             element.style.display = "none";
//         }
//          console.log(cardTxt);
//     })
// })




// // console.log("Welcome to notes app. This is app.js");
// // // showNotes();

// // // If user adds a note, add it to the localStorage
// // let addBtn = document.getElementById("addBtn");
// // addBtn.addEventListener("click", function(e) {
// //   let addTxt = document.getElementById("addText");
// //   let notes = localStorage.getItem("notes");
// //   if (notes == null) {
// //     notesObj = [];
// //   } else {
// //     notesObj = JSON.parse(notes);
// //   }
// //   notesObj.push(addTxt.value);
// //   localStorage.setItem("notes", JSON.stringify(notesObj));
// //   addTxt.value = "";
// // //   console.log(notesObj);
// // //   showNotes();
// // });

// // // Function to show elements from localStorage
// // function showNotes() {
// //   let notes = localStorage.getItem("notes");
// //   if (notes == null) {
// //     notesObj = [];
// //   } else {
// //     notesObj = JSON.parse(notes);
// //   }
// //   let html = "";
// //   notesObj.forEach(function(element, index) {
// //     html += `
// //             <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
// //                     <div class="card-body">
// //                         <h5 class="card-title">Note ${index + 1}</h5>
// //                         <p class="card-text"> ${element}</p>
// //                         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
// //                     </div>
// //                 </div>`;
// //   });
// //   let notesElm = document.getElementById("notes");
// //   if (notesObj.length != 0) {
// //     notesElm.innerHTML = html;
// //   } else {
// //     notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
// //   }
// // }

// // // Function to delete a note
// // function deleteNote(index) {
// // //   console.log("I am deleting", index);

// //   let notes = localStorage.getItem("notes");
// //   if (notes == null) {
// //     notesObj = [];
// //   } else {
// //     notesObj = JSON.parse(notes);
// //   }

// //   notesObj.splice(index, 1);
// //   localStorage.setItem("notes", JSON.stringify(notesObj));
// //   showNotes();
// // }
