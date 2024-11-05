 function createCard(title, channel, views, currentvideoduration, totalduration) {

    // Update the title
    document.querySelector(".title").textContent = title;

    // Update the channel name
    document.querySelector(".name").textContent = channel;

    // Update the views with formatting
    let d = document.querySelector(".views");
    if (views >= 1000000) {
      views = (views / 1000000).toFixed(1) + "M"; // Format to millions
    } else if (views >= 1000) {
      views = (views / 1000).toFixed(1) + "K"; // Format to thousands
    }
    d.textContent = views; // Set the formatted views

    // Update the current video duration
    document.querySelector(".time").textContent = currentvideoduration;

    // Update the total video duration
    document.querySelector(".duration").textContent = totalduration;
  }

  // Create a card with the specified values
  createCard("Tailwind CSS in one Video | Sigma Web Development Course - Tutorial #98", "CodeWithHarry", 560000, "7:00", "31:22");
