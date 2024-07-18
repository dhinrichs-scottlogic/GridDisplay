// Function to load an SVG file and append it to the document body
async function loadSvg(filename, id) {
  try {
    const response = await fetch(browser.runtime.getURL(filename));
    const svgText = await response.text();
    const div = document.createElement('div');
    div.innerHTML = svgText;
    const svg = div.firstChild;
    svg.id = id; // Add an id for easy reference
    document.body.appendChild(svg);
  } catch (error) {
    console.error(`Error loading SVG (${filename}):`, error);
  }
}

// Function to remove an SVG from the document body by ID
function removeSvg(id) {
  const svg = document.getElementById(id);
  if (svg) {
    svg.remove();
  }
}

// Listen for messages from the popup script and handle them
browser.runtime.onMessage.addListener((message) => {
  const { action, show } = message;
  if (action === 'toggleOverlay1') {
    if (show) {
      loadSvg('star.svg', 'starSVG');
    } else {
      removeSvg('starSVG');
    }
  } else if (action === 'toggleOverlay2') {
    if (show) {
      loadSvg('squares.svg', 'squaresSVG');
    } else {
      removeSvg('squaresSVG');
    }
  }
});