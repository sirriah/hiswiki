export const Button = ({ loading, children, type, ...props }) => (
  <button
    {...props}
    disabled={loading}
    type={type}
    className="my-4 w-full rounded-md border-b-4 border-b-accent-600 bg-accent-500 px-10 py-3 text-white transition-colors hover:border-accent-500 hover:bg-accent-600 disabled:opacity-30 disabled:hover:border-b-accent-600 disabled:hover:bg-accent-500"
  >
    {children}
  </button>
);
