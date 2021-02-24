// ----- NEEDED VARIABLES -----
let modal = document.getElementById('post-modal');
let close_btn = document.querySelector('.close');
let form_submit_btn = document.querySelector('.submit_btn');
let form_submit = document.getElementById('form');
let add_btn = document.querySelector(".add-btn");
let post_count = document.getElementById("article-count");
let articles_holder = document.getElementById("articles");
let title = document.getElementById('post-title');
let post_body = document.getElementById('post-body');
let upload_btn = document.getElementById("upload_input");

// ----- ALL EVENT LISTENERS -----
add_btn.addEventListener('click', showModal);
close_btn.addEventListener('click', closeModal);
form_submit.addEventListener('submit', submitPost);


// ----- EVENT FUNCTIONS -----
// Displays the modal on the UI
function showModal(e) {
    e.preventDefault();

    modal.style.display = "block";

    // Points user straight where they need to get started with their post
    title.focus();
}

// Closes the modal from the UI
function closeModal() {
    modal.style.display = "none";

    clearInputs();
}

// Takes inputs from modal, and pushes them to the UI
function submitPost(event) {
    event.preventDefault();

    // Variables to store data
    let post_title = title.value;
    let post_content = post_body.value;
    let img_upload_src = upload_btn.value;
    let date = new Date();

    if (!post_title || !post_content || !img_upload_src) {

        form_submit_btn.className += " disabled";

    } else {
    
        // Setting up structure for incoming posts when inputs aren't empty
        let article = document.createElement('article');
            article.className += "article top-article";
            article.innerHTML = `<section class="top-text-content">
                                    <h2 class="journal_title"><span class="date">${date.toLocaleDateString("en-GB")}:</span> ${post_title}</h2>
                                    <p>
                                        ${post_content}
                                    </p>
                                </section>

                                <div class="top-img-box">
                                    <img src="${img_upload_src}" alt="">
                                </div>`;

        // strings together the new content to parent
        articles_holder.prepend(article);

        // Calls for count update
        updateArticleCount();

        // Closes modal
        closeModal();

        // Clears out the just-posted inputs
        clearInputs();

    }
}

// ----- Updating count based on number of posts on UI -----
// Setting default count, due to hard-coded articles already on screen
post_count.textContent = "2 posts.";

function updateArticleCount() {
    let articles = articles_holder.childElementCount;

    if (articles === 0) {
        post_count.textContent = "0 posts.";
    } else {
        post_count.textContent = `${articles} posts.`;
    }
}

// ----- FUNCTION FOR CLEARING INPUTS -----
function clearInputs() {
    document.forms['form'].reset();
}
