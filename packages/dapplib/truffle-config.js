require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food fire creek noble protect industry light army gas'; 
let testAccounts = [
"0xe2bf4a705d0348c4d665b9dcdaba3f6e6cae6fab7b66452e5dd2bbcd0bc130ac",
"0xbf4f8ef9caa38d1d5f9d8a1523110f52b701a7a6c20ca852b9d8cc1685c11ca6",
"0x898062e2566f3f9fc0b478625817eb2c3152c0eb4f7d2cef8efa78bed97bcbb5",
"0x8adb68800c926ca91521ebd489bfb4253b83101d92fa0d36e66b6df6252fc076",
"0x31303ff9821e13100918f23f9c9f066185788995b10f09df83063438de3b906d",
"0x52d1afb9dfdc00c2886e93fe2f75d9b134a23edec8e4c5d69a860c8f7b3c519c",
"0x21fd50f1103e0f3aebf87682c29bb046f071cd06d05426f8900641a7cc464c40",
"0xd36923a9e8465325ae3583f24ded2d48bafebb6588b76c9029a057b2802487f8",
"0x7c44ed8947d940f2b385591b9e78ccc80ac2479a3fa15cf1a4520b879b3761f8",
"0xb556e56ae5ba5000e5a8fe5304efac7a5622113c0bfca021b1d0a9946638da34"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


