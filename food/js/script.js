const links = document.querySelectorAll('.link');
const contents = document.querySelectorAll('.content');

let activeLink = document.querySelector('.link.active');
let activeContent = document.querySelector('.content.active');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        activeLink.classList.remove('active');
        links[i].setAttribute('class', 'link active');
        activeLink = links[i];

        activeContent.classList.remove('active');
        contents[i].setAttribute('class', 'content active');
        activeContent = contents[i];
    });
}

// зміна кольору фону при кліку

const list = document.querySelector('.links');
const item1 = document.querySelector('#item-1');
const item2 = document.querySelector('#item-2');
const item3 = document.querySelector('#item-3');

item1.addEventListener('click', () => {
    list.style.backgroundColor = '#4f8307';
    list.classList.remove('links__red');
    list.classList.remove('links__orange');
    list.classList.add('links');
});

item2.addEventListener('click', () => {
    list.style.backgroundColor = '#cf2736';
    list.classList.remove('links');
    list.classList.remove('links__orange');
    list.classList.add('links__red');
});

item3.addEventListener('click', () => {
    list.style.backgroundColor = '#f8790e';
    list.classList.remove('links');
    list.classList.remove('links__red');
    list.classList.add('links__orange');
});