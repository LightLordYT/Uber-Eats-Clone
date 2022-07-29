const div = document.createElement('div')
let navItem;
const navEl = ['Menu', 'Admin Controls', 'Register', 'Search', 'Settings']
const body = document.body
div.id = 'nav'
div.className = 'nav'
body.append(div)
navEl.forEach((i) => {
    navItem = document.createElement('div')
    navItem.innerHTML = i
    navItem.className = 'navItem'
    navItem.id = i
    div.append(navItem)
})
