import { gql } from '@apollo/client';

export const WHOIS = gql`
  query whois($domain: String!) {
    whois(domain: $domain) {
      domain_name
      registrar
      whois_server
      updated_date
      creation_date
      expiration_date
      name_servers
      status
      emails
      dnssec
      name
      org
      address
      city
      state
      zipcode
      country
    }
  }
`;
