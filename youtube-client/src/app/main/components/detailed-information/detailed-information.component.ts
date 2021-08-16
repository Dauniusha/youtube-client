import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { setting } from 'src/app/settings/setting';
import { HttpService } from 'src/app/shared/services/http.service';
import { ICardData } from '../../models/card-data-interface';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss']
})
export class DetailedInformationComponent implements OnInit {
  public previewLink: string = '';

  public date: Date = new Date();

  public data?: ICardData;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.httpService.response$.subscribe((cardsData: ICardData[]) => {
      console.log(this.activatedRoute.snapshot.params['id']);
      this.data = cardsData.find((card) => {
        return card.id === this.activatedRoute.snapshot.params['id'];
      });
      console.log(this.data);
      if (this.data) {
        this.date = new Date(this.data.date);
        this.previewLink = setting.urlConstants.previewLink + this.data.id + setting.urlConstants.previewQuality.default;
      } else {
        this.router.navigate(['']); // TODO: create special page for bad request
      }
    });
  }

}
