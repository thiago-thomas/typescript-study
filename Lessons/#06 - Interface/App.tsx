export default function App() {
  interface Dog {
    name: string, 
    age: number;
    vaccinated?: boolean;
  }

  const pretinho: Dog = {
    name: 'pretinho pretoso dos santos',
    age: 10,
    vaccinated: true,
  }

  return (
    <div>
      <h1>Interfaces in JS</h1> 
      <h2>Olá eu sou {pretinho.name} </h2>
    </div>
  )
}
