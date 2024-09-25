function App() {
  //[: 'type'[]] Sintax 1 to create a TS array 
  let names: string[] = ["Alice", "Bob", "Charlie"];
  
  //[: Array<'type'>] Sintax 2 to create a TS array 
  let ids: Array<number> = [10,20,30];

  return (
    <>
      <h1>Arrays in TS</h1>
    </>
  )
}

export default App
