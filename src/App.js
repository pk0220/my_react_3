export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const id = 20;
  let background = "bg-danger";
  return (
    <div>
      <h1>Learning Interpolation {id + 200}</h1>
      <h1>Learning Interpolation {id + 100}</h1>

      <h1 id="20" className={background}>
        Interpolation {id}
      </h1>
      <h1 id={id} className="bg-info">
        Interpolation {id}
      </h1>
    </div>
  );
}
