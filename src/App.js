import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCatsFetch } from './catState'

function App() {
  const cats = useSelector((state) => state.cats.cats)
  const isLoading = useSelector((state) => state.cats.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch])

  if (isLoading)
    return (
      <div className="App">
        <h1>CAT SPECIES GALLERY</h1>
        <p>
          Images of different species of cats. Lots of cats for your viewing
          pleasure
        </p>
        <hr />
        <div className="loading"></div>
      </div>
    )

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
          const {
            id,
            name,
            temperament,
            image: { url }
          } = cat
          return (
            <div key={id} className="row">
              <div className="column column-left">
                <img src={url} alt={name} />
              </div>
              <div className="column column-right">
                <h2>{name}</h2>
                <h5>Temperament: <p>{temperament}</p></h5>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
