import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <>
        <footer>
        <div class="footer_main">

            <div class="tag">
            <img src={process.env.PUBLIC_URL + './logo.png'} alt='...' />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quaerat ipsa aspernatur ad
                    sequi, dolore eveniet vitae quasi. Excepturi ipsa odio impedit sequi at hic velit, minus
                    vero sint. Voluptas?
                </p>

            </div>

            {/* <div class="tag">
                <h1>Quick Link</h1>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Featured</a>
                <a href="#">Arrivals</a>
                <a href="#">Reviews</a>
                <a href="#">Blog</a>

            </div> */}

            <div class="tag">
                <h1>Contact Info</h1>
                <a href="#"><i class="fa-solid fa-phone"></i>+94 12 345 6789</a>
                <a href="#"><i class="fa-solid fa-phone"></i>+94 32 444 699</a>
                <a href="#"><i class="fa-solid fa-envelope"></i>bookstore123@gmail.com</a>

            </div>

            <div class="tag">
                <h1>Newsletter</h1>
                <div class="search_bar">
                    <input type="text" placeholder="You email id here"/>
                    <button type="submit">Subscribe</button>
                </div>
            </div>

        </div>


    </footer>
    </>
  )
}
