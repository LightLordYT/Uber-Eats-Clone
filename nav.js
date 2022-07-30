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

const menu = document.getElementById('Menu')
const controls = document.getElementById('Admin Controls')
const register = document.getElementById('Register')
const search = document.getElementById('Search')
const settings = document.getElementById('Settings')

settings.addEventListener('click', () => location.href = 'settings.html')
menu.addEventListener('click', () => location.href = 'index.html')
controls.addEventListener('click', () => location.href = 'admincontrols.html')
register.addEventListener('click', () => location.href ='register.html')