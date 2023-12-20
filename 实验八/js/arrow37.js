const backtop = document.querySelector(".backtop");
// 当网页向下滑动 20px 出现"返回顶部" 按钮
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backtop.style.display = "block";
    } else {
        backtop.style.display = "none";
    }
});


// 点击按钮，返回顶部
backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});