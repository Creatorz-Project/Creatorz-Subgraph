import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AdCreated,
  ApprovalForAll,
  RoomMinted,
  TokenLaunched,
  TokenListed,
  TokenMinted,
  TokenSold,
  TransferBatch,
  TransferSingle,
  URI,
  VideoMinted
} from "../generated/Token/Token"

export function createAdCreatedEvent(
  Id: BigInt,
  URI: string,
  Advertiser: Address
): AdCreated {
  let adCreatedEvent = changetype<AdCreated>(newMockEvent())

  adCreatedEvent.parameters = new Array()

  adCreatedEvent.parameters.push(
    new ethereum.EventParam("Id", ethereum.Value.fromUnsignedBigInt(Id))
  )
  adCreatedEvent.parameters.push(
    new ethereum.EventParam("URI", ethereum.Value.fromString(URI))
  )
  adCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "Advertiser",
      ethereum.Value.fromAddress(Advertiser)
    )
  )

  return adCreatedEvent
}

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createRoomMintedEvent(
  Id: BigInt,
  URI: string,
  Owner: Address
): RoomMinted {
  let roomMintedEvent = changetype<RoomMinted>(newMockEvent())

  roomMintedEvent.parameters = new Array()

  roomMintedEvent.parameters.push(
    new ethereum.EventParam("Id", ethereum.Value.fromUnsignedBigInt(Id))
  )
  roomMintedEvent.parameters.push(
    new ethereum.EventParam("URI", ethereum.Value.fromString(URI))
  )
  roomMintedEvent.parameters.push(
    new ethereum.EventParam("Owner", ethereum.Value.fromAddress(Owner))
  )

  return roomMintedEvent
}

export function createTokenLaunchedEvent(Id: BigInt): TokenLaunched {
  let tokenLaunchedEvent = changetype<TokenLaunched>(newMockEvent())

  tokenLaunchedEvent.parameters = new Array()

  tokenLaunchedEvent.parameters.push(
    new ethereum.EventParam("Id", ethereum.Value.fromUnsignedBigInt(Id))
  )

  return tokenLaunchedEvent
}

export function createTokenListedEvent(
  Id: BigInt,
  price: BigInt,
  amount: BigInt
): TokenListed {
  let tokenListedEvent = changetype<TokenListed>(newMockEvent())

  tokenListedEvent.parameters = new Array()

  tokenListedEvent.parameters.push(
    new ethereum.EventParam("Id", ethereum.Value.fromUnsignedBigInt(Id))
  )
  tokenListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  tokenListedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenListedEvent
}

export function createTokenMintedEvent(
  ID: BigInt,
  URI: string,
  amount: BigInt,
  price: BigInt,
  launched: boolean,
  creator: Address,
  maxHoldingAmount: BigInt,
  videoIds: BigInt
): TokenMinted {
  let tokenMintedEvent = changetype<TokenMinted>(newMockEvent())

  tokenMintedEvent.parameters = new Array()

  tokenMintedEvent.parameters.push(
    new ethereum.EventParam("ID", ethereum.Value.fromUnsignedBigInt(ID))
  )
  tokenMintedEvent.parameters.push(
    new ethereum.EventParam("URI", ethereum.Value.fromString(URI))
  )
  tokenMintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokenMintedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  tokenMintedEvent.parameters.push(
    new ethereum.EventParam("launched", ethereum.Value.fromBoolean(launched))
  )
  tokenMintedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  tokenMintedEvent.parameters.push(
    new ethereum.EventParam(
      "maxHoldingAmount",
      ethereum.Value.fromUnsignedBigInt(maxHoldingAmount)
    )
  )
  tokenMintedEvent.parameters.push(
    new ethereum.EventParam(
      "videoIds",
      ethereum.Value.fromUnsignedBigInt(videoIds)
    )
  )

  return tokenMintedEvent
}

export function createTokenSoldEvent(
  Id: BigInt,
  amount: BigInt,
  seller: Address,
  buyer: Address
): TokenSold {
  let tokenSoldEvent = changetype<TokenSold>(newMockEvent())

  tokenSoldEvent.parameters = new Array()

  tokenSoldEvent.parameters.push(
    new ethereum.EventParam("Id", ethereum.Value.fromUnsignedBigInt(Id))
  )
  tokenSoldEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  tokenSoldEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  tokenSoldEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return tokenSoldEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createVideoMintedEvent(
  Id: BigInt,
  URI: string,
  Owner: Address
): VideoMinted {
  let videoMintedEvent = changetype<VideoMinted>(newMockEvent())

  videoMintedEvent.parameters = new Array()

  videoMintedEvent.parameters.push(
    new ethereum.EventParam("Id", ethereum.Value.fromUnsignedBigInt(Id))
  )
  videoMintedEvent.parameters.push(
    new ethereum.EventParam("URI", ethereum.Value.fromString(URI))
  )
  videoMintedEvent.parameters.push(
    new ethereum.EventParam("Owner", ethereum.Value.fromAddress(Owner))
  )

  return videoMintedEvent
}
