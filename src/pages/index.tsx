import { useLazyQuery } from '@apollo/client';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CircularProgress,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Template from '../components/Template';
import { WHOIS } from '../lib/query';
import { DomainResult } from '../lib/types';

const Home = () => {
  const [domain, setDomain] = useState('');
  const [useWhois, { loading, error, data }] = useLazyQuery<{
    whois: DomainResult;
  }>(WHOIS);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    useWhois({ variables: { domain } });
  };

  return (
    <Template title='Homepage'>
      <VStack mb='4'>
        <Heading size='lg'>Whois</Heading>
        <Text>WHOIS Search, Supported TLDs</Text>
        <Divider />
        <Text>
          .com .me .net .org .sh .io .co .club .biz .mobi .info .us .domains
          .cloud .fr .au .ru .uk .nl .fi .br .hr .ee .ca .sk .se .no .cz .it .in
          .icu .top .xyz .cn .cf .hk .sg .pt .site .kz .si .ae .do .yoga .xxx
          .ws .work .wiki .watch .wtf .world .website .vip .ly .dev .network
          .company .page .rs .run .science .sex .shop .solutions .so .studio
          .style .tech .travel .vc .pub .pro .app .press .ooo .de
        </Text>
      </VStack>
      <form onSubmit={onSubmit}>
        <Box display='flex' flexDir='column'>
          <FormControl>
            <FormLabel>Domain Name</FormLabel>
            <Input
              type='text'
              placeholder='domain.com'
              size='lg'
              onChange={(e) => setDomain(e.target.value)}
              value={domain}
            />
          </FormControl>
          <Box my='4'>
            <Button colorScheme='teal' type='submit'>
              Submit
            </Button>
          </Box>
          {loading && !data ? (
            <Box display='flex' justifyContent='center' my='4'>
              <CircularProgress isIndeterminate></CircularProgress>
            </Box>
          ) : !loading && error ? (
            <Box>
              <Alert status='error' variant='solid'>
                <AlertIcon />
                {error.message}
              </Alert>
            </Box>
          ) : (
            data && (
              <Box>
                <Alert status='success' variant='solid'>
                  <AlertIcon />
                  Results for the {data.whois.domain_name}
                </Alert>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th></Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td fontWeight='bold'>Registrar Name</Td>
                      <Td>{data.whois.registrar}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight='bold'>Whois Server</Td>
                      <Td>{data.whois.whois_server}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight='bold'>Email</Td>
                      <Td>{data.whois.emails}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight='bold'>Status</Td>
                      <Td>{JSON.parse(data.whois.status)}</Td>
                    </Tr>

                    <Tr>
                      <Td fontWeight='bold'>Expires On</Td>
                      <Td>{data.whois.expiration_date}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight='bold'>Registered On</Td>
                      <Td>{data.whois.creation_date}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight='bold'>Updated On</Td>
                      <Td>{data.whois.updated_date}</Td>
                    </Tr>
                    <Tr>
                      <Td fontWeight='bold'>Name Servers</Td>
                      <Td>
                        <ul style={{ listStyle: 'none' }}>
                          {data.whois.name_servers.map((ns) => (
                            <li>{ns}</li>
                          ))}
                        </ul>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            )
          )}
        </Box>
      </form>
    </Template>
  );
};

export default Home;
