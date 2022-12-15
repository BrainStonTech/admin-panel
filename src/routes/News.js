import React from 'react'
import { Link } from 'react-router-dom'
// Components
import ProductCard from '../components/ProductCard'
// CSS
import '../assets/css/news.css'

export default function News() {
  return (
    <div className='news_page page'>
      <div className='container'>
        <section className='news'>
          <div className='section_header'>
            <h1 className='title'>News</h1>
            <div className='actions'>
              <Link to='/add-news' className='fa-solid fa-plus'></Link>
            </div>
          </div>

          <div className='section_content'>
            <ProductCard
              thumbnail={require('../assets/images/banner.png')}
              title="Bangladesh is celebrating Pohela Boishakh after 2 years of covid 19"
              metrics={true}
              views={1234}
              likes={12}
              comments={12}
              actions={true}
            />
            <ProductCard
              thumbnail={require('../assets/images/banner.png')}
              title="Bangladesh is celebrating Pohela Boishakh after 2 years of covid 19"
              metrics={true}
              views={1234}
              likes={12}
              comments={12}
              actions={true}
            />
            <ProductCard
              thumbnail={require('../assets/images/banner.png')}
              title="Bangladesh is celebrating Pohela Boishakh after 2 years of covid 19"
              metrics={true}
              views={1234}
              likes={12}
              comments={12}
              actions={true}
            />
            <ProductCard
              thumbnail={require('../assets/images/banner.png')}
              title="Bangladesh is celebrating Pohela Boishakh after 2 years of covid 19"
              metrics={true}
              views={1234}
              likes={12}
              comments={12}
              actions={true}
            />
            <ProductCard
              thumbnail={require('../assets/images/banner.png')}
              title="Bangladesh is celebrating Pohela Boishakh after 2 years of covid 19"
              metrics={true}
              views={1234}
              likes={12}
              comments={12}
              actions={true}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
