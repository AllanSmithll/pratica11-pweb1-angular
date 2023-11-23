import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(valor: string): string {
      if (!valor) {
        return '';
      }
      valor = valor.replace(/\D/g, '');

      if (valor.length === 8) {
        return valor.replace(/(\d{4})(\d{4})/, '$1-$2');
      } else if (valor.length === 10) {
        return valor.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      } else if (valor.length === 11) {
        return valor.replace(/(\d{3})(\d{4})(\d{4})/, '($1) $2-$3');
      } else {
        return valor;
      }
    }
}
