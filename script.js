fetch("https://624dc3ad53326d0cfe5231cc.mockapi.io/blog")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const blog = document.querySelector(".blog");
    let i = 0;
    while (i < data.length) {
      const date = document.createElement("p");
      const text = document.createElement("div");
      const likes = document.createElement("div");
      likes.className = "likes";
      const image = document.createElement("img");
      image.setAttribute("src", data[i].image);
      text.textContent = data[i].text;
      const dateFormatted = new Date(data[i].date);
      const czechDate = dateFormatted.toLocaleDateString("cs-CZ");
      date.textContent = "Vytvořeno " + czechDate;
      likes.innerHTML = `
      <div class="likes-thumb"><img src=img/like.png width="30px">${data[i].likes}</div>
      <span class="likes-text">people upvoted</span>`;
      blog.append(date, image, text, likes);
      i++;
    }
  });
