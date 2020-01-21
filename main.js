const body = document.querySelector('.main_div');

let y;
for (x = 0; x < 10000; x++){
    const div = document.createElement('div');
    div.addEventListener('mouseover', function (e) {
        e.target.style.background = 'red';
    });
    
    div.addEventListener('touchmove', function (e) {
        e.target.style.background = 'red';
    });

    div.setAttribute('class', "unChecked");
    body.appendChild(div);
}
