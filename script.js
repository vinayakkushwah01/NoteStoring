
let place = document.getElementById("notesContainer");
console.log(place)
const fetchData = () => {
  let i = 0;
  while (typeof (localStorage.key(i)) !== "object") {
    console.log("llopStart")
    let key = localStorage.key(i);
    let value = localStorage.getItem(key)
    console.log(key, value)
    let div = document.createElement("div");
    div.setAttribute('class', 'maindiv');
    div.setAttribute('id', key);
    div.innerHTML =
      `
        <div id="notesContainer" >
          <div class="notename">
          <h2>${key}</h2>
          
           </div>   
           <div class="textArea">
          
               <p> ${value}</p>
              <button onclick="deletenode(event)" width="20px"> Delete</button>
             </div>
        </div>
 `;
    place.appendChild(div);

    i++;
    console.log("llopend")
  }
  console.log("llopdont Start")
}
fetchData();

const getText = () => {
  let note = document.getElementById("noteInput").value;
  let name = document.getElementById("name").value;
  // console.log(note)
  // console.log(name)
  localStorage.setItem(name, note);

}


var form = document.getElementById("formId");

let deletenode = (event) => {
  console.log(event);
  let deleteNode = event.srcElement.parentElement.parentElement.parentElement.id;
  localStorage.removeItem(deleteNode);

  console.log(deleteNode);
  location.reload()
}