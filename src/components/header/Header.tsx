import "./Header.css";

export default function Header(props: any) {
  return (
    <>
      <div className="header d-flex flex-column align-items-center justify-content-center w-100">
        {/* <h1 className="text-white">Courses We Offer</h1> */}
        <h1 className="text-white">{props.heading}</h1>
        <p className="mt-3 text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          mollitia.
        </p>
      </div>
    </>
  );
}
