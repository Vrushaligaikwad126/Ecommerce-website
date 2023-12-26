import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer class="foot">
        <section class="container">
            <div class="box1">
                <a><i class="fa-brands fa-whatsapp"> whatsapp</i></a>
                <a><i class="fa-solid fa-phone"> call</i></a>
                <a><i class="fa-regular fa-envelope"> mail</i></a>
                <img  className="logo2"src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"></img>


            </div>
            <div class="box2">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum id rem, dignissimos nobis fugiat
                    alias numquam eligendi voluptate quaerat corrupti provident facere? Doloribus recusandae hic vel
                    eaque error praesentium, ullam quasi consectetur laborum dicta architecto voluptate ut illum velit
                    debitis veritatis at minus quidem dignissimos maxime laboriosam ipsam tenetur nam? Quae sequi dolore
                    deleniti unde. Eum tempora officia quaerat, dolorem laudantium excepturi error dolorum numquam
                    veritatis, debitis harum facilis doloremque vel expedita. Ad porro asperiores eius, modi nobis ex
                    est odio numquam tempora magni voluptatum vero, impedit unde!</p>
            </div>
            <div class="box3">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-facebook"></i>
            </div>

        </section>
    </footer>
    </div>
  )
}

export default Footer