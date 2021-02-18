alert('Helo');

// ----- NEEDED VARIABLES -----
let modal = document.getElementById('post-modal');
let close_btn = document.querySelector('.close');
let form_submit = document.getElementById('form');
let add_btn = document.querySelector(".add-btn");
let post_count = document.getElementById("article-count");
let articles_holder = document.getElementById("articles");
let articles = document.querySelectorAll("#articles article");

// ----- ALL EVENT LISTENERS -----
add_btn.addEventListener('click', showModal);
close_btn.addEventListener('click', closeModal);
form_submit.addEventListener('submit', submitPost);


// ----- EVENT FUNCTIONS -----
// Displays the modal on the UI
function showModal(e) {
    e.preventDefault();

    modal.style.display = "block";
}

// Closes the modal from the UI
function closeModal() {
    modal.style.display = "none";
}

// Takes inputs from modal, and pushes them to the UI
function submitPost(event) {
    event.preventDefault();

    // Variables to store inputs
    let title = document.getElementById('post-title').value;
    let post_body = document.getElementById('post-body').value;

    // Creating e to contain new posts
    let article = document.createElement('article');
        article.className += "article top-article";

    let article = document.createElement('article');
        article.className += "article top-article";




    // <article class="article top-article">
    //     <section class="top-text-content">
    //         <h2 class="journal_title"><span class="date">13/05/23:</span> Spatulas</h2>
    //         <p>
    //             Yesterday I went to the store and got some much-needed <a href="https://www.youtube.com/watch?v=2XbCWmY0eqY">spatulas!</a> (What better way to say I love myself than to buy myself a spatula?)
    //         </p>
    //     </section>

    //     <div class="top-img-box">
    //         <img src="./assets/images/spatula.gif" alt="spatulas">
    //     </div>
    // </article>

}

// DETERMIMING COUNT BASED ON POSTED ARTICLE COUNT
if (articles.length === 0) {
    post_count.textContent = "0 posts.";
} else if (articles.length === 1) {
    post_count.textContent = "1 post.";
} else {
    post_count.textContent = `${articles.length} posts.`;
}
