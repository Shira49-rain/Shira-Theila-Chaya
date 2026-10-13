import './book.css';

export function Book({ title, author, likes, index, isAvailable }) {
  return (
    <>
      <div className={`book-card ${!isAvailable ? "unavailable-book" : (likes > 100 ? "popular-book" : "regular-book")}`}>
        <h3>Title: {title}</h3>
        <h4>Author: {author}</h4>
        <h4>Likes: {likes}</h4>
        <h5>מספר סידורי: {index + 1}</h5>
        
        {/* הצגת כיתוב ספר פופולרי רק אם הספר זמין ויש מעל 100 לייקים */}
        {isAvailable && likes > 100 && <span className="badge-popular">ספר פופולרי</span>}
        
        {/* הודעה ומסגרת מיוחדת כאשר הספר אינו זמין */}
        {!isAvailable && <div className="unavailable-notice">הספר אינו זמין כרגע</div>}
      </div>
    </>
  );
}