import {solanaMetadata} from "./solana-metadata";

const express = require('express');
const timeout = require('connect-timeout')
require('dotenv').config({path: __dirname + '/.env'});
const app = express();

app.get('/solana/metadata/:address/:number?', timeout('5s'),
    async function (request: {
        params: {
            number: number;
            address: string;
        };
    }, response: {
        end: (arg0: string) => void;
    }) {
        try {
            const address = request.params.address;
            const number = request.params.number || 0;
            let metadata = await solanaMetadata(address, number);
            response.end(JSON.stringify(metadata));
            return
        } catch (e) {
            console.error(e)
        }
    })


const port = process.env.PORT || 8080;
const host = process.env.HOST || '0.0.0.0';
app.listen(port, host, function () {
    console.log(`Server listening on ${host}:${port}`);
})

