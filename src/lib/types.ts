export interface DomainResult {
  domain_name: string;
  registrar: string;
  whois_server: string;
  updated_date: string;
  creation_date: string;
  expiration_date: string;
  name_servers: string[];
  status: string;
  emails: string;
  dnssec: string;
  name?: string;
  org?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  country?: string;
}
