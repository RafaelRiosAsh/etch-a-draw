const body = document.querySelector('.main_div');

let y;
for (y = 0; y < 100; y++){
    const lineDiv = document.createElement('div');
    lineDiv.setAttribute('class', "lineDiv");
    body.appendChild(lineDiv);
    let x;
    for (x = 0; x < 100; x++){
        const div = document.createElement('div');
        div.addEventListener('mouseenter', function (e) {
                e.target.style.background = 'red';
        });
    
        div.setAttribute('class', "unChecked");
        lineDiv.appendChild(div);
    }
}