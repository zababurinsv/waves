import colorlog from '/static/html/components/component_modules/colorLog/colorLog.mjs'
import isEmpty from '/static/html/components/component_modules/isEmpty/isEmpty_t.mjs'
import emoji from '/static/html/components/component_modules/emoji/emoji.mjs'
function bestCopyEver(src) {
    return Object.assign({}, src);
}
export default (views,property,color,substrate,relation)=>{
    return  new Promise(async (resolve, reject) => {
        color = 'action'
        switch (relation.toLowerCase()) {
            case 'button':
                let json = (await Json(views))
                let selected = await json.select(substrate)
                let jsonTemplate = {}
                if(property.hasOwnProperty('property')){
                    jsonTemplate = await json.transformWith(property.property, false, selected)
                }else{
                    jsonTemplate = await json.transformWith(property, false, selected)
                }
                let button = await json.root(jsonTemplate)
                await colorlog(views,'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',color, button, relation )
                document.dispatchEvent( new CustomEvent('actionButton', {
                    detail: {
                        _:'button',
                        button
                    }
                }))
                break
            case 'player':
                (async (views,property,color,substrate,relation)=>{

                    let json = (await Json(views))
                    let selected = await json.select(substrate)
                    let jsonTemplate = {}
                    if(property.hasOwnProperty('property')){
                        jsonTemplate = await json.transformWith(property.property, false, selected)
                    }else{
                        jsonTemplate = await json.transformWith(property, false, selected)
                    }
                    let button = await json.root(jsonTemplate)
                    await colorlog(views,'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',color, button, relation )
                    document.dispatchEvent( new CustomEvent('actionButton', {
                        detail: {
                            _:'button',
                            button
                        }
                    }))

                })(views,property,color,substrate,relation)
                break
            case 'authtorization':
                (async (views,property,color,substrate,relation)=>{
                    if(isEmpty(substrate[`${relation}`])){
                        console.warn('субстрат не определён ---> ',  substrate)
                    }else{

                    }
                })(views,property,color,substrate,relation)
                break
            case 'bank':
                (async (views,property,color,substrate,relation)=>{
                    if(isEmpty(substrate[`${relation}`])){
                        console.warn(`${emoji('kissing_heart')} субстрат не определён --->`,  substrate)
                    }else{
                        for(let key in substrate)

                        console.assert(false, substrate, )

                    }
                })(views,property,color,substrate,relation)
                break
            default:
                console.warn(`${emoji('kissing_heart')} waves.mjs нет обработчика --->`, relation.toLowerCase(), '[(' ,views,property,color,substrate,relation ,')a]')
                break
        }
        resolve({ key:true})
    })
}