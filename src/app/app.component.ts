import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  active: boolean = false;
  config: { [key: string]: string } = {
    display: 'round',
    type: 'le',
  };

  stringifyConfig = (): string => JSON.stringify(this.config);
}
