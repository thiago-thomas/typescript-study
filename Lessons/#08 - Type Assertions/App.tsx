export default function App() {
  interface Book {
    title: string;
    year: number;
  }

  const book = {} as Book;
  book.title = "Book title";
  book.year = 1987;

  let title: any = "Some title";
  let titleLength: number = (title as string).length;

  console.log(titleLength);

  return (
    <div>
      <h1>Type Assertions</h1>
      <h2>Book title: {book.title}</h2>
      <h2>Book year: {book.year}</h2>
      <h3>Title: {title} | Title length: {titleLength}</h3>
    </div>
  );
}
