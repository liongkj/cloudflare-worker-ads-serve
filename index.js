async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  }
  var adsList = []
  adsList.push(
    new AdModel(
      'https://upload.wikimedia.org/wikipedia/commons/f/fd/Portdickson_014.jpg',
      'www.google.com',
    ),
    new AdModel(
      'https://scontent.fmkz1-1.fna.fbcdn.net/v/t1.0-9/s960x960/84482301_161716748612400_9097443359512854528_o.jpg?_nc_cat=108&_nc_ohc=y9YL8Fr_pCsAX-M1NQG&_nc_ht=scontent.fmkz1-1.fna&oh=fe6830571dcfd52aabd34436a52c5265&oe=5F03A93C',
      'https://www.facebook.com/SerembanTwo/posts/3723116394373102',
    ),
  )

  return new Response(JSON.stringify(adsList), init)
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

class AdModel {
  constructor(imageUrl, linkTo) {
    this.imageUrl = imageUrl
    this.linkTo = linkTo
  }
}
