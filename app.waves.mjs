import Signer  from '@waves/signer';
import ProviderSeed  from '@waves/provider-seed';
import Provider from '@waves.exchange/provider-web';
import transactions from '@waves/waves-transactions';
import signatureAdapter from '@waves/signature-adapter';
import dataEntities from '@waves/data-entities';
import signatureGenerator from '@waves/signature-generator';
export default {
        Provider:Provider,
        ProviderSeed:ProviderSeed,
        Signer:Signer,
        transactions:transactions,
        libs:transactions['libs'],
        signatureAdapter:signatureAdapter,
        dataEntities:dataEntities,
        signatureGenerator:signatureGenerator
}