const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);

const button = document.querySelector('header button');

button.addEventListener('click', add);
form.addEventListener('change', save);

function add() {

    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExists = nlwSetup.dayExists(today);
    
    if(dayExists) {
        alert("Dia já incluso 🚫");
        return;
    }

    alert('Adicionado com sucesso ✅');
    nlwSetup.addDay(today);
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

/* const data = {
    run:['01-01', '01-02', '01-03'],
    water:['01-04', '01-06','01-08'],
    food:['01-05', '01-07','01-09'],
    sleep:['01-01', '01-02'],
    dogWalker:['01-05', '01-07'],
    snack:['01-04', '01-06']
}*/

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
nlwSetup.setData(data);
nlwSetup.load();