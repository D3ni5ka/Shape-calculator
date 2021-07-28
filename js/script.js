// Задача 1. Сделайте калькулято, который будет находить площадь и периметр квадрата.

let div = document.createElement('div')
let h2 = document.createElement('h2');
h2.innerHTML = 'Задача №1. Калькулятор для квадрата!'
document.body.append(div);
div.appendChild(h2);

let input = document.createElement('input');
div.appendChild(input);
input.setAttribute('placeholder', 'Введите сторону квардата!');
let button = document.createElement('button');
button.innerHTML = 'Кнопка!';
div.appendChild(button);

button.addEventListener('click', function () {
    let p = document.createElement('p');
    p.innerHTML = `Площадь квадрата равна:  ${+input.value * +input.value},
    </br> периметр квадрата равен: ${+input.value * 4}`;
    div.appendChild(p);
})


// Задача 2.


let div2 = document.createElement('div');
let title2 = document.createElement('h2');
title2.innerHTML = 'Задача №2. Калькулятор для периметра!';
document.body.append(div2);
div2.appendChild(title2);


let input2 = document.createElement('input');
input2.setAttribute('placeholder', 'Введите длину!')
let input21 = document.createElement('input');
input21.setAttribute('placeholder', 'Введите ширину!')
let button2 = document.createElement('button')
button2.innerHTML = 'Кнопка!'
div2.append(input2, input21, button2);


button2.addEventListener('click', function () {
    let p = document.createElement('p');
    p.innerHTML = `Площадь прямоугольника равна:  ${+input2.value * +input21.value},
    </br> периметр прямоугольника равен: ${(+input2.value + +input21.value) * 2}`;
    div2.appendChild(p);
})



// Задача 3.
let div3 = document.createElement('div');
let title3 = document.createElement('h2');
title3.innerHTML = 'Задача №3. Калькулятор для круга!'
document.body.append(div3);
div3.appendChild(title3);


let input3 = document.createElement('input');
input3.setAttribute('placeholder', 'Введите радиус');
let button3 = document.createElement('button');
button3.innerHTML = 'Кнопка!';
div3.append(input3, button3);


button3.addEventListener('click', function () {
    let p = document.createElement('p');
    p.innerHTML = `Длина окружности круга равна:  ${2 * +input3.value * Math.PI},
    </br> площадь круга равна: ${Math.PI * (+input3.value * +input3.value)}`;
    div3.appendChild(p);
})



// Задача 4.


let div4 = document.createElement('div');
let title4 = document.createElement('h2');
title4.innerHTML = 'Задача №4. Калькулятор для треугольника!';
document.body.append(div4);
div4.appendChild(title4);


let input4 = document.createElement('input');
input4.setAttribute('placeholder', 'Введите сторону а!');

let input41 = document.createElement('input');
input41.setAttribute('placeholder', 'Введите сторону b!');

let input42 = document.createElement('input');
input42.setAttribute('placeholder', 'Введите сторону c!');


let button4 = document.createElement('button');
button4.innerHTML = 'Кнопка!';
div4.append(input4, input41, input42, button4);


button4.addEventListener('click', function () {
    let out = document.createElement('p');
    let s, p;
    p = (+input4.value + +input41.value + +input42.value) / 2;
    console.log(p)
    s = Math.sqrt(p * (p - +input4.value) * (p - +input41.value) * (p - +input42.value));
    out.innerHTML = s;
    div4.appendChild(out);
})