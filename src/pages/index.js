import { Layout } from '../layout/Layout';
import dynamic from 'next/dynamic'


const Main = dynamic(
  () => import('../components/Main/Main.js'),
  { ssr: false }
)

const Home = () => {
  // const { data: session, status } = useSession();
  // if (status === 'loading') return <h1>Loading... Please wait</h1>;
  // if (!session) {
  //   signIn(); // A signIn függvény meghívásával kéri a bejelentkezést
  //   return null; // Vagy bármilyen üres JSX elemet visszatéríthetsz itt
  // }
  return (

    <Layout>
      <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
      <Main />
    </Layout>

  );
};

export default Home;