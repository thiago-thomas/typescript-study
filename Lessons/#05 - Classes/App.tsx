class Animal {
  name: string;

  constructor(name: string) {
      this.name = name;
  }

  speak(): void {
      console.log(`${this.name} makes a noise.`);
  }
}

export default function App() {
  const animal = new Animal("dog");
  animal.speak();

  return (
    <div>Classes in TS</div>
  )
}
