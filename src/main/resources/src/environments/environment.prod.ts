import { KeycloakConfig } from 'keycloak-angular';

// Add here your keycloak setup infos
const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8083/auth',
  realm: 'secondClosetClub',
  clientId: 'frontEnd'
};


export const environment = {
  production: true,
  keycloak: keycloakConfig
};
