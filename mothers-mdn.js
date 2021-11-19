const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here
const mydata = JSON.parse(catString);
for(i=0;i<mydata.length;i++){
  
  if (i === mydata.length - 1) {
          motherInfo += mydata[i].name + ' e.';
        } else if (i < mydata.length - 1) {
          motherInfo += mydata[i].name + ',';
        }
 const kid = mydata[i]['kittens'];
 for(j=0;j<kid.length;j++){
total++;
   if(kid[j].gender === 'm'){
    male++;
  }
   kittenInfo=`total de gatos: ${total} e total de machos ${male} e 
 femeas ${total - male}`;
 }

}



// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    