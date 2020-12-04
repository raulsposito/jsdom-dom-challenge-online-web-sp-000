const counter = document.querySelector("#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const comments = document.querySelector("list");
const commentForm = document.querySelector("#comment-form");

minus.addEventListener("click", decrementCounter);
plus.addEventListener("click", incrementCounter);
commentForm.addEventListener("submit", displayComment); 

function decrementCounter() {
    const currentCount = parseInt(counter.textContent, 10);
    if (currentCount > 0) {
        counter.textContent =  `${currentCount - 1}`;
    }
}

function incrementCounter() {
    const currentCount = parseInt(counter.textContent, 10);
    counter.textContent =  `${currentCount + 1}`;
}

function displayComment(event) {
    event.preventDefault();

    const commentFormData = new FormData(event.target);
    const commentText = commentFormData.get("comment");

    const comment = document.createElement("p");
    comment.textContent = commentText;
    comments.append(comment);

    event.target.reset();
}

