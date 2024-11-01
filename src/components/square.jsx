export default function Square(props) {
  return (
    <h4 id="square" onClick={() => props?.onClick()}>
      {props.val}
    </h4>
  );
}
