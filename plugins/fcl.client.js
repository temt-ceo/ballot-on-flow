import * as fcl from '@onflow/fcl'
import * as types from '@onflow/types'

fcl.config({
  'accessNode.api': 'https://access-testnet.onflow.org', // Mainnet: "https://access-mainnet-beta.onflow.org"
  'discovery.wallet': 'https://fcl-discovery.onflow.org/testnet/authn', // Mainnet: "https://fcl-discovery.onflow.org/authn"
  '0xT': '0x6c41167b7affe53d' // The account address where the smart contract lives
})

export default ({ app }, inject) => {
  inject('fcl', fcl)
  inject('fclArgType', types)
}
