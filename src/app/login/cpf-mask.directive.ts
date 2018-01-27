import { Directive, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Directive({
  selector: '[appCpfMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CpfMaskDirective,
    multi: true
  }]
})

export class CpfMaskDirective implements ControlValueAccessor {
  onTouched: any;
  onChange: any;
  
  @Input('appCpfMask') appCpfMask: string

  writeValue(value: any): void {
  }

  registerOnChange(fn:any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  @HostListener('keyup', ['$event'])
  onkeyup($event: any) {
    var valor = $event.target.value.replace(/\D/g, '');
    var pad = this.appCpfMask.replace(/\D/g, '').replace(/9/g, '_');
    var valorMask = valor + pad.substring(0, pad.length - valor.length);
 
    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      this.onChange(valor);
      return;
    }
 
    if (valor.length <= pad.length) {
      this.onChange(valor);
    }
 
    var valorMaskPos = 0;
    valor = '';
    for (var i = 0; i < this.appCpfMask.length; i++) {
      if (isNaN(parseInt(this.appCpfMask.charAt(i)))) {
        valor += this.appCpfMask.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }
    
    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }
 
    $event.target.value = valor;
  }

  @HostListener('blur', ['$event'])
  onblur($event: any) {
    if ($event.target.value.length === this.appCpfMask.length) {
      return;
    }
    this.onChange('');
    $event.target.value = ''
  }

  constructor() { }

}
