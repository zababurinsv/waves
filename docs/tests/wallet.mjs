import Waves from '/static/html/components/component_modules/waves/waves.mjs'
import actions from '/static/html/components/component_modules/relation/waves.mjs'
import emoji from '/static/html/components/component_modules/emoji/emoji.mjs';
let waves =  Waves()
waves.then((waves)=>{
    const wvs = 10 ** 8;
    let object = {}
    object.dapp = '3N8n4Lc8BMsPPyVHJXTivQWs7ER61bB7wQn'
    object.testnodes = 'http://testnodes.wavesnodes.com'
    object.client = []
    object.client.alice = '3MvegjWphvbYgEgQmqJiJhYWXnqPNTpieVc'

    describe('post office test suite', async function () {
        this.timeout(10000);

        before(async function () {
            console.log('emoji', emoji('all'))
            console.thinking('(((~~~))) waves (((~~~)))',emoji('thinking'), waves)
        });

        it('connect bank', function () {
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

        it('create wallet', function () {
            return new Promise(function (resolve, reject) {
                waves.wallet(true, `${emoji('thinking')} какие то свойства`, '3', actions, 'wallet')
                document.addEventListener('created-wallet', async (event) => {
                    switch (event['detail']['/']) {
                        case 'wallet':
                            console.log(`${emoji(`dancer`)}`, event.detail.wallet.user, `${emoji(`dancer`)}`)
                            break
                        default:
                            console.warn(`${emoji('thinking')}результат не обрабатывается${emoji('thinking')}`, event['detail']['/'], event['detail'])
                            break
                    }
                    resolve(event.detail.wallet)
                })
            })
        })
    })
})