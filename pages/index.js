import { Fragment } from 'react';

const Home = () => (
  <Fragment>
    {/* header */}
    <header className="w-full h-110 bg-stone-300">
      <div className="w-full bg-light-50 p-2 md:p-5 grid grid-cols-4">
        <a href="home">Hiswiki</a>
        <div>search</div>
        <a href="new-article">new</a>
        <nav aria-labelledby="primary-navigation">menu</nav>
      </div>
    </header>
    {/* main content */}
    <main className="w-full">
      <div className="max-w-screen-lg mx-auto bg-white -mt-20 pt-16">
        <p className="mx-36">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          condimentum, arcu vel tempus finibus, nulla metus congue lacus, ac
          vehicula ex nulla non erat. Phasellus ultrices sapien sit amet eros
          ullamcorper lacinia. Sed at sem facilisis ipsum fermentum pulvinar.
          Nam volutpat fringilla mi, vitae mollis mi lobortis quis. Vivamus
          finibus ex est, interdum bibendum dolor consequat in. Duis ut porta
          nunc. Vivamus tempor accumsan finibus.
        </p>
      </div>
    </main>

    <footer className="mt-20 w-full bg-dark-300 text-white">
      <div className="max-w-screen-lg mx-auto p-6 grid grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr]">
        <nav>menu</nav>
        <div>weather</div>
      </div>
      <div className="w-full bg-dark-600 text-white text-center p-5 ">
        copyright
      </div>
    </footer>
  </Fragment>
);

export default Home;
