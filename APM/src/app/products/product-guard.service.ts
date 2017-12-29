import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(routeSnapshot: ActivatedRouteSnapshot) {
    const id = +routeSnapshot.url[1];
    if (isNaN(id) || id < 1) {
      alert('what the hell id: ' + `${routeSnapshot.url[1]} !!!`);
      this.router.navigate(['/products']);
      return false;
    }

    return true;
  }
}
