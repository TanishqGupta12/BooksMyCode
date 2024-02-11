import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function Navbar() {
  return (
    <>
      <section>
        <nav>
          <div class="logo">
          <img src={process.env.PUBLIC_URL + './logo.png'} alt='...' />
          </div>

          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Featured">Featured</a>
            </li>
            <li>
              <a href="#Arrivals">Arrivals</a>
            </li>
            <li>
              <a href="#Reviews">Reviews</a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
          </ul>

          <div class="social_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </nav>

        <div class="main">
          <div class="main_tag">
            <h1>WELCOME TO<br/><span>BOOK STORE</span></h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              molestias atque laborum non fuga ex deserunt. Exercitationem velit
              ducimus praesentium, obcaecati hic voluptate id tenetur fuga illum
              quidem omnis? Rerum?
            </p>
            <a href="#" class="main_btn">
              Learn More
            </a>
          </div>

          <div class="main_img">
            <img src="image/table.png" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
