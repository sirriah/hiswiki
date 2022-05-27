export const AuthTitle = ({ children, error }) => (
  <>
    <h1 className="headline--3">{children}</h1>
    {error && <p className="my-3 bg-red-100 p-3 text-red-800">{error}</p>}
  </>
);
