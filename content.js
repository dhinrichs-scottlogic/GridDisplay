function showStarGrid() {
var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.style.position = 'absolute';
svg.style.top = '0';
svg.style.left = '0';
svg.style.width = '100%';
svg.style.height = '100%';
svg.style.zIndex = '1000';
document.body.appendChild(svg);

// Create the first line (from top left to bottom right)
var line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line1.setAttribute('x1', '0');
line1.setAttribute('y1', '0');
line1.setAttribute('x2', '100%');
line1.setAttribute('y2', '100%');
line1.setAttribute('stroke', 'blue');
line1.setAttribute('stroke-width', '1');
// line1.setAttribute('stroke-dasharray', '3');
// line1.setAttribute('stroke-dashoffset', '0');

// Create the second line (from top right to bottom left)
var line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line2.setAttribute('x1', '100%');
line2.setAttribute('y1', '0%');
line2.setAttribute('x2', '0%');
line2.setAttribute('y2', '100%');
line2.setAttribute('stroke', 'blue');
line2.setAttribute('stroke-width', '1');
// line2.setAttribute('stroke-dasharray', '3');
// line2.setAttribute('stroke-dashoffset', '0');

var line3 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line3.setAttribute('x1', '50%');
line3.setAttribute('y1', '0%');
line3.setAttribute('x2', '50%');
line3.setAttribute('y2', '100%');
line3.setAttribute('stroke', 'blue');
line3.setAttribute('stroke-width', '1');

var line4 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
line4.setAttribute('x1', '0%');
line4.setAttribute('y1', '50%');
line4.setAttribute('x2', '100%');
line4.setAttribute('y2', '50%');
line4.setAttribute('stroke', 'blue');
line4.setAttribute('stroke-width', '1');


// Add the lines to the SVG
svg.appendChild(line1);
svg.appendChild(line2);
svg.appendChild(line3);
svg.appendChild(line4);
}

!function(e,t){
    let i=document.createElement("div"),
    d=window.innerWidth-document.documentElement.clientWidth;
    i.setAttribute("style",
        `
        position:fixed;
        display:grid;box-sizing: border-box;
        border:1px solid red; 
        width:calc(100vw - ${d}px);
        height:100vh;
        top:0;
        left:0;
        `),document.body.append(i);
        let firstCount = 1;
    for(let l=0;l<10;l++){
        let r=document.createElement("div");
        r.setAttribute("style",
            "border-bottom:1px solid grey; display:flex; ");
            // r.setAttribute("value", firstCount);
            if(l != 0){r.textContent = firstCount;}
            firstCount++;
        let secondCount = 1;
        for(let o=0;o<10;o++){
            let n=document.createElement("div");
            n.setAttribute("style",
            "border-right:1px solid red; width:100%; ");
            // n.setAttribute("value", secondCount);
            if(firstCount==2){n.textContent = secondCount;}
            r.append(n);
            secondCount++;
            // firstCount = secondCount;
        }
        i.append(r);
        }

    }
    (10,10);

    const onStatusChange = (message, sender, sendResponse) => {
  if (message.extensionState!==undefined) {
    extensionState = message.extensionState;
    if (extensionState) {
      showStarGrid();
    } else {
      location.reload();
    }
  }
};

browser.runtime.sendMessage({ action: "getState" }, response => {
  extensionState = message.extensionState;
  if (extensionState) {
      showStarGrid();
  }
});