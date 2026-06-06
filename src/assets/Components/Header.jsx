export default function Header({len, search, onHandleSearch}) {
  return (
    <div className="header">
      <h2>🍿usePopcorn</h2>
      <input type="text" placeholder="Search movies..." value={search} onChange={(e) => onHandleSearch(e)}/>
      <p>Found {len} results</p>
    </div>
  );
}
