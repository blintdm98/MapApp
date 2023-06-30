import { Layout } from '../layout/Layout';
import dynamic from 'next/dynamic'


const Main = dynamic(
  () => import('../components/Main/Main.js'),
  { ssr: false }
)

const Home = () => {
  return (
    <Layout>
      <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
      <Main />
    </Layout>

  );
};

export default Home;