export const CustomImage = ({ src, alt, ...rest }) => (
  <img
    {...rest}
    src={src}
    alt={alt}
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = '/img/img_placeholder.png';
    }}
  />
);
