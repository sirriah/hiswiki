import Link from 'next/link';
import Image from 'next/image';

import { Layout } from '../components/Layout';
import featuredImage from '../public/img/museumtrati.jpg';

const Home = () => (
  <Layout>
    <section className="text-center px-4 my-20 md:px-12 lg:px-24">
      <h1 className="headline--1 underline-large">HISWIKI</h1>
      <p className="paragraph">Na stránkách je umístěno celkem 153 článků</p>
      <p className="paragraph">
        Lorem USA dolor sit amet, consectetur adipiscing elit. Praesent egestas,
        augue elementum elementum facilisis, ligula velit fermentum libero,
        dictum malesuada justo dui sed sapien. Quisque ac erat scelerisque enim
        mattis viverra.{' '}
        <Link href="/home">
          <a className="link">Pellentesque pulvinar</a>
        </Link>{' '}
        ex gravida, consectetur erat et, semper ligula.
      </p>
    </section>

    <article className="my-9">
      <h2 className="headline--2 underline-medium text-center">Článek dne</h2>
      <Image src={featuredImage} alt="" />

      <Link href="/">
        <a>
          <h3 className="headline--3">Muzeum Ostře sledovaných vlaků</h3>
        </a>
      </Link>

      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum,
        arcu vel tempus finibus, nulla metus congue lacus, ac vehicula ex nulla
        non erat. Phasellus ultrices sapien sit amet eros ullamcorper lacinia.
        Sed at sem facilisis ipsum fermentum pulvinar. Nam volutpat fringilla
        mi, vitae mollis mi lobortis quis. Vivamus finibus ex est, interdum
        bibendum dolor consequat in. Duis ut porta nunc. Vivamus tempor accumsan
        finibus.
      </p>

      <div className="px-4">
        <span>Publikováno:</span>
        <time dateTime="2022-03-15T13:25:30+01:00">15. 3. 2022</time>
      </div>
      <Link href="/detail">
        <a className="btn mx-4">Číst dál</a>
      </Link>
    </article>

    <p className="">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum,
      arcu vel tempus finibus, nulla metus congue lacus, ac vehicula ex nulla
      non erat. Phasellus ultrices sapien sit amet eros ullamcorper lacinia. Sed
      at sem facilisis ipsum fermentum pulvinar. Nam volutpat fringilla mi,
      vitae mollis mi lobortis quis. Vivamus finibus ex est, interdum bibendum
      dolor consequat in. Duis ut porta nunc. Vivamus tempor accumsan finibus.
    </p>

    <p className="">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum,
      arcu vel tempus finibus, nulla metus congue lacus, ac vehicula ex nulla
      non erat. Phasellus ultrices sapien sit amet eros ullamcorper lacinia. Sed
      at sem facilisis ipsum fermentum pulvinar. Nam volutpat fringilla mi,
      vitae mollis mi lobortis quis. Vivamus finibus ex est, interdum bibendum
      dolor consequat in. Duis ut porta nunc. Vivamus tempor accumsan finibus.
    </p>

    <p className="mx-8 md:mx-20 lg:mx-36">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum,
      arcu vel tempus finibus, nulla metus congue lacus, ac vehicula ex nulla
      non erat. Phasellus ultrices sapien sit amet eros ullamcorper lacinia. Sed
      at sem facilisis ipsum fermentum pulvinar. Nam volutpat fringilla mi,
      vitae mollis mi lobortis quis. Vivamus finibus ex est, interdum bibendum
      dolor consequat in. Duis ut porta nunc. Vivamus tempor accumsan finibus.
    </p>

    <p className="mx-8 md:mx-20 lg:mx-36">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum,
      arcu vel tempus finibus, nulla metus congue lacus, ac vehicula ex nulla
      non erat. Phasellus ultrices sapien sit amet eros ullamcorper lacinia. Sed
      at sem facilisis ipsum fermentum pulvinar. Nam volutpat fringilla mi,
      vitae mollis mi lobortis quis. Vivamus finibus ex est, interdum bibendum
      dolor consequat in. Duis ut porta nunc. Vivamus tempor accumsan finibus.
    </p>

    <p className="mx-8 md:mx-20 lg:mx-36">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum,
      arcu vel tempus finibus, nulla metus congue lacus, ac vehicula ex nulla
      non erat. Phasellus ultrices sapien sit amet eros ullamcorper lacinia. Sed
      at sem facilisis ipsum fermentum pulvinar. Nam volutpat fringilla mi,
      vitae mollis mi lobortis quis. Vivamus finibus ex est, interdum bibendum
      dolor consequat in. Duis ut porta nunc. Vivamus tempor accumsan finibus.
    </p>

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
