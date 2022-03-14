import { Layout } from '../components/Layout';

const Home = () => (
  <Layout>
    <div className="font-yrsa relative">
      This is a test
      <h1 className="text-2xl underline decoration-8 decoration-accent-200 underline-offset-[-0.2rem]">
        Hiswiki
      </h1>
    </div>

    <p className="mx-8 md:mx-20 lg:mx-36">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum,
      arcu vel tempus finibus, nulla metus congue lacus, ac vehicula ex nulla
      non erat. Phasellus ultrices sapien sit amet eros ullamcorper lacinia. Sed
      at sem facilisis ipsum fermentum pulvinar. Nam volutpat fringilla mi,
      vitae mollis mi lobortis quis. Vivamus finibus ex est, interdum bibendum
      dolor consequat in. Duis ut porta nunc. Vivamus tempor accumsan finibus.
    </p>
  </Layout>
);

export default Home;
