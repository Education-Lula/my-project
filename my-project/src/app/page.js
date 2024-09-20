import Image from "next/image";

export default function Home() {
  return (
    <body>
    <header className="header">
      <nav>
        <div className="nav__header">
  <div class="nav__logo">
    
      <img
        src="assets/logo-Restaurant.jpg"
        alt="logo"
      />
      
          </div>
          <div className="nav__menu__btn" id="menu-btn">
            <i className="ri-menu-line"></i>
          </div>
        </div>
        <ul className="nav__links" id="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#special">SPECIAL</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="#event">EVENTS</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
      <div className="section__container header__container" id="home">
        <div className="header__image">
          <img src="assets/HABESHA.jpg" alt="header" />
        </div>
        <div className="header__content">
          <h2>Experience the Authentic Flavors of Habesha Cuisine</h2>
          <h1>HABESHA <span>RESTAURANT</span></h1>
        </div>
      </div>
    </header>

    <section className="section__container banner__container" id="special">
      <div class="banner__card">
        <p>KITFO <span>20$</span></p>
        
      </div>
      <div className="banner__card">
        <p>TIHLO <span>20$</span></p>
        
      </div>
      <div className="banner__card">
        <p>HILBET <span>20$</span></p>
      </div>
    </section>

    <section className="section__container order__container" id="menu">
      <h3>TASTE THE TRADITION OF ERITREAN COOKING</h3>
      <h2 className="section__header">CHOOSE & ENJOY</h2>
      <p className="section__description">
        Whether you crave traditional Eritrean dishes or adventurous 
        new flavors, your culinary journey starts here. Satisfy your 
        cravings and savor every bite as you explore our authentic
         Eritrean menu at HABESHA RESTAURANT. Dive into a world of rich,
          flavorful dishes and create your own unforgettable 
          dining experience with us.
      </p>
      <div className="order__grid">
        <div className="order__card">
          <img src="assets/Shekila.jpg" alt="order" />
          <h4>SHEKILA</h4>
          <p>
            20$
          </p>
          <button className="btn">ORDER NOW</button>
        </div>
        <div className="order__card">
          <img src="assets/SHAYA.jpg" alt="order" />
          <h4>SHEYA</h4>
          <p>
            20$
      </p>
          <button className="btn">ORDER NOW</button>
        </div>
        
        <div className="order__card">
          <img src="assets/DERHO.jpg" alt="order" />
          <h4>DERHO</h4>
          <p>
            20$
          </p>
          <button className="btn">ORDER NOW</button>
        </div>
        <div className="order__card">
          <img src="assets/NAY XOM.jpg" alt="order" />
          <h4>NAY XOM</h4>
          <p>
            25$
          </p>
          <button className="btn">ORDER NOW</button>
        </div>
        <div className="order__card">
          <img src="assets/ENQAQHO.jpg" alt="order" />
          <h4>ENQAQHO</h4>
          <p>
            15$
          </p>
          <button className="btn">ORDER NOW</button>
        </div>
        <div className="order__card">
          <img src="assets/GEAT .jpg" alt="order" />
          <h4>GEAT</h4>
          <p>
            20$
          </p>
          <button className="btn">ORDER NOW</button>
        </div>
        <div className="order__card">
          <img src="assets/BEBEAYNETU.png" alt="order" />
          <h4>BEAYNETU</h4>
          <p>
            25$
          </p>
          <button className="btn">ORDER NOW</button>
        </div>
        <div className="order__card">
          <img src="assets/ZIGNI.jpg" alt="order" />
          <h4>ZIGNI</h4>
          <p>
            25$
          </p>
          <button className="btn">ORDER NOW</button>
        </div>
        <div className="order__card">
          <img src="assets/SHORO.jpg" alt="order" />
          <h4>SHIRO</h4>
          <p>
            20$
             </p>
          <button className="btn">ORDER NOW</button>
        </div>
        <div className="order__card">
          <img src="assets/PASTA SPAGETI.jpg" alt="order" />
          <h4> SPAGETI </h4>
          <p>
            20$
             </p>
          <button className="btn">ORDER NOW</button>
        </div>
      </div>
    </section>

    <section className="section__container event__container" id="event">
      <div className="event__content">
        <div className="event__image">
          <img src="assets/upcoming.jpg" alt="event" />
        </div>
        <div className="event__details">
          <h3>Discover</h3>
          <h2 className="section__header">UPCOMING EVENTS</h2>
          <p className="section__description">
  From exclusive traditional Ethiopian dish tastings 
and chef collaborations to community outreach initiatives and seasonal celebrations,
 there's always something special on the horizon at Habesha Restaurant. 
 Be the first to know about our upcoming events, promotions, and gatherings as we
  continue to bring joy and authentic Eritrean flavors to our cherished customers. 
Join us in creating memorable moments and delicious memories together!
          </p>
        </div>
      </div>
    </section>

    <section className="reservation" id="contact">
      <div className="section__container reservation__container">
        <h3>RESERVATION</h3>
        <h2 className="section__header">BOOK YOUR TABLE</h2>
        <form action="/">
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="date" placeholder="DATE" />
          <input type="time" placeholder="TIME" />
          <input type="number" placeholder="PEOPLE" />
          <button className="btn" type="submit">FIND TABLE</button>
        </form>
      </div>
      <img
        src="assets/thumb@1024_4c3e00cb-83d3-47ee-968c-27b04b4f8a32.jpg"
        alt="reservation"
        className="reservation__bg-1"
      />
      <img
        src="assets/reservation.jpg"
        alt="reservation"
        className="reservation__bg-2"
      />
    </section>

    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__logo">
          <img src="assets/logo-Restaurant.jpg" alt="logo" />
        </div>
        <div className="footer__content">
          <p>
            Welcome to Habesha Restaurant, 
            where passion for exceptional food and genuine hospitality come together. 
            Our story is one of dedication to crafting the perfect dining experience, 
            from sourcing the finest ingredients to delivering unparalleled taste in every dish.
          </p>
          <div>
            <ul className="footer__links">
              <li>
                <span><i className="ri-map-pin-2-fill"></i></span>
                43-39 Hanbidge Crescent
              </li>
              <li>
                <span><i className="ri-mail-fill"></i></span>
                lula22448@gmail.com
              </li>
            </ul>
            <div className="footer__socials">
              <a href="#"><i className="ri-facebook-circle-fill"></i></a>
              <a href="#"><i className="ri-instagram-fill"></i></a>
              <a href="#"><i className="ri-twitter-fill"></i></a>
              <a href="#"><i className="ri-whatsapp-fill"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2024 Habesha Restaurant. All rights reserved.
      </div>
    </footer>

    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="main.js"></script>
  </body>
  )
}