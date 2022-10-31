let quotes = [
    `I love travelling, and in doing so I can see various cultures, views, people, and places`,
    `Travelling makes my life more fun and meaningful`,
    `I can learn a lot from travelling, much different from the knowledge that I attain from books`,
    `Colorado has many fantastic places: Aspen, Telluride, RockyMountainNationalPark...`,
    `My family love hiking in the mountains of Colorado, which make you feel relaxed from your busy job and study`,
    `It don't matter if you have lots of money to travel to expensive places, just going hiking in the trail also makes you feel pretty relaxed and happy`
  ];
  
  
  /* document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  document.querySelector('#main-title').textContent = 'Something Shorter'
  
    // Part 2
  document.querySelector('body').style.backgroundColor = 'red'
  
    // Part 3
  const favoriteThings = document.querySelectorAll('#favorite-things > li')
  
  document.querySelector('#favorite-things').removeChild(favoriteThings[favoriteThings.length - 1])
  
    // Part 4
  document.querySelectorAll('.special-title').forEach((item) => {
    item.style.fontSize = '2rem'
  })
  
    // Part 5
  document.querySelectorAll('#past-races > li').forEach((item) => {
    if(item.textContent.trim() === 'Chicago'){
      document.querySelector('#past-races').removeChild(item)
    }
  })
  
    // Part 6
  const li = document.createElement('li')
  li.textContent = 'Laurelton'
  document.querySelector('#past-races').appendChild(li)
  
    // Part 7
  const blogPost = document.createElement('div')
  blogPost.classList.add('blog-post')
  const heading = document.createElement('h2')
  heading.textContent = 'Laurelton'
  const pEl = document.createElement('p')
  pEl.textContent = 'My hometown in Queens, NY'
  
  document.querySelector('.main').appendChild(blogPost)
  
  blogPost.appendChild(heading)
  blogPost.appendChild(pEl)
  
    // Part 8
  document.querySelector('#quote-title').addEventListener('click', (evt) => {
    randomQuote()
  })
  
    // Part 9
  
  document.querySelectorAll('.blog-post').forEach((item) => {
    item.addEventListener('mouseout', (evt) => {
      evt.currentTarget.classList.toggle('purple')
    })
    item.addEventListener('mouseenter', (evt) => {
    evt.stopPropagation()
    evt.currentTarget.classList.toggle('red')
    })
  })
  
  
  
  }); */