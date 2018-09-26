import { Injectable, OnInit } from '@angular/core';
import { observable, throwError, of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CampaignWinner } from '../model/campaignWinner.model';
import { ConfigService } from '../settings/config.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class WinnerService {
  winnerUrl: string;

  constructor(
    private http: HttpClient,
    private config: ConfigService
    //  private messageService: MessageService
  ) {
    this.winnerUrl = this.config.getConfigs().ApiBaseUrl + '/api/winners';
  }

  saveWinner(winner: CampaignWinner): Observable<number> {

    return this.http.post(this.winnerUrl, winner, httpOptions).pipe(
      tap((w: number) => {
        this.log(`created winner id=${w}`);
      }),
      catchError(
        this.handleError<number>('saveWinner')
      )
    );
  }

  checkPromoCode(campaignId: number, coupon: string): Observable<Boolean> {
    return this.http.get(`${this.winnerUrl}/IsWinningCode/${campaignId}/${coupon}`, httpOptions).pipe(
      tap((c: boolean) => { this.log(`checked winner ${c}`); }),
      catchError(this.handleError<boolean>('checkPromoCode'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      //console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('WinnerService: ' + message);
    // this.messageService.add('winnerService: ' + message);
  }
}
