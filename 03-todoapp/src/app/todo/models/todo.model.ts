export class Todo {
    public id: number;
    public texto: string;
    public completado: boolean;

    constructor(texto: string) {
        this.texto = texto.charAt(0).toUpperCase();
        this.completado = false;

        this.id = Math.random();
    }
}
