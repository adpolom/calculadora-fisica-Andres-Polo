function formula_de_velocidad(d, t) {
    if (t === 0) return "Error: el tiempo no puede ser cero.";
    if (isNaN(d) || isNaN(t)) return "Error: Ingresa valores numéricos válidos.";
    return d / t;
}

function formula_de_aceleracion(vf, vi, t) {
    if (t === 0) return "Error: el tiempo no puede ser cero.";
    if (isNaN(vf) || isNaN(vi) || isNaN(t)) return "Error: Ingresa valores numéricos válidos.";
    return (vf - vi) / t;
}

function formula_de_fuerza(m, a) {
    if (isNaN(m) || isNaN(a)) return "Error: Ingresa valores numéricos válidos.";
    return m * a;
}

function formula_de_trabajo(f, d, theta) {
    if (isNaN(f) || isNaN(d) || isNaN(theta)) return "Error: Ingresa valores numéricos válidos.";
    const rad = theta * Math.PI / 180;
    return f * d * Math.cos(rad);
}

function formula_de_energia_cinetica(m, v) {
    if (isNaN(m) || isNaN(v)) return "Error: Ingresa valores numéricos válidos.";
    return 0.5 * m * v * v;
}

function formula_de_energia_potencial(m, g, h) {
    if (isNaN(m) || isNaN(g) || isNaN(h)) return "Error: Ingresa valores numéricos válidos.";
    return m * g * h;
}

function formula_de_densidad(m, V) {
    if (V === 0) return "Error: el volumen no puede ser cero.";
    if (isNaN(m) || isNaN(V)) return "Error: Ingresa valores numéricos válidos.";
    return m / V;
}

function formula_de_presion(F, A) {
    if (A === 0) return "Error: el área no puede ser cero.";
    if (isNaN(F) || isNaN(A)) return "Error: Ingresa valores numéricos válidos.";
    return F / A;
}

function formula_de_carga_electrica(I, t) {
    if (isNaN(I) || isNaN(t)) return "Error: Ingresa valores numéricos válidos.";
    return I * t;
}

function formula_de_ley_de_ohm(I, R) {
    if (isNaN(I) || isNaN(R)) return "Error: Ingresa valores numéricos válidos.";
    return I * R;
}

// Mostrar formulario dinámico
document.getElementById("magnitud").addEventListener("change", function () {
    const seleccion = this.value;
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");

    formulario.innerHTML = "";
    resultado.textContent = "";

    let camposHTML = "";

    switch (seleccion) {
        case "velocidad":
            camposHTML = `
                <input type="number" id="d" placeholder="Distancia" />
                <input type="number" id="t" placeholder="Tiempo" />
                <button onclick="calcular('velocidad')">Calcular</button>`;
            break;

        case "aceleracion":
            camposHTML = `
                <input type="number" id="vf" placeholder="Velocidad final" />
                <input type="number" id="vi" placeholder="Velocidad inicial" />
                <input type="number" id="t" placeholder="Tiempo" />
                <button onclick="calcular('aceleracion')">Calcular</button>`;
            break;

        case "fuerza":
            camposHTML = `
                <input type="number" id="m" placeholder="Masa" />
                <input type="number" id="a" placeholder="Aceleración" />
                <button onclick="calcular('fuerza')">Calcular</button>`;
            break;

        case "trabajo":
            camposHTML = `
                <input type="number" id="f" placeholder="Fuerza" />
                <input type="number" id="d" placeholder="Distancia" />
                <input type="number" id="theta" placeholder="Ángulo (grados)" />
                <button onclick="calcular('trabajo')">Calcular</button>`;
            break;

        case "ecinetica":
            camposHTML = `
                <input type="number" id="m" placeholder="Masa" />
                <input type="number" id="v" placeholder="Velocidad" />
                <button onclick="calcular('ecinetica')">Calcular</button>`;
            break;

        case "epotencial":
            camposHTML = `
                <input type="number" id="m" placeholder="Masa" />
                <input type="number" id="g" placeholder="Gravedad (usa 9.8)" />
                <input type="number" id="h" placeholder="Altura" />
                <button onclick="calcular('epotencial')">Calcular</button>`;
            break;

        case "densidad":
            camposHTML = `
                <input type="number" id="m" placeholder="Masa" />
                <input type="number" id="V" placeholder="Volumen" />
                <button onclick="calcular('densidad')">Calcular</button>`;
            break;

        case "presion":
            camposHTML = `
                <input type="number" id="F" placeholder="Fuerza" />
                <input type="number" id="A" placeholder="Área" />
                <button onclick="calcular('presion')">Calcular</button>`;
            break;

        case "carga":
            camposHTML = `
                <input type="number" id="I" placeholder="Corriente" />
                <input type="number" id="t" placeholder="Tiempo" />
                <button onclick="calcular('carga')">Calcular</button>`;
            break;

        case "ohm":
            camposHTML = `
                <input type="number" id="I" placeholder="Corriente" />
                <input type="number" id="R" placeholder="Resistencia" />
                <button onclick="calcular('ohm')">Calcular</button>`;
            break;

        default:
            camposHTML = "";
    }

    formulario.innerHTML = camposHTML;
});

function calcular(tipo) {
    const resultado = document.getElementById("resultado");

    switch (tipo) {
        case "velocidad": {
            const d = parseFloat(document.getElementById("d").value);
            const t = parseFloat(document.getElementById("t").value);
            const res = formula_de_velocidad(d, t);
            resultado.textContent = isNaN(res) ? res : `Velocidad = ${res.toFixed(2)} m/s`;
            break;
        }
        case "aceleracion": {
            const vf = parseFloat(document.getElementById("vf").value);
            const vi = parseFloat(document.getElementById("vi").value);
            const t = parseFloat(document.getElementById("t").value);
            const res = formula_de_aceleracion(vf, vi, t);
            resultado.textContent = isNaN(res) ? res : `Aceleración = ${res.toFixed(2)} m/s²`;
            break;
        }
        case "fuerza": {
            const m = parseFloat(document.getElementById("m").value);
            const a = parseFloat(document.getElementById("a").value);
            const res = formula_de_fuerza(m, a);
            resultado.textContent = isNaN(res) ? res : `Fuerza = ${res.toFixed(2)} N`;
            break;
        }
        case "trabajo": {
            const f = parseFloat(document.getElementById("f").value);
            const d = parseFloat(document.getElementById("d").value);
            const theta = parseFloat(document.getElementById("theta").value);
            const res = formula_de_trabajo(f, d, theta);
            resultado.textContent = isNaN(res) ? res : `Trabajo = ${res.toFixed(2)} J`;
            break;
        }
        case "ecinetica": {
            const m = parseFloat(document.getElementById("m").value);
            const v = parseFloat(document.getElementById("v").value);
            const res = formula_de_energia_cinetica(m, v);
            resultado.textContent = isNaN(res) ? res : `Energía Cinética = ${res.toFixed(2)} J`;
            break;
        }
        case "epotencial": {
            const m = parseFloat(document.getElementById("m").value);
            const g = parseFloat(document.getElementById("g").value);
            const h = parseFloat(document.getElementById("h").value);
            const res = formula_de_energia_potencial(m, g, h);
            resultado.textContent = isNaN(res) ? res : `Energía Potencial = ${res.toFixed(2)} J`;
            break;
        }
        case "densidad": {
            const m = parseFloat(document.getElementById("m").value);
            const V = parseFloat(document.getElementById("V").value);
            const res = formula_de_densidad(m, V);
            resultado.textContent = isNaN(res) ? res : `Densidad = ${res.toFixed(2)} kg/m³`;
            break;
        }
        case "presion": {
            const F = parseFloat(document.getElementById("F").value);
            const A = parseFloat(document.getElementById("A").value);
            const res = formula_de_presion(F, A);
            resultado.textContent = isNaN(res) ? res : `Presión = ${res.toFixed(2)} Pa`;
            break;
        }
        case "carga": {
            const I = parseFloat(document.getElementById("I").value);
            const t = parseFloat(document.getElementById("t").value);
            const res = formula_de_carga_electrica(I, t);
            resultado.textContent = isNaN(res) ? res : `Carga Eléctrica = ${res.toFixed(2)} C`;
            break;
        }
        case "ohm": {
            const I = parseFloat(document.getElementById("I").value);
            const R = parseFloat(document.getElementById("R").value);
            const res = formula_de_ley_de_ohm(I, R);
            resultado.textContent = isNaN(res) ? res : `Voltaje = ${res.toFixed(2)} V`;
            break;
        }
        default:
            resultado.textContent = "Selecciona una magnitud válida.";
    }
}
