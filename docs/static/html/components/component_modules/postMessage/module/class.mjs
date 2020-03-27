import colorlog from '/static/html/components/component_modules/colorLog/colorLog.mjs'
import queue from '/static/html/components/component_modules/queue/queue.mjs'
import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty_t.mjs'
import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
let Class = class Post {
    constructor(self) {
        this.iframe = this.iframe.bind(this)
        this.window = this.window.bind(this)
        this.listener = this.listener.bind(this)
        this.end = this.end.bind(this)
        document.addEventListener('typeScript-end', this.end)
    }
    iframe(view = true,property='',color = 'black', substrat={},relation=''  ){
        return new Promise(async function (resolve, reject) {

            let scrollWidth = Math.max(
                document.body.scrollWidth, document.documentElement.scrollWidth,
                document.body.offsetWidth, document.documentElement.offsetWidth,
                document.body.clientWidth, document.documentElement.clientWidth
            );
            window.open(`http://localhost:5401`,'github',`height=${scrollWidth/3},width=${scrollWidth/1.5},scrollbars=no,toolbar=no,menubar=no,status=no,resizable=no,scrollbars=no,location=no,top=${scrollWidth/2-((scrollWidth/1.5)/2)},left=${scrollWidth/2-((scrollWidth/1.8)/2)}`);
            window.addEventListener("message", (event) => {
                console.log('connect', event.data)
                if(event.data.file === 'true'){
                    resolve(true)
                }else{
                    event.source.postMessage({key:'value'},'http://localhost:5401')
                }
            });

        })
    }
    window(view = true,property='',color = 'black', substrat={},relation=''  ){
        return new Promise(async function (resolve, reject) {

            let scrollWidth = Math.max(
                document.body.scrollWidth, document.documentElement.scrollWidth,
                document.body.offsetWidth, document.documentElement.offsetWidth,
                document.body.clientWidth, document.documentElement.clientWidth
            );
            window.open(`http://localhost:5401`,'github',`height=${scrollWidth/3},width=${scrollWidth/1.5},scrollbars=no,toolbar=no,menubar=no,status=no,resizable=no,scrollbars=no,location=no,top=${scrollWidth/2-((scrollWidth/1.5)/2)},left=${scrollWidth/2-((scrollWidth/1.8)/2)}`);
            window.addEventListener("message", (event) => {
                console.log('connect', event.data)
                if(event.data.file === 'true'){
                    resolve(true)
                }else{
                    event.source.postMessage({key:'value'},'http://localhost:5401')
                }
            });

        })
    }
    listener(id){
        return new Promise(async function (resolve, reject) {
            if(location.pathname === '/post'){
                if(!isEmpty(window.opener)){
                    let msg = { '/': `${id}`, connect: true };
                    window.opener.postMessage(msg, 'http://localhost:7030/')
                    window.opener.focus();
                    window.addEventListener ("message", (event) => {
                        if(event.origin==='http://localhost:7030'){
                            console.log('~~~~~~~~~~~~~~ response ~~~~~~~~~~~~~~', event.data)
                            if(isEmpty(event.data.view)) console.assert(false,`${emoji('thinking')} нет аргумента view`)
                            if(isEmpty(event.data.property)) console.assert(false,`${emoji('thinking')} нет аргумента property`)
                            if(isEmpty(event.data.color)) console.assert(false,`${emoji('thinking')} нет аргумента color`)
                            if(isEmpty(event.data.substrat)) console.assert(false,`${emoji('thinking')} нет аргумента substrat`)
                            if(isEmpty(event.data.relation)) console.assert(false,`${emoji('thinking')} нет аргумента relation`)
                            queue(event.data.view, property,color,substrat,relation)

                        }
                    })
                }
            }
            resolve({status:true})
        })
    }
    end(event){
        queue(event['detail']['console'], '~end',event['detail']['color'],event['detail']['substrate'],event['detail']['relation']).then((data)=>{

            colorlog(true, 'stat','stat',data, 'статистика')

        })
    }
    get self() {
        return object
    }
}

export default Class