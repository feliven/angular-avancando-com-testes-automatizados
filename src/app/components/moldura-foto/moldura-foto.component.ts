import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurtidaWidgetComponent } from '../curtida-widget/curtida-widget.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moldura-foto',
  imports: [CurtidaWidgetComponent],
  templateUrl: './moldura-foto.component.html',
  styleUrl: './moldura-foto.component.scss',
})
export class MolduraFotoComponent {
  @Output() curtida = new EventEmitter<void>();
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() curtidas: number = 0;

  public darCurtida() {
    this.curtida.emit();
  }
}
