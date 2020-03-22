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
            // console.log('emoji', emoji('all'))
            console.thinking('(((~~~))) waves (((~~~)))',emoji('thinking'), waves)
            // console.log()
            // await setupAccounts(
            //     {foofoofoofoofoofoofoofoofoofoofoo: 10 * wvs,
            //          barbarbarbarbarbarbarbarbarbar: 2 * wvs,
            //           wallet: 0.05 * wvs});
            // const script = compile(file('wallet.ride'));
            // const ssTx = setScript({script}, accounts.wallet);
            // await broadcast(ssTx);
            // await waitForTx(ssTx.id)
        });

        it('connect bank', async function () {

            await waves.bank(true, `${emoji('thinking')} какие то свойства`,'3', actions,'bank')

            // let dAppData = await waves['transactions']['nodeInteraction'].accountData(object.dapp, object.testnodes)
            //     if (dAppData) {
            //         console.log("dApp Account data:");
            //         console.log(dAppData);
            //     }
        })
        it('create wallet', async function () {

            // const seed = waves['libs'].crypto.randomSeed(15);
            // console.log('seed', seed)
            // const signer = new waves['Signer']['default']({
            //     NODE_URL: 'https://pool.testnet.wavesnodes.com'
            // });
            // signer.setProvider(new waves['ProviderSeed']['default'](seed))
            // const user = await signer.login();
            // const balances = await signer.getBalance();
            // console.log('',)
        })
    })

    //     before(async function () {

    // console.log('dddd')

    // await setupAccounts(
    //     {foofoofoofoofoofoofoofoofoofoofoo: 10 * wvs,
    //          barbarbarbarbarbarbarbarbarbar: 2 * wvs,
    //           wallet: 0.05 * wvs});
    // const script = compile(file('wallet.ride'));
    // const ssTx = setScript({script}, accounts.wallet);
    // await broadcast(ssTx);
    // await waitForTx(ssTx.id)
    // });
    // describe('connecting dapp', async function () {
    // this.timeout(100000);

    // it('accountData', async function () {
    //     let dAppData = await Waves['default']['transactions']['nodeInteraction'].accountData(object.dapp, object.testnodes)
    //     if (dAppData) {
    //         window.dAppDataKeys = Object.keys(dAppData);
    //         console.log("dApp Account data:");
    //         console.log(dAppData);
    //     }
    // })

    // it('balanceDetails', async function () {
    // let accountbalance = await  Waves['default']['transactions']['nodeInteraction']['balanceDetails'](object.dapp, object.testnodes)
    // accountbalance = accountbalance['regular'] / wvs
    // console.log('balanceDetails', accountbalance)

    // return false
    // })

    // it('accountDataByKey', async function () {

    // let accountBalance = await  Waves['default']['transactions']['nodeInteraction']['accountDataByKey'](`${object.client.alice}_balance`, object.dapp, object.testnodes)
    // console.log('balanceDetails', accountBalance)
    // return false
    // })
    //
    // })



    // it('Can deposit', async function () {

    // const iTxFoo = invokeScript({
    //     dApp: address(accounts.wallet),
    //     call: {function: "deposit"},
    //     payment: [{assetId: null, amount: 0.9 * wvs}]
    // }, accounts.foofoofoofoofoofoofoofoofoofoofoo);


    // const iTxBar = invokeScript({
    //     dApp: address(accounts.wallet),
    //     call: {function: "deposit"},
    //     payment: [{assetId: null, amount: 1.9 * wvs}]
    // }, accounts.barbarbarbarbarbarbarbarbarbar)


    // await broadcast(iTxFoo);
    // await broadcast(iTxBar);
    // await waitForTx(iTxFoo.id);
    // await waitForTx(iTxBar.id);
    // })

    // it('Cannot withdraw more than was deposited', async function () {
    // const iTxFoo = invokeScript({
    //     dApp: address(accounts.wallet),
    //     call: {
    //         function: "withdraw",
    //         args: [{type:'integer', value: 2 * wvs}]
    //     },
    //
    // }, accounts.foofoofoofoofoofoofoofoofoofoofoo);
    //
    // expect(broadcast(iTxFoo)).to.be.rejectedWith("Not enough balance")
    // })

    // it('Can withdraw', async function () {
    // const iTxFoo = invokeScript({
    //     dApp: address(accounts.wallet),
    //     call: {
    //         function: "withdraw",
    //         args: [{ type: 'integer', value: 0.9 * wvs }]
    //     },
    //
    // }, accounts.foofoofoofoofoofoofoofoofoofoofoo);
    // await broadcast(iTxFoo)
    // })




})