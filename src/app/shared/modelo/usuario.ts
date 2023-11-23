export class Usuario {

  constructor(public nome = '',
              public idade?: number,
              public telefone?: string,
              public cpf: string = '',
              public id?: number) {
  }
}
