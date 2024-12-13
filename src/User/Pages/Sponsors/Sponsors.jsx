import React from 'react'

function Sponsors() {
  const sponsors = [
    {
      name: "Standard Chartered Bank",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Standard_Chartered_Bank_logo.png",
      description: "Standard Chartered is a leading international bank, deeply committed to supporting and growing the game of football in Nepal, helping elevate the sports culture with every step."
    },
    {
      name: "Coca-Cola",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Coca-Cola_logo_2019.svg",
      description: "Coca-Cola has been refreshing the world for over a century, providing moments of optimism and happiness with every bottle. We are proud to be a part of sports culture worldwide, fueling athletes and fans alike."
    },
    {
      name: "Nike",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
      description: "Nike, the world’s largest supplier of athletic shoes and apparel, empowers athletes of all levels with innovative and performance-driven products. Our mission is to inspire everyone to push their limits and 'Just Do It.'"
    },
    {
      name: "Samsung",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Samsung_logo.svg",
      description: "Samsung is a global leader in technology, constantly innovating and creating the future of consumer electronics. Our mission is to inspire progress and deliver cutting-edge products that elevate every aspect of life."
    },
    {
      name: "Toyota",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Toyota_logo_2020.svg",
      description: "As a pioneer in the automotive industry, Toyota strives to build better cars that are sustainable, reliable, and inspiring. Our mission is to deliver 'Moving Forward,' making life more convenient for people around the world."
    },
    {
      name: "Adidas",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Adidas_Logo_2019.svg",
      description: "Adidas is a leading global sportswear brand, creating innovative products that empower athletes to reach their full potential. With the tagline 'Impossible is Nothing,' we push the boundaries of performance, style, and sustainability."
    },
    {
      name: "Pepsi",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Pepsi_logo_2014.svg",
      description: "Pepsi has been a symbol of refreshment, joy, and innovation for decades. With a focus on promoting positivity, excitement, and boldness, Pepsi stands as the drink of choice for every celebration and sporting event."
    },
    {
      name: "Amazon",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      description: "Amazon is the world’s largest online retailer, providing millions of products to customers worldwide. We are committed to delivering value, convenience, and innovation in every product we offer, aiming to be Earth’s most customer-centric company."
    },
    {
      name: "Microsoft",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_logo_2022.svg",
      description: "Microsoft is a global technology leader with a mission to empower every person and organization on the planet to achieve more. Through innovation and cloud computing, we are transforming industries and making a positive impact worldwide."
    },
    {
      name: "Uber",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Uber_logo_2018.svg",
      description: "Uber is revolutionizing the transportation industry by connecting riders with drivers seamlessly. Our goal is to provide safe, reliable, and affordable transportation that helps people move and live their best lives, wherever they are."
    }
  ];

  return (
    <div className="sponsors">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="sponsor-item">
          <img src={sponsor.image} alt={sponsor.name} className="sponsor-image" />
          <h2>{sponsor.name}</h2>
          <p>{sponsor.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Sponsors;
