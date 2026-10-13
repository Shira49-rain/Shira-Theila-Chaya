import { Book } from './book';

export function RecommendedBooks({ books }) {
  // סינון הספרים העומדים בתנאי (לדוגמה: ספרים עם יותר מ-100 לייקים)
  const recommendedList = books.filter(book => book.likes > 100);

  return (
    <>
      <div className="recommended-section">
        <h1>ספרים מומלצים</h1>
        
        {recommendedList.length > 0 ? (
          recommendedList.map((book, index) => (
            <Book 
              key={index}
              index={index}
              title={book.title}
              author={book.author}
              likes={book.likes}
              isAvailable={book.isAvailable}
            />
          ))
        ) : (
          <p>אין ספרים מומלצים כרגע</p>
        )}
      </div>
    </>
  );
}