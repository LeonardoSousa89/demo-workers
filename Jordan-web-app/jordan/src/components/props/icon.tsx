function Icon(props: {
  src: any;
  alt: string;
  className: string;
  onClick?: any;
}) {
  return (
    <img
      className={props.className}
      src={props.src}
      alt={props.alt}
      onClick={props.onClick}
    />
  );
}

export default Icon;
