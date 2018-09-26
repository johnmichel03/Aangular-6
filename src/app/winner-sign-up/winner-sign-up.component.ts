import { Component, OnInit } from '@angular/core';
import { CampaignWinner, Winner } from '../shared/model/campaignWinner.model';
import { WinnerService } from '../shared/data/winner.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-winner-sign-up',
  templateUrl: './winner-sign-up.component.html',
  styleUrls: ['./winner-sign-up.component.css']
})
export class WinnerSignUpComponent implements OnInit {

  winnerCampaign: CampaignWinner = new CampaignWinner;
  winner: Winner = new Winner;
  canShow: boolean = true;
  title: string = "Congradulations..! You are the winner.Please enter your details.";
  message: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private winnerService: WinnerService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] && params['code']) {
        this.winnerCampaign.CampaignId = params['id'];
        this.winnerCampaign.CouponCode = params['code'];
      }
      else {
        this.router.navigate(['']);
      }
    });
  }

  save(): void {
    if (this.winner) {
      this.winnerCampaign.Winner = this.winner;
      this.winnerService.saveWinner(this.winnerCampaign as CampaignWinner)
        .subscribe(winnerId => {
          this.canShow = false;
          if (winnerId !== 0) {
            //TODO :  this message can be moved message service and can inject dynamic message from the server
            this.message = 'Thanks for your registration.We will contact you shortly..!';
          }
          else {
            this.title = 'Oops..!,The promotional offers has been closed or The coupon may be invalid..!';
          }
        });
    }
  }

  goBack(): void {
    this.router.navigate(['']);
  }

}
