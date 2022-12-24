import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


const Header = () => {
  return (
    <div className='gpt3__header-section_padding' id='home'>

      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Somthing Amazing with GPT-3 OpenAI </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias amet tempore tenetur nostrum maiores illo, <br /> unde expedita omnis fugiat eos sunt minima quasi labore. Provident debitis tenetur nesciunt quas vel?</p>
        <div className='gpt3__header-content__input'>
          <input type="email " placeholder='your email Address' />
          <button type='button'>Get Status</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="peopleimg" />
          <p>1600+ peoples have requested to acess in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="aiimg" />
      </div>
    </div>
  )
}

export default Header