import { Component, input } from '@angular/core';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-button',
  imports: [MaterialModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label= input<String>('Button');
}
