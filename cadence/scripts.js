export default {
  isAdmin: `
import BallotV1 from 0xT
pub fun main(address: Address): &BallotV1.AdminPublic? {
    let account = getAccount(address)
    return account.getCapability<&BallotV1.AdminPublic>(BallotV1.AdminPublicPath).borrow()
}
  `,
  hasDispenserVault: `
import BallotV1 from 0xT
pub fun main(address: Address): &BallotV1.DispenserVault{BallotV1.IDispenserPublic}? {
    let account = getAccount(address)
    return account.getCapability<&BallotV1.DispenserVault{BallotV1.IDispenserPublic}>(BallotV1.DispenserVaultPublicPath).borrow()
}
  `,
  getRequestedDispensers: `
import BallotV1 from 0xT
pub fun main(address: Address): [BallotV1.DispenserStruct] {
    let account = getAccount(address)
    let adminVault = account.getCapability<&BallotV1.AdminPublic>(BallotV1.AdminPublicPath).borrow()
        ?? panic("Could not borrow Administrator capability.")
    return adminVault.getDispenserRequesters()
}
  `,
  getDispenserDomains: `
import BallotV1 from 0xT
pub fun main(): [String] {
  return BallotV1.getDispenserDomains()
}
  `,
  hasDispenser: `
import BallotV1 from 0xT
pub fun main(address: Address): Bool {
    let account = getAccount(address)
    let dispenserVault = account.getCapability<&BallotV1.DispenserVault{BallotV1.IDispenserPublic}>(BallotV1.DispenserVaultPublicPath).borrow()
        ?? panic("Could not borrow DispenserVault capability.")
    return dispenserVault.hasDispenser()
}
  `,
  getDispenserInfo: `
import BallotV1 from 0xT
pub fun main(address: Address): {UInt32: String}? {
    return BallotV1.getDispenserInfo(address: address)
}
  `,
  getTickets: `
import BallotV1 from 0xT
pub fun main(): [BallotV1.TicketStruct] {
    return BallotV1.getTickets()
}
  `,
  getTicketRequestStatus: `
import BallotV1 from 0xT
pub fun main(addr: Address, dispenser_id: UInt32): BallotV1.RequestStruct? {
    let account = getAccount(addr)
    let ticketVault = account.getCapability<&BallotV1.TicketVault{BallotV1.ITicketPublic}>(BallotV1.TicketVaultPublicPath).borrow()
        ?? panic("Could not borrow TicketVault capability.")
    let user_id = ticketVault.getId()
    return BallotV1.getTicketRequestStatus(dispenser_id: dispenser_id, user_id: user_id)
}
  `,
  getLatestMintedTokenId: `
import BallotV1 from 0xT
pub fun main(addr: Address): UInt64? {
  let account = getAccount(addr)
  let dispenserVault = account.getCapability<&BallotV1.DispenserVault{BallotV1.IDispenserPublic}>(BallotV1.DispenserVaultPublicPath).borrow()
      ?? panic("Could not borrow DispenserVault capability.")
  return dispenserVault.getLatestMintedTokenId()
}
  `,
  getTicketRequesters: `
import BallotV1 from 0xT
pub fun main(addr: Address): {UInt32: BallotV1.RequestStruct}? {
    let account = getAccount(addr)
    let dispenserVault = account.getCapability<&BallotV1.DispenserVault{BallotV1.IDispenserPublic}>(BallotV1.DispenserVaultPublicPath).borrow()
        ?? panic("Could not borrow DispenserVault capability.")
    return dispenserVault.getTicketRequesters()
}
  `,
  hasTicketResource: `
import BallotV1 from 0xT
pub fun main(addr: Address): &BallotV1.TicketVault{BallotV1.ITicketPublic}? {
    let account = getAccount(addr)
    return account.getCapability<&BallotV1.TicketVault{BallotV1.ITicketPublic}>(BallotV1.TicketVaultPublicPath).borrow()
}
  `,
  getTicketUsedTime: `
import BallotV1 from 0xT
pub fun main(addr: Address, dispenser_id: UInt32): {UInt64: UFix64??}? {
  let account = getAccount(addr)
  let ticketVault = account.getCapability<&BallotV1.TicketVault{BallotV1.ITicketPublic}>(BallotV1.TicketVaultPublicPath).borrow()
      ?? panic("Could not borrow TicketVault capability.")
  return ticketVault.getUsedTime(dispenser_id: dispenser_id)
}
`,
  getTicketCode: `
import BallotV1 from 0xT
pub fun main(addr: Address, dispenser_id: UInt32): {UInt64: String}? {
  let account = getAccount(addr)
  let ticketVault = account.getCapability<&BallotV1.TicketVault{BallotV1.ITicketPublic}>(BallotV1.TicketVaultPublicPath).borrow()
      ?? panic("Could not borrow TicketVault capability.")
  return ticketVault.getCode(dispenser_id: dispenser_id)
}
  `,
  examinTicketRequesters: `
import BallotV1 from 0xT
pub fun main(address: Address, idList: [UInt32]): {UInt32: {UInt32: BallotV1.RequestStruct}?} {
  let account = getAccount(address)
  let adminVault = account.getCapability<&BallotV1.AdminPublic>(BallotV1.AdminPublicPath).borrow()
      ?? panic("Could not borrow Administrator capability.")
  let ticketRequester: {UInt32: {UInt32: BallotV1.RequestStruct}?} = {}
  for dispenser_id in idList {
    let obj: {UInt32: BallotV1.RequestStruct}? = adminVault.getTicketRequesters(dispenser_id: dispenser_id)
    ticketRequester[dispenser_id] = obj
  }
  return ticketRequester
}
  `
}
