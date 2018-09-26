import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WinnerService } from '../shared/data/winner.service';

@Component({
  selector: 'app-promo-code-check',
  templateUrl: './promo-code-check.component.html',
  styleUrls: ['./promo-code-check.component.css']
})
export class PromoCodeCheckComponent implements OnInit {

  // Note :  defaulted to first active campaign Id.
  // if we have more than one active campaign at a time then we can change the Ui to select the campiafn before entering winning coupon
  promoCode: string;
  campaignId: number;
  message: string;
  showMessage = false;
  isProcessing = false;
  constructor(
    private router: Router,
    private winnerService: WinnerService
  ) { }

  ngOnInit() {
    this.campaignId = 1;
  }

  onSubmit(): void {

    if (!this.promoCode) {
      return;
    }

    this.isProcessing = true;
    this.winnerService.checkPromoCode(this.campaignId, this.promoCode).subscribe(winner => {
      if (!winner) {
        this.message = 'Sorry, This is not a winning coupon.Better luck next time..!';
        this.showMessage = true;
        this.isProcessing = false;
        return;
      }
      this.router.navigate(['/winner-sign-up', this.campaignId, this.promoCode]);
    });
  }
}


