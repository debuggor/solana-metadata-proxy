const {Connection, programs} = require("@metaplex/js")
const {metadata: {Metadata}} = programs;
require('dotenv').config({path: __dirname + '/.env'});

let solanaRpc = process.env.SolanaRpc || "";
let split = solanaRpc.split(",");

let rpcList: any[] = []

function connectList() {
    rpcList = []
    for (let i = 0; i <= split.length; i++) {
        let rpc = split[i];
        const connection = new Connection(rpc);
        rpcList.push(connection);
        console.info("solana rpc endpoint ", connection.rpcEndpoint)
    }
    console.info("solana rpc endpoint number ", rpcList.length)
}

export async function solanaMetadata(tokenPublicKey: string, i: number) {
    if (rpcList.length == 0 || !i) {
        connectList()
    }
    i = i || 0;
    i = i < rpcList.length ? i : 0;
    const pda = await Metadata.getPDA(tokenPublicKey);
    const ownedMetadata = await Metadata.load(rpcList[i], pda);
    return ownedMetadata;
}
