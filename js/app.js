const personas = [
    new Persona('Carlos', 'Pérez'),
    new Persona('Juan', 'Lara')
];

function mostrarPersonas() {
    let texto = '';
    for(let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}