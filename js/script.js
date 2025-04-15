// Function to fetch random dog data (breed and image)
function fetchDogData() {
  fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
          const imageUrl = data.message;
          const breed = imageUrl.split('/')[4]; // Extract breed from the image URL

          // Set the image and breed text on the page
          document.getElementById('dog-image').src = imageUrl;
          document.getElementById('dog-breed').innerText = `Breed: ${breed.charAt(0).toUpperCase() + breed.slice(1)}`;
      })
      .catch(error => console.log('Error:', error));
}

// Add student ID and name dynamically
document.addEventListener('DOMContentLoaded', () => {
  const studentId = '200596150'; 
  const studentName = 'Gurmehar Kaur'; 
  document.getElementById('student-info').innerText = `Student ID: ${studentId} | Name: ${studentName}`;

  // Fetch dog data when the page loads
  fetchDogData();
});

// Event listener to fetch a new dog on button click
document.getElementById('get-dog-btn').addEventListener('click', fetchDogData);
