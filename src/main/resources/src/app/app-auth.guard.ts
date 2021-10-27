import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import * as jwt_decode from 'jwt-decode';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CanAuthenticationGuard extends KeycloakAuthGuard implements CanActivate {
  constructor(protected router: Router, protected keycloakAngular: KeycloakService) {
    super(router, keycloakAngular);
  }

  private baseUrl = environment.baseUrl

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    let location = window.location.href;
    if (location === this.baseUrl){
      location = this.baseUrl+ 'base/home';
    }
    return new Promise((resolve, reject) => {
      if (!this.authenticated) {
        this.keycloakAngular.login({ redirectUri: location})
          .catch(e => console.error(e));
        return reject(false);
      }

      const requiredRoles: string[] = ["scc_admin_role"];
      if (!requiredRoles || requiredRoles.length === 0) {
        return resolve(true);
      } else {
        if (!this.roles || this.roles.length === 0) {
          resolve(false);
        }
        console.log("Roles -" +this.roles)
        resolve(requiredRoles.every(role => this.roles.indexOf(role) > -1));
      }
    });
  }

  getDecodedAccessToken(token: string): any {
    try{
      return jwt_decode(token);
    }
    catch (Error){
      return null;
    }
  }

}
