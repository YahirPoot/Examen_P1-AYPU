class Paciente {
    constructor(nombre, edad, genero, telefono, diagnostico) {
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
      this.telefono = telefono;
      this.diagnostico = diagnostico;
    }

}

class RegistroPacientes {
    constructor() {
      this.pacientes = [];
    }

    agregarPaciente(paciente) {
      this.pacientes.push(paciente);
    }

    buscarNombrePaciente(nombre) {
      const resultados = [];
  
      const buscarRecursivamente = (pacientes) => {
        if (pacientes.length === 0) {
          return;
        }
  
        const pacienteActual = pacientes[0];
        const restoPacientes = pacientes.slice(1);
  
        if (pacienteActual.nombre === nombre) {
          resultados.push(pacienteActual);
        }
  
        buscarRecursivamente(restoPacientes);
      };
  
      buscarRecursivamente(this.pacientes);
      return resultados;
    }
  
    buscarDiagnosticoPaciente(diagnostico) {
      const resultados = [];
  
      const buscarRecursivamente = (pacientes) => {
        if (pacientes.length === 0) {
          return;
        }
  
        const pacienteActual = pacientes[0];
        const restoPacientes = pacientes.slice(1);
  
        if (pacienteActual.diagnostico === diagnostico) {
          resultados.push(pacienteActual);
        }
  
        buscarRecursivamente(restoPacientes);
      };
  
      buscarRecursivamente(this.pacientes);
      return resultados;
    }

    listarPacientes() {
        return this.pacientes;
    }

    eliminarPacientePorNombre(nombre) {
        this.pacientes = this.pacientes.filter(
          (paciente) => paciente.nombre !== nombre
        );
    }

    calcularNumeroTotalDePacientes() {
        return this.pacientes.length;
    }

    calcularEdadPromedioDePacientes() {
        const totalPacientes = this.pacientes.length;
        if (totalPacientes === 0) {
          return 0;
        }
    
        const sumaEdades = this.pacientes.reduce(
          (acumulador, paciente) => acumulador + paciente.edad,
          0
        );
        return sumaEdades / totalPacientes;
    }
}

