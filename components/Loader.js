import LoaderCircle from '../public/img/Loader.svg';

export const Loader = () => (
  <div className="absolute flex h-screen w-screen justify-center">
    <LoaderCircle className="h-10 w-10 animate-spin self-center" />
  </div>
);
