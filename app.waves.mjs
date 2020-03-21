import Signer  from '@waves/signer';
import ProviderSeed  from '@waves/provider-seed';
import Provider from '@waves.exchange/provider-web';
import transactions from '@waves/waves-transactions';
export default {
        Provider:Provider,
        ProviderSeed:ProviderSeed,
        Signer:Signer,
        transactions:transactions,
        libs:transactions['libs'],
}