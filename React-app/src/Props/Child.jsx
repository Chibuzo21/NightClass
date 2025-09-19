// Props are short for properties, it is a way where parent components can pass data to child components. it is similar to arguments.
export default function Child({ name, age }) {
  return (
    <>
      <p>Hello {name}</p>
      <p>I am {age} years old</p>
    </>
  );
}
