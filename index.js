async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  }
  var adsList = []
  adsList.push(
    new AdModel({
      imageUrl:
        'https://res.cloudinary.com/jomn9-com/image/upload/v1578318038/ads/ad2_j6fpt4.jpg',
      linkTo: 'www.google.com',
      title: 'Port Dickson',
    }),
    new AdModel({
      imageUrl:
        'https://res.cloudinary.com/jomn9-com/image/upload/v1578318037/ads/ad1_eowzgj.jpg',
      linkTo: 'https://www.facebook.com/SerembanTwo/posts/3723116394373102',
      title: 'Pasar Besar Gotong Royong',
    }),
    new AdModel({
      imageUrl:
        'https://res.cloudinary.com/jomn9-com/image/upload/v1578318037/ads/ad1_eowzgj.jpg',
    }),
    new AdModel({
      imageUrl:
        'https://res.cloudinary.com/jomn9-com/image/upload/v1578318038/ads/ad2_j6fpt4.jpg',
    }),
  )
  var res = new ResponseModel(adsList)

  return new Response(JSON.stringify(res, null, 2), init)
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

class ResponseModel {
  constructor(data) {
    this.data = data
  }
}

class AdModel {
  constructor({
    imageUrl,
    linkTo = '',
    title = '',
    titleMs = '',
    titleZh = '',
  }) {
    this.imageUrl = imageUrl
    this.linkTo = linkTo
    this.title = title
    this.titleMs = titleMs
    this.titleZh = titleZh
  }
}
