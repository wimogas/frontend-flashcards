import {Component, Input} from '@angular/core';
import {Card} from "../../models/Card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card!: Card;
}

