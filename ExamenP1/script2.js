const registroPacientes = new RegistroPacientes();

const opcionSelect = document.getElementById("opcion");
const inputSection = document.getElementById("input-section");
const ejecutarButton = document.getElementById("ejecutar");
const resultadoDiv = document.getElementById("resultado");

opcionSelect.addEventListener("change", () => {
    const opcion = opcionSelect.value;
  
    inputSection.style.display = "none";
  
    if (opcion === "1") {
      inputSection.innerHTML = `
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre"><br>
          <label for="edad">Edad:</label>
          <input type="number" id="edad"><br>
          <label for="genero">Género:</label>
          <input type="text" id="genero"><br>
          <label for="telefono">Número de teléfono:</label>
          <input type="text" id="telefono"><br>
          <label for="diagnostico">Diagnóstico médico:</label>
          <input type="text" id="diagnostico"><br>
      `;
      inputSection.style.display = "block";
    } else if (opcion === "2") {
      inputSection.innerHTML = `
          <label for="nombre">Nombre del paciente a buscar:</label>
          <input type="text" id="nombre"><br>
      `;
      inputSection.style.display = "block";
    } else if (opcion === "3") {
      inputSection.innerHTML = `
          <label for="diagnostico">Diagnóstico médico a buscar:</label>
          <input type="text" id="diagnostico"><br>
      `;
      inputSection.style.display = "block"; 
    } else if (opcion === "4") {
        inputSection.innerHTML = `
        <label for="nombre">Nombre del paciente a eliminar:</label>
        <input type="text" id="nombre"><br>
    `;
    inputSection.style.display = "block";
    } else if (opcion === "5" || opcion === "6") {

    }
});

ejecutarButton.addEventListener("click", () => {
    const opcion = opcionSelect.value;
    resultadoDiv.innerHTML = "";
  
    if (opcion === "1") {
        const nombre = document.getElementById("nombre").value.trim();
        const edad = parseInt(document.getElementById("edad").value.trim());
        const genero = document.getElementById("genero").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const diagnostico = document.getElementById("diagnostico").value.trim();
    
        if (!nombre || !edad || !genero || !telefono || !diagnostico) {
          resultadoDiv.textContent = "Todos los campos son obligatorios.";
          return;
        }
    
        const paciente = new Paciente(nombre, edad, genero, telefono, diagnostico);
        registroPacientes.agregarPaciente(paciente);
        resultadoDiv.textContent = "Paciente agregado exitosamente.";

        const pacienteAgregadoDiv = document.createElement("div");
        pacienteAgregadoDiv.textContent = `Paciente agregado: ${nombre} Edad: ${edad} Genero: ${genero} Telefono: ${telefono} Diagnostico: ${diagnostico}`;
        resultadoDiv.appendChild(pacienteAgregadoDiv)
    } else if (opcion === "2") {
      const nombre = document.getElementById("nombre").value;
      const pacientesEncontrados = registroPacientes.buscarNombrePaciente(
        nombre
      );
      mostrarResultados(pacientesEncontrados);
    } else if (opcion === "3") {
      const diagnostico = document.getElementById("diagnostico").value;
      const pacientesEncontrados = registroPacientes.buscarDiagnosticoPaciente(
        diagnostico
      );
      mostrarResultados(pacientesEncontrados);
    } else if (opcion === "4") {
        const nombre = document.getElementById("nombre").value.trim();
        if (!nombre) {
        resultadoDiv.textContent = "El campo de nombre es obligatorio.";
        return;
        }

        registroPacientes.eliminarPacientePorNombre(nombre);
        resultadoDiv.textContent = `Paciente "${nombre}" eliminado exitosamente.`;
    } else if (opcion === "5") {
        const numeroTotalPacientes = registroPacientes.calcularNumeroTotalDePacientes();
        const edadPromedioPacientes = registroPacientes.calcularEdadPromedioDePacientes();
        const listaPacientes = registroPacientes.listarPacientes();
        resultadoDiv.innerHTML = `
        Número total de pacientes: ${numeroTotalPacientes}<br>
        Edad promedio de pacientes: ${edadPromedioPacientes}<br>
        Lista de pacientes: <br>
        <ul>
        ${listaPacientes.map((paciente) => `<li>${JSON.stringify(paciente)}</li>`).join('')}
        </ul>
        `;
    }
});

function mostrarResultados(resultados) {
    if (resultados.length === 0) {
      resultadoDiv.textContent = "No se encontraron resultados.";
      return;
    }
  
    const ul = document.createElement("ul");
    resultados.forEach((paciente) => {
      const li = document.createElement("li");
      li.textContent = `Nombre: ${paciente.nombre}, Edad: ${paciente.edad}, Género: ${paciente.genero}, Teléfono: ${paciente.telefono}, Diagnóstico: ${paciente.diagnostico}`;
      ul.appendChild(li);
    });
    resultadoDiv.appendChild(ul);
}
  