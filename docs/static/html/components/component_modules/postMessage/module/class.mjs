import colorlog from '/static/html/components/component_modules/colorLog/colorLog.mjs'
import queue from '/static/html/components/component_modules/queue/queue.mjs'
import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty.mjs'
import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
let Class = class Post {
    constructor() {
        this.iframes = this.iframes.bind(this)
        this.windows = this.windows.bind(this)
        this.listener = this.listener.bind(this)
        this.end = this.end.bind(this)
        document.addEventListener('post-end', this.end)
    }
    iframes(view = true,property='',color = 'black', substrat={},relation=''  ){
        return new Promise(async function (resolve, reject) {

            let scrollWidth = Math.max(
                document.body.scrollWidth, document.documentElement.scrollWidth,
                document.body.offsetWidth, document.documentElement.offsetWidth,
                document.body.clientWidth, document.documentElement.clientWidth
            );
            window.open(`http://localhost:5401`,'github',`height=${scrollWidth/3},width=${scrollWidth/1.5},scrollbars=no,toolbar=no,menubar=no,status=no,resizable=no,scrollbars=no,location=no,top=${scrollWidth/2-((scrollWidth/1.5)/2)},left=${scrollWidth/2-((scrollWidth/1.8)/2)}`);
        })
    }
    windows(host='',path='',view = true,property='',color = 'black', substrate={},relation=''  ){
        return new Promise(async function (resolve, reject) {
            let hosts =  host
            let scrollWidth = Math.max(
                document.body.scrollWidth, document.documentElement.scrollWidth,
                document.body.offsetWidth, document.documentElement.offsetWidth,
                document.body.clientWidth, document.documentElement.clientWidth
            );
            window.addEventListener("message", async (event) => {
                if(event.origin === host){
                    if(event.data.status === 'true'){
                        console.log(`${emoji('smile')} response`,event.origin,'--->',event.data, )
                        resolve(event.data)
                    }else{
                        console.log(`${emoji('panda_face')} request`,event.data)
                        for(let key in substrate ){
                            if(key !== relation){
                              delete substrate[key]
                            }
                        }
                        if(Object.keys(substrate).length > 1){
                            console.warn(`${emoji('rage')} class.mjs postMessage у объекта должно быть одно свойтсво --->`, substrate)
                        }else if(Object.keys(substrate).length === 0){
                            console.warn(`${emoji('rage')} class.mjs postMessage субстран не посылается, может быть он существует на стороне обработчика --->`, substrate)
                        }
                        event.source.postMessage({view:view,property:property,color:color,substrate:substrate,relation:relation },event.origin)
                    }
                }else{
                    // console.log(`${emoji('rage')} blockchain-waves Not Allowed`, '--->' ,event,':host === origin', host,'===', event.origin)
                }
            });
            window.open(`${host}${path}`,`${relation}`,`height=${scrollWidth/3},width=${scrollWidth/1.5},scrollbars=no,toolbar=no,menubar=no,status=no,resizable=no,scrollbars=no,location=no,top=${scrollWidth/2-((scrollWidth/1.5)/2)},left=${scrollWidth/2-((scrollWidth/1.8)/2)}`);
        })
    }
    listener(access= ''){
        return new Promise(async function (resolve, reject) {
            if(location.pathname === '/post'){
                try {
                    window.addEventListener ("message", async (event) => {
                        if(event.origin === access){
                            console.log(`${emoji('smile')} resolved`, event.data)
                            if(isEmpty(event.data.view)) console.assert(false,`${emoji('thinking')} нет аргумента view`)
                            if(isEmpty(event.data.property)) console.assert(false,`${emoji('thinking')} нет аргумента property`)
                            if(isEmpty(event.data.color)) console.assert(false,`${emoji('thinking')} нет аргумента color`)
                            if(isEmpty(event.data.substrate)) console.assert(false,`${emoji('thinking')} нет аргумента substrate`)
                            if(isEmpty(event.data.relation)) console.assert(false,`${emoji('thinking')} нет аргумента relation`)
                            queue(event.data.view, event.data.property,event.data.color,event.data.substrate,event.data.relation)
                        }else{
                            console.log(`${emoji('rage')} not allowed`, event.origin)
                        }
                    })
                    let msg = { '/': `${location.host}`, connect: true };
                    window.opener.postMessage(msg, `${access}`)
                    window.opener.focus();
                }catch (e) {
                    resolve({status:false, err: e})
                }
            }else{
                resolve({status:false})
            }
        })
    }

    end(event){
        console.log(`${emoji('smile')} send`,event.detail, event.detail.origin)
        window.opener.postMessage({status:'true', data:event.detail}, `${event.detail.origin}`)
        window.close()
    }

    get self() {
        return object
    }
}

export default Class

//     window.removeEventListener('message', async ()=>{}, false);
//