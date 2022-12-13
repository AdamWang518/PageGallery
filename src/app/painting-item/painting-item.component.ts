import { draw } from './../draw';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-painting-item',
  templateUrl: './painting-item.component.html',
  styleUrls: ['./painting-item.component.css']
})
export class PaintingItemComponent {
  @Input() inputDrawItem: draw = new draw();
}
