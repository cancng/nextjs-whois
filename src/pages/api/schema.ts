import { gql } from 'apollo-server-micro';

export default gql`
  type Query {
    whois(domain: String!): WhoisResult!
  }

  type WhoisResult {
    domain_name: String
    registrar: String
    whois_server: String
    updated_date: String
    creation_date: String
    expiration_date: String
    name_servers: [String]
    status: String
    emails: String
    dnssec: String
    name: String
    org: String
    address: String
    city: String
    state: String
    zipcode: String
    country: String
  }
`;
