const settings = [
    {
        id: "themes",
        name: 'Dark Theme',
        btn: 'theme',
        btncallback: themeCallback
    }
]

function themeCallback(){
    const btn = document.getElementById('theme')
    if(btn.innerHTML= 'Off'){
        btn.innerHTML = 'On'
        darkTheme()
    }else{
        btn.innerHTML = 'Off'
        lightTheme()
    }
}

function darkTheme(){

}

function lightTheme(){

}

settings.forEach((setting) => {
    let body = document.body
    let div = document.createElement('div')
    let btn = document.createElement('button')
    div.id = setting.id
    div.className = 'settings'
    div.innerHTML = setting.name
    btn.id = setting.btn
    btn.innerHTML = 'On'
    btn.addEventListener('click',setting. btncallback)
    body.append(div)
    div.appendChild(btn)
})