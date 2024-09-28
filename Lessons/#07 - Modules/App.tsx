import { helloWorld, sum } from './Module.tsx'

export default function App() {
  let s: number;
  s = sum(2,2);

  const hello = helloWorld();

  return (
    <div>
      <h1>Hello world: {hello}</h1> 
      <h2>2+2={s} </h2>
    </div>
  )
}
