import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class validatelogInService {

  // Observable string sources
  private validate_logOut_ConfirmedSource = new Subject<string>();
  private validate_logIn_ConfirmedSource = new Subject<string>();

  // Observable string streams
  validatelogOutUser$ = this.validate_logOut_ConfirmedSource.asObservable();
  validatelogInUser$  = this.validate_logIn_ConfirmedSource.asObservable();

  // Service message commands
  validatelogOutUser(validatelogIn: string) {
    this.validate_logOut_ConfirmedSource.next(validatelogIn);
  }

   validatelogInUser(astronaut: string) {
    this.validate_logIn_ConfirmedSource.next(astronaut);
  }
}