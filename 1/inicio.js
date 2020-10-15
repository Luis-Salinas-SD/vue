//& Creador de textos  con vanilla
const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");
const tareas = [];

form.onsubmit = (evento) => {
    evento.preventDefault();
    tareas.push(input.value);

    var li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = null;
};

//& Creador de textos  con vanilla

