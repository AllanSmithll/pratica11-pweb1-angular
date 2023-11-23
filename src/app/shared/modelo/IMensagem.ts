export abstract class IMensagem {
  abstract info(mensagem: string): void;
  abstract sucesso(mensagem: string): void;
  abstract erro(mensagem: string): void;

  alerta(mensagem: string): void {
    alert("Alerta!")
  }
}
