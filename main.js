// getting all circles using class name "circ_style"
let circles = document.getElementsByClassName('circ_style');

// adding event listeners to all circles created in the prev list
for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener('click', () => toggleCircleBorder(circles[i]));
  circles[i].addEventListener('click', () => getCoordinates(circles[i]));
}

// toggles border of the circle by clicking on it
function toggleCircleBorder(circle) {
  
  // removes border if circle has a border
  if (circle.classList.contains('circ_border')) {
    circle.classList.remove("circ_border");
  } 

  // adds border if circle does not have a border
  else {
    circle.classList.add("circ_border");
  }
};


// Displays co-ordinates of the last circle clicked on
function getCoordinates(circle) {
  // retreiving coordinates of circle on svg
  const cx = circle.getAttribute('cx');
  const cy = circle.getAttribute('cy');

  //scaling coordinates
  xCoordinate = cx/40;
  yCoordinate = (400-cy)/40

  // displaying text on html page
  let newText = "Last Point Clicked: (" + xCoordinate + ", " + yCoordinate + ")";
  document.getElementById("new_text").innerHTML = newText

  
};

// adds new circles to the svg according to input co-ordinates
function addCircle() {

  // retreiving co-ordinates from input
  let xVal = document.querySelector('#x-val').value;
  let yVal = document.querySelector('#y-val').value;

  // scaling coordinates to fit svg
  const xCoord = xVal * 40
  const yCoord = 400 - yVal * 40
  console.log(xCoord);
  console.log(yCoord);

  // adding new circle element
  let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.classList.add("circ_style");
  circle.setAttribute("cx", xCoord);
  circle.setAttribute("cy", yCoord);
  let svg = document.getElementById("svg_style");
  svg.appendChild(circle);

  // adding event listeners for new circles
  circle.addEventListener('click', () => toggleCircleBorder(circle));
  circle.addEventListener('click', () => getCoordinates(circle));
};

document.getElementById("subButton").addEventListener('click', addCircle);

















