let leftHouse = false;
let atBusStop = false;
let markerPosition = 0;
let busArrivesIn = 15;
let busDelay = 0;
let currColorClass = "change-color-on-time";
let addedArriveAtBusStopDelay = false;
const MARKER_MULTIPLIER = 12;
const INITIAL_BUS = 15;
const INITIAL_WALK = 10;
const MAX_DISTANCE = 256;
const BUS_FREQUENCY = 20;

const PRE_LEAVE_EVENTS = [
  {
    content: "Use the bathroom",
    time: 2,
  },
  {
    content: "Check the stove",
    time: 1,
  },
  {
    content: "Make your bed",
    time: 2,
  },
  {
    content: "Refill your water bottle",
    time: 1,
  },
  {
    content: "Contemplate life",
    time: 3,
  },
  {
    content: "REALLY contemplate life",
    time: 30,
  },
  {
    content: "Change your jacket",
    time: 2,
  },
  {
    content: "Change your entire outfit",
    time: 7,
  },
  {
    content: "Trim your nails",
    time: 3,
  },
  {
    content: "Put your laundry away",
    time: 10,
  },
  {
    content: "Reorganize your stuffed animal collection",
    time: 45,
  },
  {
    content: "Go through old yearbooks",
    time: 25,
  },
  {
    content: "Start a new TV show",
    time: 30,
  },
  {
    content: "Rearrange your bedroom",
    time: 30,
  },
  {
    content: "Start filing your taxes",
    time: 45,
  },
  {
    content: "Take out the garbage",
    time: 5,
  },
  {
    content: "Stare at the wall",
    time: 5,
  },
  {
    content: "Jump for joy",
    time: 1,
  },
  {
    content: "Update your phone",
    time: 2,
  },
  {
    content: "Pick a new favourite colour",
    time: 3,
  },
  {
    content: "Do some online shopping",
    time: 10,
  },
  {
    content: "Make coffee",
    time: 5,
  },
  {
    content: "Look for the sunglasses that have been missing for months",
    time: 12,
  },
  {
    content: "Dance",
    time: 30,
  },
  {
    content: "Find your wallet",
    time: 5,
  },
  {
    content: "Think a little",
    time: 5,
  } // 26
];

const POST_LEAVE_EVENTS = [
  {
    content: "Trip over a rock",
    time: 2,
  },
  {
    content: "Answer your phone",
    time: 10,
  },
  {
    content: "Answer ALL of your texts",
    time: 15,
  },
  {
    content: "Buy a pack of tissue",
    time: 2,
  },
  {
    content: "Buy coffee",
    time: 5,
  },
  {
    content: "Inspect a happy hour sign outside a restaurant and take a photo of it",
    time: 2,
  },
  {
    content: "Apply lip balm",
    time: 1,
  },
  {
    content: "Take a photo of a beautiful tree",
    time: 2,
  },
  {
    content: "Wonder what your life purpose is",
    time: 30,
  },
  {
    content: "Text your friend that you're on your way",
    time: 1,
  },
  {
    content: "Wonder if that tree was always there",
    time: 2,
  },
  {
    content: "Ask the people waiting in line about what they're waiting for",
    time: 3,
  },
  {
    content: "Capture footage of geese crossing the street",
    time: 2,
  },
  {
    content: "Check your email",
    time: 2,
  },
  {
    content: "Walk down the dead-end street just to see what's there",
    time: 7,
  },
  {
    content: "Pick up candy for your friend",
    time: 5,
  },
  {
    content: "Think about your upcoming haircut",
    time: 1,
  },
  {
    content: "Check the weather app",
    time: 2,
  },
  {
    content: "Pass by the new matcha place and buy a drink",
    time: 45,
  },
  {
    content: "Really, REALLY ask yourself whether you prefer still or sparkling if both were the same price",
    time: 20,
  },
  {
    content: "Have fun",
    time: 3,
  },
  {
    content: "Decide if that cloud looks more like a dog or sheep",
    time: 5,
  },
  {
    content: "Check that you have your keys",
    time: 10,
  },
  {
    content: "Spot a squirrel",
    time: 3,
  },
  {
    content: "Cross the street unnecessarily just to feel something",
    time: 3,
  } // 25
];

const POST_BUS_STOP_EVENTS = [
  {
    content: "Do 100 jumping jacks",
    time: 2,
  },
  {
    content: "Delete some photos",
    time: 3,
  },
  {
    content: "Look at the sky",
    time: 15,
  },
  {
    content: "Look through your notes app",
    time: 2,
  },
  {
    content: "Watch video without audio",
    time: 2,
  },
  {
    content: "Read your messages but don't reply",
    time: 2,
  },
  {
    content: "Inspect your pockets",
    time: 1,
  },
  {
    content: "Do some stretches",
    time: 1,
  },
  {
    content: "Think about the tree you saw earlier",
    time: 1,
  },
  {
    content: "Question if you're at the right bus stop",
    time: 2,
  },
  {
    content: "Read the synopsis for a movie",
    time: 2,
  },
  {
    content: "Read the first few paragraphs of what seems to be a 10,000 word blog post",
    time: 3,
  },
  {
    content: "Text your friend you're almost there",
    time: 1,
  },
  {
    content: "Check what day of the week your birthday lands on this year",
    time: 5,
  },
  {
    content: "Start a new note to self about what groceries to get",
    time: 5,
  },
  {
    content: "Sway in the wind",
    time: 10,
  },
  {
    content: "Update your phone wallpaper",
    time: 10,
  },
  {
    content: "Open an old photo app for the first time in years and feel wistful about the passage of time",
    time: 15,
  },
  {
    content: "Listen to a podcast at 2x speed",
    time: 30,
  },
  {
    content: "Start scrolling",
    time: 60,
  },
  {
    content: "Record the leaves dancing in the breeze",
    time: 2,
  },
  {
    content: "People-watch",
    time: 3,
  },
  {
    content: "Notice the blob beneath you at the bus stop that looks like a heart",
    time: 1,
  },
  {
    content: "Adjust your shirt collar",
    time: 1,
  },
  {
    content: "Check if you have your wallet",
    time: 10,
  } // 25
];

function startCatchingBus() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("bus-screen").style.display = "block";
  // update the destination
  const dreamDestination = document.getElementById("dream-destination").value;
  if (dreamDestination) {
    document.getElementById("bus-screen-destination").innerText = dreamDestination;
  }
}

function updateScene(time, button, x, y, walkTimeUpdated) {
  updateMarker();
  updateWalkTime(walkTimeUpdated);
  updateRandom();
  updateBusPosition();
  updateBusArrival();
  // this happens at the end so that the bus timing class is correct before animation plays
  animateTimeDecrease(time, button, x, y);
}

function leave(e) {
  leftHouse = true;
  document.getElementById("run").style.display = "block";
  document.getElementById("walk").style.display = "block";
  document.getElementById("leave").style.display = "none";
  markerPosition += 2;
  busArrivesIn -= 1;
  updateScene(1, "leave", e.clientX, e.clientY, walkTimeUpdated=false);
}

function run(e) {
  markerPosition += 3;
  busArrivesIn -= 1;
  updateScene(1, "run", e.clientX, e.clientY, walkTimeUpdated=true);
}

function walk(e) {
  markerPosition += 2;
  busArrivesIn -= 1;
  updateScene(1, "walk", e.clientX, e.clientY, walkTimeUpdated=true);
}

function random(e) {
  const t = document.getElementById("random").getAttribute("data-time");
  busArrivesIn -= t;
  updateScene(t, "random", e.clientX, e.clientY, walkTimeUpdated=false);
}

function updateRandom() {
  const r = document.getElementById("random");
  let c;
  if (!leftHouse) {
    c = PRE_LEAVE_EVENTS[Math.floor(Math.random() * PRE_LEAVE_EVENTS.length)];
  } else if (!atBusStop) {
    c = POST_LEAVE_EVENTS[Math.floor(Math.random() * POST_LEAVE_EVENTS.length)];
  } else {
    c = POST_BUS_STOP_EVENTS[Math.floor(Math.random() * POST_BUS_STOP_EVENTS.length)];
  }
  r.innerHTML = c['content'] + " <span id='random-time'>(" + c['time'] + " min)";
  r.setAttribute("data-time", c['time']);
}

function doNothing(e) {
  busArrivesIn -= 1;
  updateScene(1, "do-nothing", e.clientX, e.clientY, walkTimeUpdated=false);
}

function updateMarker() {
  if (atBusStop) return;
  const updatedNum = Math.min(markerPosition * MARKER_MULTIPLIER, MAX_DISTANCE);
  document.getElementById("you").style.marginLeft = updatedNum.toString() + "px";
  if (updatedNum >= MAX_DISTANCE) {
    atBusStop = true;
    document.getElementById("run").style.display = "none";
    document.getElementById("walk").style.display = "none";
  }
}

function updateWalkTime (walkTimeUpdated) {
  const l = document.getElementById("min-walk-counter");
  let n = INITIAL_WALK - Math.floor((markerPosition * MARKER_MULTIPLIER / MAX_DISTANCE) * INITIAL_WALK);
  n = Math.max(0, n);
  l.innerText = n.toString();

  // also animate walking timing update
  if (walkTimeUpdated) {
    hideWalkTiming();
    setTimeout(function() {
      showWalkTiming();
    }, 1);
  }
}

function animateTimeDecrease(time, button, x, y) {
  const s = "-" + time.toString() + " min";
  const label = document.createElement("div");
  x -= 96; // offset to avoid occlusion
  y -= 32; // offset to avoid occlusion
  label.style.left = x.toString() + "px";
  label.style.top = y.toString() + "px";
  label.classList.add("time-animation");
  label.innerText = s;
  document.body.appendChild(label);
  setTimeout(function() {
    label.remove();
  }, 3000);

  // animate bus timing update
  hideBusTiming();
  setTimeout(function() {
    showBusTiming();
  }, 1);
}

function updateBusPosition() {
  const b = document.getElementById("bus");
  if (busArrivesIn < 1 && atBusStop) {
    b.style.opacity = 1;
  } else if (busArrivesIn < 1) {
    b.style.opacity = 0;
    hideBus();
    setTimeout(function() {
      showBus();
    }, 1);
  } else if (busArrivesIn < 5) {
    b.style.opacity = 1 - (busArrivesIn * 0.2);
  } else {
    b.style.opacity = 0;
  }
}

function hideBusTiming() {
  document.getElementById("bus-time-update").classList.remove(currColorClass);
}

function showBusTiming(){
  document.getElementById("bus-time-update").classList.add(currColorClass);
}

function hideBus() {
  document.getElementById("bus").classList.remove("fade-away");
}

function showBus(){
  document.getElementById("bus").classList.add("fade-away");
}

function hideWalkTiming() {
  document.getElementById("walk-counter-highlight").classList.remove("yellow-highlight");
}

function showWalkTiming(){
  document.getElementById("walk-counter-highlight").classList.add("yellow-highlight");
}

function updateBusArrival() {
  const l = document.getElementById("bus-arrives-in");
  // vary the bus timing!!!
  // get the last class
  let oldClass;
  if (busDelay < 0) {
    oldClass = "change-color-early";
  } else if (busDelay > 0) {
    oldClass = "change-color-delayed";
  } else {
    oldClass = "change-color-on-time";
  }

  // next, update the delay
  const label = document.getElementById("bus-time-update");
  const description = document.getElementById("bus-timeliness");
  const n = Math.random();
  let tempBusDelay = 0;
  if (n < 0.25) {
    tempBusDelay = 1; // bus running late
  } else if (n > 0.75) {
    tempBusDelay = -1; // bus running faster
  }

  // but reset the delay if you missed the bus OR if you catch the bus
  if (busArrivesIn <= 0) {
    tempBusDelay = 0;
    busDelay = 0;
  }

  // but if you just got to the bus stop...sudden 30 min delay
  const holderForDelayAddedYet = addedArriveAtBusStopDelay; // false if delay not added yet
  // IMPORTANT: updates busArrivesIn
  if (atBusStop && !addedArriveAtBusStopDelay) {
    tempBusDelay = 30;
    addedArriveAtBusStopDelay = true; // delay now added, but we remember it was false at the start
  }

  busDelay += tempBusDelay; // updates overall bus delay
  busArrivesIn += tempBusDelay;

  const justArrivedToBusStop = holderForDelayAddedYet !== addedArriveAtBusStopDelay;

  // UPDATE THE BUS ARRIVAL TIME

  // you caught the bus
  if (busArrivesIn <= 0 && atBusStop && !justArrivedToBusStop) {
    busArrivesIn = 0;
    endGame();
  } else if (busArrivesIn <= 0 && !atBusStop) { // bus is there, you are not
    document.getElementById("missed-the-bus").style.visibility = "visible";
    busArrivesIn = BUS_FREQUENCY + (busArrivesIn % 20);
  } else { // the bus isn't there, regardless of if you're there
    // reset the missed bus message
    document.getElementById("missed-the-bus").style.visibility = "hidden";
  }
  // you just arrived to the bus stop...
  if (justArrivedToBusStop) {
    document.getElementById("sudden-delay").style.display = "block";
    document.getElementById("missed-the-bus").style.display = "none";
  } else {
    document.getElementById("sudden-delay").style.display = "none";
    document.getElementById("missed-the-bus").style.display = "block";
  }

  l.innerText = busArrivesIn;

  // use tempBusDelay to generate floating labels
  let s;
  let currDelayClass;
  if (tempBusDelay < 0) {
    s = tempBusDelay.toString() + " min early";
    currDelayClass = "green-text";
  } else if (tempBusDelay > 0) {
    s = "+"+ tempBusDelay.toString() + " min delay";
    currDelayClass = "red-text";
  }

  if (tempBusDelay !== 0) {
    const busTimelinessLocation = document.getElementById("bus-timeliness").getBoundingClientRect();
    const delayLabel = document.createElement("div");
    delayLabel.style.left = busTimelinessLocation.x.toString() + "px";
    delayLabel.style.top = busTimelinessLocation.y.toString() + "px";
    delayLabel.classList.add("time-animation");
    delayLabel.classList.add(currDelayClass);
    delayLabel.innerText = s;
    document.body.appendChild(delayLabel);
    setTimeout(function() {
      delayLabel.remove();
    }, 3000);
  }

  // UPDATE THE BUS DELAY
  if (busDelay < 0) {
    label.classList.remove(oldClass);
    currColorClass = "change-color-early";
    label.classList.add(currColorClass);
    description.innerText = Math.abs(busDelay.toString()) + " min early";
  } else if (busDelay > 0) {
    label.classList.remove(oldClass);
    currColorClass = "change-color-delayed";
    label.classList.add(currColorClass);
    description.innerText = busDelay.toString() + " min late";
  } else {
    label.classList.remove(oldClass);
    currColorClass = "change-color-on-time";
    label.classList.add(currColorClass);
    description.innerText = "On time";
  }
}

function endGame() {
  const b = document.getElementById("bus");
  b.style.opacity = 1;
  document.getElementById("bus-stop").innerText = "❤️";
  document.getElementById("sudden-delay").style.display = "none";
  document.getElementById("missed-the-bus").style.display = "none";
  document.getElementById("caught-the-bus").style.display = "block";
  document.getElementById("run").style.display = "none";
  document.getElementById("walk").style.display = "none";
  document.getElementById("random").style.display = "none";
  document.getElementById("leave").style.display = "none";
  document.getElementById("do-nothing").style.display = "none";
  document.getElementById("replay").style.display = "block";
  document.body.style.backgroundColor = "palegreen";
}

function reset() {
  leftHouse = false;
  atBusStop = false;
  markerPosition = 0;
  busArrivesIn = 15;
  busDelay = 0;
  currColorClass = "change-color-on-time";

  // reset arrive at bus stop delay
  addedArriveAtBusStopDelay = false;

  // reset on your way text
  document.getElementById("bus-stop").innerText = "🚏";
  document.getElementById("missed-the-bus").style.visibility = "hidden";
  document.getElementById("missed-the-bus").style.display = "block";
  document.getElementById("caught-the-bus").style.display = "none";
  document.getElementById("sudden-delay").style.display = "none";

  // update labels
  document.getElementById("bus-arrives-in").innerText = INITIAL_BUS;
  document.getElementById("min-walk-counter").innerText = INITIAL_WALK;
  document.getElementById("you").style.marginLeft = "0";
  const b = document.getElementById("bus")
  b.style.opacity = 0;
  b.classList.remove("fade-away");
  document.getElementById("bus-screen-destination").innerText = "The restaurant";

  // reset buttons for bus screen
  document.getElementById("run").style.display = "none";
  document.getElementById("walk").style.display = "none";
  document.getElementById("replay").style.display = "none";
  document.getElementById("random").style.display = "block";
  document.getElementById("random").innerHTML = "Use the bathroom <span id='random-time'>(2 min)</span>";
  document.getElementById("leave").style.display = "block";
  document.getElementById("do-nothing").style.display = "block";

  // show start screen and change background color
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("bus-screen").style.display = "none";
  document.body.style.backgroundColor = "white";
}

window.addEventListener("load", function(event) {
  const goB = document.getElementById("go");
  const leaveB = document.getElementById("leave");
  const runB = document.getElementById("run");
  const walkB = document.getElementById("walk");
  const randomB = document.getElementById("random");
  const doNothingB = document.getElementById("do-nothing");
  const replay = document.getElementById("replay");
  goB.addEventListener('click', startCatchingBus, false);
  leaveB.addEventListener('click', leave, false);
  runB.addEventListener('click', run, false);
  walkB.addEventListener('click', walk, false);
  randomB.addEventListener('click', random, false);
  doNothingB.addEventListener('click', doNothing, false);
  replay.addEventListener('click', reset, false);
});