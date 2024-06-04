document.getElementById('add-employee-btn').addEventListener('click', function() {
  document.getElementById('employee-modal').classList.remove('hidden');
});

// Hide modal
document.getElementById('close-modal').addEventListener('click', function() {
  document.getElementById('employee-modal').classList.add('hidden');
});

// Handle form submission
document.getElementById('employee-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Get input values
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const position = document.getElementById('position').value;
  // Add your code to handle the employee data
  console.log(`Name: ${name}, Age: ${age}, Position: ${position}`);
  // Hide the modal
  document.getElementById('employee-modal').classList.add('hidden');
  // Clear the form
  document.getElementById('employee-form').reset();
});