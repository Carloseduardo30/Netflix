import React from 'react'
import './FeaturedMovie.css'

export default function FeaturedMovie({ item }) {
  console.log(item)

  let firstdate = new Date(item.first_air_date)
  let genres = []
  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }
  let descripition = item.overview
  if (descripition.length > 200) {
    descripition = descripition.substring(0, 200) + '...'
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}
    >
      <div className="featured--vertical"></div>
      <div className="featured--horizontal">
        <div className="featured--name">{item.original_name}</div>
        <div className="featured--info"></div>

        <div className="featured--points">{item.vote_average}</div>
        <div className="featured--year">{firstdate.getFullYear()}</div>
        <div className="featured--seasons">
          {item.number_of_seasons} temporada
          {item.number_of_seasons !== 1 ? 's' : ''}
        </div>
        <div className="featured--descripition">{item.overview}</div>
        <div> className="featured--buttons" </div>
        <a href={`/watch/${item.id}`} className="featured--watchbutton">
          assistir
        </a>
        <a href={`/list/add/${item.id}`} className="featured--mylistbutton">
          {' '}
          +Minha lista
        </a>
        <div className="featured--genres">
          <strong>Gêneros</strong>
          {genres.join(', ')}
        </div>
      </div>

      <div>{item.original_name}</div>
    </section>
  )
}
