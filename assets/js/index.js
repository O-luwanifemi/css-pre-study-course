// ----- NEEDED VARIABLES -----
let modal = document.getElementById('post-modal');
let close_btn = document.querySelector('.close');
let form_submit_btn = document.querySelector('.submit_btn');
let form_submit = document.getElementById('form');
let add_btn = document.querySelector(".add-btn");
let post_count = document.getElementById("article-count");
let articles_holder = document.getElementById("articles");

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
    let date = new Date();

    if (title == '' || post_body == '') {
        form_submit_btn.className += " disabled";
    }
    
    // Setting up structure for incoming posts
    let article = document.createElement('article');
        article.className += "article top-article";
        article.innerHTML = `<section class="top-text-content">
                                <h2 class="journal_title"><span class="date">${date.toLocaleDateString("en-GB")}:</span> ${title}</h2>
                                <p>
                                    ${post_body}
                                </p>
                            </section>

                            <div class="top-img-box">
                                <img src="./assets/images/spatula.gif" alt="spatulas">
                            </div>`;

    // strings together the new content
    articles_holder.prepend(article);

    // Calls for count update
    updateArticleCount();

    // Clears out the just-posted inputs
    document.forms['form'].reset();
}

// ----- Updating count based on number of posts on UI -----
// Setting default count, due to hard-coded articles already on screen
post_count.textContent = "2 posts";

function updateArticleCount() {
    let articles = articles_holder.childElementCount;

    if (articles === 0) {
        post_count.textContent = "0 posts.";
    } else if (articles === 1) {
        post_count.textContent = "1 post.";
    } else {
        post_count.textContent = `${articles} posts.`;
    }
}
