import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCatsFetch } from './catState'

function App() {
  const cats = useSelector((state) => state.cats.cats)
  const isLoading = useSelector((state) => state.cats.isLoading)
  const dispatch = useDispatch()
  const [catsLength, setCatsLength] = useState(0)

  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch])

  const loadMoreCats = () => {
    if (cats.length > catsLength) setCatsLength(cats.length)
    dispatch(getCatsFetch())
  }

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>
        Images of different species of cats. Lots of cats for your viewing
        pleasure
      </p>
      <hr />
      <div className="gallery">
        {cats.map((cat) => {
          const { id, name, temperament, image } = cat
          return (
            <div key={id} className="row">
              <div className="column column-left">
                <img src={image?.url} alt={name} />
              </div>
              <div className="column column-right">
                <h2>{name}</h2>
                <h5>
                  Temperament: <p>{temperament}</p>
                </h5>
              </div>
            </div>
          )
        })}
      </div>
      {isLoading ? <div className="loading"></div> : null}
      <button className={isLoading ? 'hide' : null} onClick={loadMoreCats}>
        {catsLength === cats.length ? 'No More' : 'View More'}
      </button>
    </div>
  )
}

export default App
