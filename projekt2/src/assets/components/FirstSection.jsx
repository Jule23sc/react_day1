import React from 'react'
import './Firstsection.scss'

function FirstSection() {
    return (
      <div>
        <section className='bgc_section'>
          <div className='headlines_div'>
          <h2>What We Do</h2>
          <h1>We've got everything you need to launch and grow your business</h1>
          </div>
          <div className='texts_div'>
            <article>
              <h3>Brand Identity</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint expedita numquam nostrum. Maxime, quis consequatur?</p>
              <h3>Marketing</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora eum nostrum excepturi quas ex dolores.</p>
            </article>
            <article>
            <h3>Illustration</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint expedita numquam nostrum. Maxime, quis consequatur?</p>
              <h3>Web Design</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora eum nostrum excepturi quas ex dolores.</p>
            </article>
          </div>
        </section>
      </div>
    )
  }
  export default FirstSection