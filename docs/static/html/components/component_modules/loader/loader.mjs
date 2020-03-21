import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty.mjs'
export let style = (asyncStyleSheets='#') => {
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < asyncStyleSheets.length; i++) {
            let link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('href', asyncStyleSheets[i]);
            document.head.appendChild(link);
        }

    })
}

export let tests = (url, target)=>{
    return new Promise(function (resolve, reject) {
        let load = document.createElement('script');
        load.src = url
        load.type = 'module'
        if(isEmpty(target)){
            console.warn(`установите путь куда будет добавлен скрипт /n устанавливается в body `)
            document.body.appendChild(load)
        }else{
            document.body.querySelector(`#${target}`).appendChild(load)
        }

        load.onload = (out) =>{
            resolve({loading:true})
        }
    })
}
export let add = (url, target)=>{
    return new Promise(function (resolve, reject) {
        let load = document.createElement('script');
        load.src = url
        if(isEmpty(target)){
            console.warn(`установите путь куда будет добавлен скрипт /n устанавливается в body `)
            document.body.appendChild(load)
        }else{
            document.body.querySelector(`#${target}`).appendChild(load)
        }

        load.onload = (out) =>{
            resolve(window[name])
        }
    })
}

export default (url, name)=>{
    return new Promise(function (resolve, reject) {
        let load = document.createElement('script');
        load.src = url
        document.body.appendChild(load)
        load.onload = (out) =>{
            resolve(window[name])
        }
    })
}