var trangChu_data = '';
var khamPha_data = '';
var veChungtoi_data = '';
var albumAnh_data = '';

fetch(`./pages/trang-chu.html`)
    .then(response => response.text())
    .then(data => {
        let main = document.querySelector('.main');
        trangChu_data = data;
    });
fetch(`./pages/kham-pha.html`)
    .then(response => response.text())
    .then(data => {
        let main = document.querySelector('.main');
        khamPha_data = data;
    });
fetch(`./pages/ve-chung-toi.html`)
    .then(response => response.text())
    .then(data => {
        let main = document.querySelector('.main');
        veChungtoi_data = data;
    });
fetch(`./pages/album-anh.html`)
    .then(response => response.text())
    .then(data => {
        let main = document.querySelector('.main');
        albumAnh_data = data;
    });

function domMaincontent(thisElement) {
    if (!thisElement) return;
    let li = document.querySelectorAll('.nav li');
    li.forEach((li) => {
        li.classList.remove('active');
    });
    thisElement.classList.add('active');
    localStorage.setItem('namePage', thisElement.classList[0]);

    if (thisElement.classList.contains('trang-chu')) {
        document.querySelector('.main').innerHTML = trangChu_data;
    }
    if (thisElement.classList.contains('kham-pha')) {
        document.querySelector('.main').innerHTML = khamPha_data;
    }
    if (thisElement.classList.contains('ve-chung-toi')) {
        document.querySelector('.main').innerHTML = veChungtoi_data;
    }
    if (thisElement.classList.contains('album-anh')) {
        document.querySelector('.main').innerHTML = albumAnh_data;
    }
    document.title = localStorage.getItem('namePage').replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}
if(localStorage.getItem('namePage') == null || localStorage.getItem('namePage') == ''){
    localStorage.setItem('namePage', 'trang-chu');
}
setTimeout(() => {
    domMaincontent(document.querySelector(`.${localStorage.getItem('namePage')}`));
}, 50);