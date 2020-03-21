let object = {}
import { tests } from '/static/html/components/component_modules/loader/loader.mjs'
export default ( obj ={ _:'default' } ) =>{
    return new Promise(async (resolve, reject) =>{
        await tests('/tests/wallet.mjs','tests')
        let test = document.createElement('script');
        test.type = 'module';
        test.innerHTML =  (()=>{
            (async (document)=>{ mocha.run() })(document)
        })();
        document.body.appendChild(test);


        resolve(object)
    })
}