
export default {
    bank:[{
            '/':'bank',
            relation:{

            },
            property:{
                dapp:'3N8n4Lc8BMsPPyVHJXTivQWs7ER61bB7wQn',
                testnodes:'http://testnodes.wavesnodes.com',
            },
            substrate:{ },
        },
    ],
    wallet:[{
            '/':'wallet',
            relation:{
            },
            property:{
                dapp:'',
                testnodes:'http://testnodes.wavesnodes.com',
            },
            substrate:{ },
        },
    ],
    'save-wallet':[
        {
            '/':'addEventListener',
            'items':'saveGitHubEnd',
            'window.opener.postMessage':{status:'true', path:'http://localhost:7030/'},
        },
        {
            '/':'addEventListener',
            'items':'githubAuthEnd',
            'dispatchEvent':'connectRepo'
        },
        {
            '/':'dispatchEvent',
            'items':'connectGitHub',
        },


    ]
}


//             document.dispatchEvent( new CustomEvent('connectGitHub', {
//                 detail: {
//                     _:'connectGoogle',
//                 }
//             }))
//             document.addEventListener('githubAuthEnd',async (e)=>{
//                 document.dispatchEvent( new CustomEvent('connectRepo', {
//                     detail: {
//                         _:'connectGoogle',
//                     }
//                 }))
//
//             })
//
//             document.addEventListener('saveGitHubEnd', async (e)=>{
//                 window.opener.postMessage({file:'true'}, 'http://localhost:7030/')
//                 window.close()
//         })