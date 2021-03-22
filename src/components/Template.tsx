import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from '@chakra-ui/react';
import Navbar from './Navbar';

interface Props {
  title: string;
}
const Template: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'No Title'}</title>
      </Head>
      <Navbar />
      <Container maxWidth='6xl' mb='6'>{children}</Container>
    </>
  );
};

export default Template;
