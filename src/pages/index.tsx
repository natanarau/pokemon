import Head from 'next/head';
import Layout from 'layout/';
import Main from 'components/simple/Main';
import Header from 'components/complex/Header';
import Search from 'components/complex/Search';
import Filter from 'components/complex/Filter';
import { Box } from 'components/simple/Box';
import SessionPokemons from 'components/simple/SessionPokemons';
import DetailsPokemon from 'components/complex/DetailsPokemon';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Pokemon</title>
        <meta name="title" content="Pokemon" />
        <meta
          name="description"
          content="Venha conferir a lista dos prokemons."/>
      </Head>
      <Layout>
        <Header/>
        <Main>
          <Box display='grid' gridArea='session' data-id='session' gridGap={5}>
            <Search />
            <Filter/>
            <SessionPokemons/>
          </Box>
          <Box display='grid' gridArea='details' data-id='details' position='relative'>
            <DetailsPokemon/>
          </Box>
        </Main>
      </Layout>
    </>
  );
}
