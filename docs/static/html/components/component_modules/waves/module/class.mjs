import colorlog from '/static/html/components/component_modules/colorLog/colorLog.mjs'
import queue from '/static/html/components/component_modules/queue/queue.mjs'
import bundle from '/static/html/components/component_modules/waves/module/waves-bundle.mjs'
let Class = class Waves {
    constructor(self) {
        this.bank = this.bank.bind(this)
        this.balance = this.balance.bind(this)
        this.wallet = this.wallet.bind(this)
        this.faucet = this.faucet.bind(this)
        this.transfer = this.transfer.bind(this)
        this.waitForTx = this.waitForTx.bind(this)
        this.end = this.end.bind(this)
        document.addEventListener('typeScript-end', this.end)
    }
    balance(id){
        return new Promise(async (resolve, reject)=>{
            let balance = await fetch(`http://testnodes.wavesnodes.com/addresses/balance/${id}`)
            resolve(await balance.json())
        })
    }
    transfer(console = true,property='a',color = 'black', substrat={_:'button'},relation='transfer'  ){
        return queue(console, property,color,substrat,relation)
    }
    faucet(console = true,property='a',color = 'black', substrat={_:'button'},relation='faucet'  ){
        return queue(console, property,color,substrat,relation)
    }
    bank(console = true,property='a',color = 'black', substrat={_:'button'},relation='bank'  ){
        return queue(console, property,color,substrat,relation)
    }
    wallet(console = true,property='a',color = 'black', substrat={_:'player'},relation='wallet'  ){
        return queue(console, property,color,substrat,relation)
    }
    waitForTx(id, node){
        return  new Promise(async (resolve, reject) => {
            resolve(bundle['default']['transactions']['waitForTx'](id, node))
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