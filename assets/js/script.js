class Propietario {
  constructor(nombrePropietario, direccion, telefono) {
    this.nombrePropietario = nombrePropietario;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  datosPropietario() {
    return `El nombre del propietario es: ${this.nombrePropietario}, su domicilio es: ${this.direccion} y el numero telefonico de contacto es: ${this.telefono} -
      el tipo de animal es un: ${this.tipoMascota} mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`;
  }
}

class Animal extends Propietario {
  constructor(nombrePropietario, direccion, telefono, tipoMascota) {
    super(nombrePropietario, direccion, telefono);
    this.tipoMascota = tipoMascota;
  }

  get tipo() {
    return this.tipo;
  }
}

class Mascota extends Animal {
  constructor(
    nombrePropietario,
    direccion,
    telefono,
    tipoMascota,
    nombreMascota,
    enfermedad
  ) {
    super(nombrePropietario, direccion, telefono, tipoMascota);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  get nombreMascota() {
    return this._nombreMascota;
  }

  set nombreMascota(nuevo_nombreMascota) {
    this._nombreMascota = nuevo_nombreMascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nueva_enfermedad) {
    this._enfermedad = nueva_enfermedad;
  }
}

///evento clic en id boton
let enviar = document.getElementById(`boton_enviar`);
enviar.addEventListener(`click`, registrarInformacion);

function registrarInformacion(event) {
  event.preventDefault();
  const nombrePropietario = document.getElementById(`propietario`).value;
  const telefono = document.getElementById(`telefono`).value;
  const direccion = document.getElementById(`direccion`).value;
  const nombreMascota = document.getElementById(`nombreMascota`).value;
  const tipoMascota = document.getElementById(`tipo`).value;
  const enfermedad = document.getElementById(`enfermedad`).value;
  const resultado = document.getElementById(`resultado`);

  const informacionTotal = new Mascota(
    nombrePropietario,
    direccion,
    telefono,
    tipoMascota,
    nombreMascota,
    enfermedad
  );

  resultado.innerHTML = `
  <ul>
  <li>${informacionTotal.datosPropietario()}</li>
  <ul>
  `;
}
