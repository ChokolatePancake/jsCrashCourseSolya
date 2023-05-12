let cars = [];
let carTable = document.querySelector('#car-table tbody');
const add = document.getElementById('add');
const searchList = document.getElementById('unic-models');
const searchBtn = document.getElementById('search');
const searchQ = document.getElementById('search-q');
const clear = document.getElementById('delete');

function saveCars () {
    saveCarsToCookie();
}
function saveCarsToCookie () {
    const carsJSON = JSON.stringify(cars);

    document.cookie = `carsData=${encodeURIComponent(carsJSON)}`

}

function renderCarTable() {
    carTable.innerHTML = '';
    cars.forEach(function (car) {
        carTable.innerHTML += `<tr><th scope="row">${car.id}</th>
                                <td>${car.model}</td>
                                <td>${car.year}</td>
                                <td type="color">${car.color}</td>
                                <td>${car.status ? 'Yes' : 'No'}</td>
                                <td>${car.price}</td>
                                <td>${car.date}</td>
                                <td>${car.carBody}</td>
                                </tr>` ;
    })
}

function loadCarsFromCookies() {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('carsData='))
        .split('=')[1];
    if (cookieValue) {
        cars = JSON.parse(decodeURIComponent(cookieValue));
        renderCarTable(); } }

function renderCarTable() {
    carTable.innerHTML = '';
    cars.forEach(function (car) {
        carTable.innerHTML += `<tr><th scope="row">${car.id}</th>
                                <td>${car.model}</td>
                                <td>${car.year}</td>
                                <td type="color">${car.color}</td>
                                <td>${car.status ? 'Yes' : 'No'}</td>
                                <td>${car.price}</td>
                                <td>${car.date}</td>
                                <td>${car.carBody}</td>
                                </tr>` ;
    })
}

window.addEventListener('load', loadCarsFromCookies)

function Error(item) {
    if(item) {
        item.style.borderColor = '#ff0000';
        item.addEventListener('input', function () {
            item.style.borderColor = '';
        })
    }else {
        console.error("Element id error")
    }
}

add.addEventListener('click',function () {
    let model = document.getElementById('model').value;
    let year = document.getElementById('year').value;
    let color = document.getElementById('color').value;
    let status = document.getElementById('status').checked;
    let price = document.getElementById('price').value;
    let carBody = document.getElementById('carBody').value;
    let date = document.getElementById('date').value

    if(model.trim() == '') {
        Error(document.getElementById('model'));
        return;
    }
    if(year.trim() == '' || year > new Date().getFullYear()) {
        Error(document.getElementById('year'));
        return;
    }
    if(price <= 0) {
        Error(document.getElementById('price'));
        return;
    }
    if(new Date(date) > new Date()) {
        Error(document.getElementById('date'));
        return;
    }
    if(year > new Date(date).getFullYear()) {
        Error(document.getElementById('date'));
        Error(document.getElementById('year'));
        return;
    }

    const car = {
        id: cars.length + 1,
        model: model,
        year: year,
        color: color,
        status: status,
        price: price,
        carBody: carBody,
        date: date
    }

    carTable.innerHTML += `<tr><th scope="row">${car.id}</th>
                                <td>${car.model}</td>
                                <td>${car.year}</td>
                                <td type="color">${car.color}</td>
                                <td>${car.status ? 'Yes' : 'No'}</td>
                                <td>${car.price}</td>
                                <td>${car.date}</td>
                                <td>${car.carBody}</td>
                                </tr>` ;
    cars.push(car);
    renderCarTable();
    saveCars();

    if(!searchList.querySelector(`option[value="${car.model.toLowerCase()}"]`)) {
        const option = document.createElement('option');
        option.value = car.model.toLowerCase();
        searchList.appendChild(option);
    }
    document.getElementById('model').value = '';
    document.getElementById('year').value = '';
    document.getElementById('price').value = '';
    document.getElementById('color').value = '';
    document.getElementById('status').checked = false;
    document.getElementById('bodyType').value = 'sedan';
    document.getElementById('dateOfPurchase').value = '';
})

searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const searchValue = searchQ.value.trim().toLowerCase();
    carTable.innerHTML = '';
    if(searchValue.length >= 2) {
        const matching = cars.filter(function (car) {
            return
            car.model.toLowerCase().includes(searchValue);
        })
    }
    if(searchValue != '') {
        cars.forEach(function (car) {
            if(car.model.toLowerCase().includes(searchValue)) {
                carTable.innerHTML += `<tr><th scope="row">${car.id}</th>
                                <td>${car.model}</td>
                                <td>${car.year}</td>
                                <td type="color">${car.color}</td>
                                <td>${car.status ? 'Yes' : 'No'}</td>
                                <td>${car.price}</td>
                                <td>${car.date}</td>
                                <td>${car.carBody}</td>
                                </tr>` ;
            }
        });
    } else {
        renderCarTable();
    }
    }
)

clear.addEventListener('click', function () {
    carTable.innerHTML = '';
    saveCars();
})