import React from 'react'
import { Link } from 'react-router-dom'
// CSS
import '../assets/css/product-card.css'

export default function ProductCard(props) {
  return (
    <div className='product_card'>
      <div className='thumbnail'>
        <img src={props.thumbnail} alt='product' />
      </div>

      <div className='details'>
        <Link to='/news/1'><h2 className='title'>{props.title}</h2></Link>
        <div className='bottom'>

          <div className='left'>
            {
              props.metrics?
                <div className='metrics'>
                  <span className='views'>
                    <i className='fas fa-eye' />
                    <span className='count'>{props.views}</span>
                  </span>
      
                  <span className='likes'>
                    <i className='fas fa-heart' />
                    <span className='count'>{props.likes}</span>
                  </span>
      
                  <span className='comments'>
                    <i className='fas fa-comment' />
                    <span className='count'>{props.comments}</span>
                  </span>
                </div>
              : ''
            }
          </div>

          <div className='right'>
            {
              props.actions?
              <div className='actions'>
                <button className='fa-solid fa-pen'></button>
                <button className='fa-solid fa-trash'></button>
              </div>
              : ''
            }
          </div>
        </div>
      </div>
    </div>
  )
}
