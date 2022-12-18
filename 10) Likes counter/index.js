let likeBtn = document.querySelector(".likeButton");
let dislikeBtn = document.querySelector(".dislikeButton");
let likesCount = document.querySelector('.likes')
let dislikesCount = document.querySelector(".dislikes");
let dislikes = 0;
let likes = 0;

likeBtn.addEventListener('click', ()=> {
    likesCount.textContent = ++likes
})
dislikeBtn.addEventListener("click", ()=> {
    dislikesCount.textContent = ++dislikes
});