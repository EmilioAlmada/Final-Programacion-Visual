const reserv = document.getElementById('reserv');
const button = document.getElementById('submit');

var i = 0;

let reservaItem = {
    name:'',
    surname:'',
    guests:0,
    date:'',
    time:''
}

const handleChange = e => {
    const field = e.target.name
    const value = e.target.value
    reservaItem[field] = value.toString()
}

const addReservation = (e) => {
    e.preventDefault()
    renderReservations()
}

const cancelReservation = (id) => {
    let element = document.getElementById(id);
    element.remove()
}

function renderReservations(){
    let div = document.createElement('div');
    div.className='reservation-list';
    div.id = i;
    ul = document.createElement('ul');
    ul.innerHTML = `<li class="record">Nombre: ${reservaItem.name}</li><li class="record">Apellido: ${reservaItem.surname}</li><li class="record">Invitados: ${reservaItem.guests}</li><li class="record">Fecha: ${reservaItem.date}</li><li class="record">Hora: ${reservaItem.time}</li><li class="button-record"><a class="record-button" onclick="cancelReservation(${i})">cancelar</a></li>`;
    div.appendChild(ul)
    reserv.appendChild(div);
    i++;
}