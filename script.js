const restaurantData = [
    {
        name: "McDonald's",
        img: "https://cdn.shopify.com/s/files/v2/upload/v5/restaurant_data.png",
        description: "Fast Food, Fast Service",
        rating: '4.5',
    },
    {
        name: "Wendy's",
        img: "",
        description: "Amazing Food",
        rating: '3.5',
    },
    {
        name: "Ichiran Sushi",
        img: "https://cdn.shopify.com/s/files/v2/upload/v5/",
        description: "Best Sushi Ever.",
        rating: '4.5'
    },
    {
        name: "Kenta Ramen",
        img: "https://cdn.shopify.com/s/",
        description: "Best Ramen Out There.",
        rating: '4'
    },
    {
        name: "Burger King",
        img: "https://cdn.shopify.com/s/files/v2/upload/",
        description: "King of Burgers.",
        rating: '4'
    }
]

restaurantData.forEach((rest) => {
    const body = document.body
    const div = document.createElement("div")
    const span = document.createElement('span')
    div.id = rest.name
    div.innerHTML = rest.name
    div.className = 'rest'
    span.innerHTML = rest.description
    span.className = 'desc'
    div.appendChild(span)
    body.append(div)
    let numbs = rest.rating.split('.')
    for(i=0;i<numbs[0]; i++){
        let div3 = document.createElement('i')
        div3.className = 'bi bi-star-fill'
       div.append(div3)
    }
    if(numbs[1]){
        let div4 = document.createElement('i')
        div4.className = 'bi bi-star-half'
        div.append(div4)
       }
})