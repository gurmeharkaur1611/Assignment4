document.addEventListener("DOMContentLoaded", () => {
    // Add student ID and name
    const studentInfo = document.getElementById("studentInfo");
    studentInfo.textContent = "Student ID: 200596150 - Gurmehar Kaur";
  
    const getLyricBtn = document.getElementById("getLyricBtn");
    const output = document.getElementById("output");
  
    getLyricBtn.addEventListener("click", () => {
      fetch("https://taylor-swift-lyrics-eaia.onrender.com/get")
        .then((response) => response.json())
        .then((data) => {
          output.innerHTML = `
            <p>"${data.quote}"</p>
            <p><strong>Song:</strong> ${data.song}</p>
            <p><strong>Album:</strong> ${data.album}</p>
          `;
        })
        .catch((error) => {
          console.error("Error fetching lyric:", error);
          output.textContent = "Sorry, something went wrong!";
        });
    });
  });
  