function App() {
  
  function addFunction(n1: number, n2: number): number {
    return n1+n2;
  }

  const addArrowFunction = (n1: number, n2: number): number => {
    return n1+n2;    
  }

  const addArrFun = (n1: number, n2: number): number => n1+n2;

  return (
    <>
      <h1>1 + 1 = {addFunction(1,1)}</h1>
      <h2>2 + 2 = {addArrowFunction(2,2)}</h2>
      <h2>3 + 3 = {addArrFun(3,3)}</h2>
    </>
  )
}

export default App
