header.innerHTML = `
        <div class="logo">
            <img src="../src/img/logo.png" alt="">
        </div>
        <ul class="nav">
            <li onclick = "domMaincontent(this)" class="trang-chu"><a>Trang chủ</a></li>
            <li onclick = "domMaincontent(this)" class="kham-pha"><a>Khám phá</a></li>
            <li onclick = "domMaincontent(this)" class="ve-chung-toi"><a>Về chúng tôi</a></li>
            <li onclick = "domMaincontent(this)" class="album-anh"><a>Album ảnh</a></li>
        </ul>
    `

head.innerHTML += "<link rel='stylesheet' href='./src/css/header.css'>";

let namePage = localStorage.getItem('namePage');
if(namePage == null || namePage == ''){
    namePage = 'trang-chu';
}
var navLink = document.querySelectorAll('.nav li');
navLink.forEach((li) => {
    if (li.classList.contains(namePage)) {
        li.classList.add('active');
    }
});