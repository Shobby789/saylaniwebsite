import "./Button.css";

export default function Button(props: any) {
  return (
    <div>
      <button>{props.btnTitle}</button>
    </div>
  );
}
