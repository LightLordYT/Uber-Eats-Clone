const restaurantData = [
    {
        name: "McDonald's",
        img: "https://cdn.cdnlogo.com/logos/m/12/mcdonalds.svg",
        description: "Fast Food, Fast Service",
        rating: '3.5',
    },
    {
        name: "Wendy's",
        img: "https://cdn.cdnlogo.com/logos/w/19/wendys.svg",
        description: "Amazing Food",
        rating: '3.5',
    },
    {
        name: "Ichiran Sushi",
        img: "https://cdn.cdnlogo.com/logos/s/10/sushiswap.svg",
        description: "Best Sushi Ever.",
        rating: '4.5'
    },
    {
        name: "Kenta Ramen",
        img: "https://scontent.ftpe7-4.fna.fbcdn.net/v/t31.18172-8/474630_563104630401057_1048793268_o.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qk_p1ksKDmgAX_7Ajum&_nc_ht=scontent.ftpe7-4.fna&oh=00_AT8fKAJfvmDiXqgxxtdfRCIvg6MMKPqP2Jw0dCsuEvFtWw&oe=6308846E",
        description: "Best Ramen Out There.",
        rating: '4'
    },
    {
        name: "Burger King",
        img: "https://cdn.cdnlogo.com/logos/b/73/burger-king.svg",
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
    const img = document.createElement('img')
    img.src = rest.img
    img.alt = rest.name
    img.className = 'restImg'
    div.append(img)
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