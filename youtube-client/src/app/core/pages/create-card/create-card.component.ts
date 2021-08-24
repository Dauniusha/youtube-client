import { Component, OnInit } from '@angular/core';
import { IInputEmit } from 'src/app/shared/models/input-emit-interface';
import { ICustomCardData } from 'src/app/core/models/custom-card/custom-card-data';
import { ICustomCardInputData } from '../../models/custom-card/custom-card-input-data-interface';
import { IAppState } from 'src/app/redux/state.models';
import { Store } from '@ngrx/store';
import { cardsActionsMap } from 'src/app/redux/actions/cards.actions';
import { Router } from '@angular/router';

enum keyNameAccordance {
  'Title' = 'title',
  'Description' = 'description',
  'Img' = 'imgLink',
  'Link to video' = 'videoLink',
};

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  public cardData: ICustomCardInputData = <ICustomCardInputData>{ };

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public changeData(event: IInputEmit) {
    this.cardData[<keyof ICustomCardInputData> keyNameAccordance[<keyof typeof keyNameAccordance> event.key]] = event.value;
  }

  public createCard(event: Event) {
    event.preventDefault();

    const customCard: ICustomCardData = {
      inputData: this.cardData,
      date: new Date(),
    };
    this.store.dispatch(cardsActionsMap.loadCustom({ card: customCard }));

    this.router.navigate(['']);
  }
}
