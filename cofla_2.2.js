
class Celulares {
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    };

    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert("reiniciando celular")
        } else {
            alert("el celular está apagado")
        }
    }

    tomarFoto() {
        alert(`foto tomada en una resolución de: ${this.rdc}`)
    }

    grabarVideo() {
        alert(`grabando video en ${this.rdc}`)
    }

    mobileInfo() {
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de Cámara: <b>${this.rdc}</b></br>
        Resolución de Video: <b>${this.rdc}</b></br>
        Memoria Ram: <b>${this.ram}</b></br>
        `;
    }
}

class CelularesAltaGama extends Celulares{
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram);
        this.resolucionDeCamaraExtra = rdce;
    };

    grabarVideoLento() {
        alert(`grabando en cámara lenta`);
    }

    reconocimientoFacial() {
        alert("Vamos a iniciar un reconocimiento facial")
    }

    InfoAltaGama() {
        return this.mobileInfo() + `Resolución de Cámara Extra: ${this.resolucionDeCamaraExtra}`
    }
}


// const celular1 = new Celulares("rojo", "150gr", "5''", "HD", "1GB");
// const celular2 = new Celulares("blanco", "155gr", "5.4''", "FHD", "2GB");
// const celular3 = new Celulares("blanco", "146gr", "5.9''", "FHD", "2GB");


// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

const celular1 = new CelularesAltaGama("rojo", "130gr", "5.2''", "4K", "3GB", "FHD")
const celular2 = new CelularesAltaGama("negro", "142gr", "6''", "4K", "4GB", "HD")

document.write(`
    ${celular1.InfoAltaGama()} <br><br>
    ${celular2.InfoAltaGama()} <br>
    `)