require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note punch proud install infant equal gas'; 
let testAccounts = [
"0xfb9f67d742ac1369a87f3d0ca0b3fcb581854848b5720ec4909793b6a049dd78",
"0xce5cc94eeec5d625e9f436d985791d29bbd50110b9243223ef843a071dea2353",
"0x49325ce3bbe9238eff8119f692b3755762ea602604e510fdbd61d4e487a00b9b",
"0x89b8fdcd64e23e577d8338ded6d4293d26c022ba235dd8c0e8e62b1150041907",
"0x7bd077559bfcc3fea40a19ed3df1dc1ab21323f967d3ed747fe288c6bb148029",
"0x941576727c2509a5e7d4df0a77f6da3e9622c323e655c497a435c57d0c9f0b72",
"0xed11824ae11b1dbe41bffd432f6c29477823509bf7e328afc07d0b512a5095d2",
"0xac30ad5d054e15167a71526e03be1607e1e5f74c243104aee0b37c50541f1d0f",
"0xd2c19248796e0d5544d71f31cee0eddb9a3f11b93694f49c7faf48736f7bdcb6",
"0x30995450133b5092eef5c38a2baa11211e2096333d938dbd31e3f7c394fcdb18"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
