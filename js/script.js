// Function to calculate the volume and surface area of a cylinder
function calculateVSA() {
  const radius = parseFloat(document.getElementById('radius').value);
  const height = parseFloat(document.getElementById('height').value);
  const volume = Math.PI * radius**2 * height
  const surfaceArea = 2 * Math.PI * radius * height + 2 * Math.PI * radius**2

  // Rounding the volume and surface area to two decimal places
  const roundedVolume = volume.toFixed(2);
  const roundedSurfaceArea = surfaceArea.toFixed(2);

  // Displays the result
  document.getElementById("output").innerText = "The Volume of the cylinder with: " + radius + " (cm) radius, and " + height + " (cm) height, is " + roundedVolume + ", and the surface area is " + roundedSurfaceArea + "cm^2.";

  // Shows the snackbar with the calculation result
  showSnackbar("Volume: " + roundedVolume + ", Surface Area: " + roundedSurfaceArea);

  // Add the calculation to the recent history
  addRecentCalculation("Volume: " + roundedVolume + ", Surface Area: " + roundedSurfaceArea);
}

// Function to display the snackbar
function showSnackbar(message) {
  var snackbarContainer = document.querySelector('#snackbar');
  var data = {
    message: message,
    timeout: 5000 // 5 seconds
  };
  snackbarContainer.MaterialSnackbar.showSnackbar(data);
}

// Function to add a recent calculation to the history
function addRecentCalculation(calculation) {
  var recentCalculations = document.getElementById('recentCalculations');
  var listItem = document.createElement('li');
  listItem.classList.add('mdl-menu__item');
  listItem.textContent = calculation;
  recentCalculations.appendChild(listItem);
}
