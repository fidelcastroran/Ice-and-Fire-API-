let users = [];
const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener("input", (e) => {
  console.log(e.target);
  const value = e.target.value.toLowerCase();
  const cards = document.getElementsByClassName("card");
  for (const card of cards) {
    const isVisible = card.id.toLowerCase().includes(value);
    card.classList.toggle("hide", !isVisible);
  }
});

let book = async () => {
  try {
    let url = "https://www.anapioficeandfire.com/api/books";
    let res = await fetch(url);
    let data = await res.json();
    users = data.map((i) => {
      return {
        bkname: i.name,
        bkisbn: i.isbn,
        bknop: i.numberOfPages,
        bkAuthor: i.authors[0],
        bkPublisher: i.publisher,
        bkReleaseDate: i.released,
      };
    });

    users.forEach((x) => {
      console.log(x);
      let resultEl = document.getElementById("books");
      let result = `<div class="card" id='${x.bkname}'>
       <h5 class="card-title" id="bookTitle"><span class='cBHeading'>Book Title : <span class='cBContent'>${x.bkname}.</h5>
       <p> <span>isbn :</span> <span >${x.bkisbn}.</span></p>
       <p > <span>Author Name : </span> <span >${x.bkAuthor}.</p>
       <p > <span >Publisher Name : </span> <span >${x.bkPublisher}.</p>
       <p > <span >Release Date : </span> <span >${x.bkReleaseDate}.</p>
       <p > <span> Number of Pages : </span> <span >${x.bknop}.</small></p>
        </div>`;

      resultEl.innerHTML += result;
    });
  } catch (err) {
    console.log(err);
  }
};

book();


