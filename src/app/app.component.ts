import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarCafeComponent } from './components/listar-cafe/listar-cafe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListarCafeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'diego-fonseca-pacial-uno';
}
