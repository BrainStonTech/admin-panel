import React, { useEffect } from 'react'
import $ from 'jquery'
// Components
import ProductCard from '../components/ProductCard';
// CSS
import '../assets/css/home.css'

export default function Home() {
  
  useEffect(() => {
    $('.App').removeClass('nonav');
  }, [])

  return (
    <div className='home_page page'>
      <div className='container'>
        <section className='overview'>
          <div className='section_content'>
            <div className='card'>
              <h2 className='title'>News Published</h2>
              <span className='count'>12344</span>
            </div>
            <div className='card'>
              <h2 className='title'>Income</h2>
              <span className='count'>1000$</span>
            </div>
            <div className='card'>
              <h2 className='title'>Total Shares</h2>
              <span className='count'>5443</span>
            </div>
            <div className='card'>
              <h2 className='title'>Site Visits</h2>
              <span className='count'>92,234</span>
            </div>
          </div>
        </section>

        <section className='top_news product_cards'>
          <div className='section_header'>
            <h2 className='title'>Top News</h2>
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
          </div>
        </section>
      </div>
    </div>
  )
}
