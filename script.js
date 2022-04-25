const replacePromotedPosts=()=> {
    let posts = document.querySelector(".rpBJOHq2PR60pnwJlUyP0");
    let randomPost = Math.floor(1 + Math.random() * posts.childElementCount);
    let child = document.querySelector('.rpBJOHq2PR60pnwJlUyP0>div:nth-child(' + randomPost + ')');
    const promotedDivs = document.getElementsByClassName("promotedlink");
    if (child) {
        for (const div of promotedDivs) {
            div.parentNode.replaceChild(child, div);
        }
    }
}
setInterval(replacePromotedPosts, 200);

// class="rpBJOHq2PR60pnwJlUyP0"