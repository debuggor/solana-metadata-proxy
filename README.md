## solana metadata proxy 

### compile

    npm install
    
    npm run-script build
    
    拷贝.env到dist目录  cp ./src/.env ./dist
    node dist/index.js

### config

    HOST=0.0.0.0
    PORT=8081
    SolanaRpc="https://solana-mainnet.phantom.tech,https://mainnet-beta.solflare.network,https://api.vip.mainnet-beta.solana.com"
    
    SolanaRpc配置数组 每个rpc都可以访问 

### curl

    curl http://0.0.0.0:8081/solana/metadata/CpLJ3TY4HczSQq2V3jQKfRxFQNLvwujrgL6J8vhsruG2/1
    
    地址+配置的第几个rpc

### rpc

    https://solana-api.projectserum.com
    
    https://mainnet-beta.solflare.network/
    
    https://solana-mainnet.phantom.tech
    
    https://api.mainnet-beta.solana.com
    
    https://api.metaplex.solana.com/
    
    https://sol-mainnet.wallet.coinbase.com/
    
    https://api.vip.mainnet-beta.solana.com
    
