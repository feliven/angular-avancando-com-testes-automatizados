import {
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { UniqueIdService } from '../../services/unique-id.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { debounceTime, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActionDirective } from '../../shared/directives/action.directive';

@Component({
  selector: 'app-curtida-widget',
  imports: [FontAwesomeModule, ActionDirective],
  templateUrl: './curtida-widget.component.html',
  styleUrl: './curtida-widget.component.scss',
})
export class CurtidaWidgetComponent implements OnInit {
  @Output() public curtida = new EventEmitter<void>();

  @Input() public numeroLikes = 0;
  @Input() public id: string = null;

  public icones = { faThumbsUp };
  private clickSubject = new Subject<void>();

  constructor(
    private service: UniqueIdService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    if (!this.id) {
      this.id = this.service.gerarIDComPrefixo('like');

      // Prevent the default browser action (scrolling the page)
      window.addEventListener('keydown', function (event) {
        if (event.key === '32' || event.code === 'Space') {
          event.preventDefault();
        }
      });
    }

    this.clickSubject
      .asObservable()
      .pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.darCurtida());
  }

  adicionarCurtida() {
    this.clickSubject.next();
  }

  private darCurtida() {
    this.numeroLikes++;
    this.curtida.emit();
  }

  // public darCurtida() {
  //   this.curtida.emit();
  // }
}
