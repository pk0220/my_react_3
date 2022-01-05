export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  let username = "Pratik";
  let email = "pratikkhamkar2220@gmail.com";
  let id = 20;
  let list = ["Pune", " Mumbai", " Delhi"];
  let obj = { id: 20, name: "Rahul" };
  return (
    <div>
      <h1>Learning Interpolation</h1>
      <h1>
        {username} {email}
      </h1>
      <h1>{list}</h1>
      <h1>{obj.id}</h1>
      <h1>{`I am ${obj.name} ${obj.id}`}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat,
        nisi dolorem laboriosam quibusdam odit, saepe ex deserunt, quis rem nam
        at sed quo sunt expedita magnam! Veritatis exercitationem officiis nisi
        et! Illum dicta maxime, veniam placeat iure architecto molestias saepe
        numquam? Perspiciatis vel tenetur quibusdam architecto ipsa, nisi
        nostrum.
      </p>
    </div>
  );
}
