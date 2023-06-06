import Loading from 'react-bootstrap/Spinner';

function Spinner(props: {
    style?: any,
    animation: any,
    role: any,
    className: string
}) {
  return (
    <Loading style={props.style} 
             animation={props.animation} 
             role={props.role} 
             >
      <span className={props.className}>Loading...</span>
    </Loading>
  );
}

export default Spinner;
