import Waves from '/static/html/components/component_modules/waves/waves.mjs'
import actions from '/static/html/components/component_modules/relation/waves.mjs'
import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
import Post from '/static/html/components/component_modules/postMessage/postMessage.mjs'
import substrate from '/static/html/components/component_modules/relation/waves.mjs'
let waves =  Waves()
let testObject = {}
testObject.staticProperty = {}
testObject.staticProperty.wallet = []
waves.then((waves)=>{
    const wvs = 10 ** 8;
    let object = {}
    object.dapp = '3N8n4Lc8BMsPPyVHJXTivQWs7ER61bB7wQn'
    object.testnodes = 'http://testnodes.wavesnodes.com'
    object.client = []
    object.client.alice = '3MvegjWphvbYgEgQmqJiJhYWXnqPNTpieVc'

    describe('blockchain-waves', async function () {
        this.timeout(10000);

        before(async function () {
            console.log('emoji', emoji('all'))
            console.thinking('(((~~~))) waves (((~~~)))',emoji('thinking'), waves)
        });

        it('Connect bank(подключение банка)', function () {
            return new Promise(function (resolve, reject) {
                waves.bank(true, `${emoji('thinking')} какие то свойства`,'3', actions,'bank')
                document.addEventListener('connected-bank',async (event)=>{
                    switch (event['detail']['/']) {
                        case 'bank':
                            if (event.detail.dAppData) {
                                console.log("dApp Account data:");
                                console.log(event.detail.dAppData);
                            }
                            break
                        default:
                            console.warn(`${emoji('thinking')}результат не обрабатывается${emoji('thinking')}`, event['detail']['/'], event['detail'])
                            break
                    }
                    resolve(event.detail.dAppData)
                })
            })
        })

        it('Create wallet(создание кошелька)', function () {
            return new Promise(function (resolve, reject) {
                waves.wallet(true, `${emoji('thinking')} какие то свойства`, '3', actions, 'wallet')
                document.addEventListener('created-wallet', async (event) => {
                    switch (event['detail']['/']) {
                        case 'wallet':
                            testObject.staticProperty.wallet = event.detail
                            console.log(`${emoji(`dancer`)}`, event.detail, `${emoji(`dancer`)}`)
                            break
                        default:
                            console.warn(`${emoji('thinking')}результат не обрабатывается${emoji('thinking')}`, event['detail']['/'], event['detail'])
                            break
                    }
                    resolve(event.detail.wallet)
                })
            })
        })

        describe('Save wallet', async function () {
            it('Send wallet(сохранение кошелька)', function () {
                return new Promise(async (resolve, reject)=>{
                   let post = await Post('save-wallet')
                   await post.windows('http://localhost:5401','/post',true, `${emoji('pouting_woman')}`, '2',substrate, 'save-wallet')

                    resolve(true)
                })
            })

            it('Faucet for wallet(перевод средств на кошелёк)', function () {
                return new Promise(async (resolve, reject)=>{
                    let post = await Post('faucet-wallet')
                    let tx = await post.windows('http://localhost:8020','/post',true, `${emoji('pouting_woman')}`, '2',{'faucet-wallet': [{address:'3MvegjWphvbYgEgQmqJiJhYWXnqPNTpieVc'}]}, 'faucet-wallet')
                    console.log(`${emoji('tiger')} --->`, tx.data.data.tx.id)
                    await waves.waitForTx(tx.data.data.tx.id,{
                        apiBase:'https://nodes-testnet.wavesnodes.com'
                    })
                    console.log(`${emoji('beer')} --->`, tx.data.data.tx)
                    resolve(true)
                })
            })

            describe('Create game (создать игру)', async function () {

                it('Create ID(создать ID)', function () {
                    return new Promise(async (resolve, reject)=>{
                        reject(true)
                    })
                })

                it('Create Network Interface (создать интерфейс игры)', function () {
                    return new Promise(async (resolve, reject)=>{

                        reject(true)

                    })
                })

                it('Create Player (создать игрока)', function () {
                    return new Promise(async (resolve, reject)=>{

                        reject(true)

                    })
                })

                it('Create Board (создать доску)', function () {
                    return new Promise(async (resolve, reject)=>{

                        reject(true)

                    })
                })
            })
        })
    })
})