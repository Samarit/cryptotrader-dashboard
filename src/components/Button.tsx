export default function Button ({id, clickHandler, activeButton}) {
  return (
    <button 
      id={id}
      className={`btn ${activeButton === id ? "active" : ''}`}
      onClick={clickHandler}
      >
      {id}
    </button>
  )
}