import React from 'react'
import './Head.scss'

function Head() {
    return (
      <section className='bg_section'>
        <div className='headlines'>
        <h2>Hello There</h2>
        <h1>We Are Glint</h1>
        </div>
        <div className='vert_line'>
        <hr />
        </div>
        <div className='headlines_text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus unde nemo pariatur nostrum atque molestiae assumenda accusamus similique adipisci blanditiis, maiores hic consectetur? Molestias, cumque minima placeat, esse, consectetur necessitatibus neque amet aspernatur blanditiis dolorem est sunt voluptas fuga reprehenderit tempora asperiores minus sapiente ducimus soluta? Nulla dolorum quae laudantium optio veritatis minus saepe.</p>
        </div>
        <div className='infos_div'>
        <div>
          <p className='number' id='number_a'>127</p>
          <p className='info' id='info_a'>Award Received</p>
        </div>
        <div className='hor_line' id='horline1'></div>
        <div>
          <p className='number' id='number_c'>1505</p>
          <p className='info' id='info_c'>Cups of Coffee</p>
        </div>
        <div className='hor_line' id='horline2'></div>
        <div>
          <p className='number' id='number_p'>109</p>
          <p className='info' id='info_p'>Projects Completed</p>
        </div>
        <div className='hor_line' id='horline3'></div>
        <div>
          <p className='number' id='number_h'>102</p>
          <p className='info' id='info_h'>Happy Clients</p>
        </div>
        </div>
      </section>
    )
  }
  export default Head