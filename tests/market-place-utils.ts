import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  RoomListed,
  RoomPurchased,
  RoomUnlisted,
  SocialTokenListed,
  SocialTokenPurchased,
  SocialTokenUnlisted,
  VideoListed,
  VideoPurchased,
  VideoUnlisted
} from "../generated/MarketPlace/MarketPlace"

export function createRoomListedEvent(_id: BigInt, _price: BigInt): RoomListed {
  let roomListedEvent = changetype<RoomListed>(newMockEvent())

  roomListedEvent.parameters = new Array()

  roomListedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  roomListedEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )

  return roomListedEvent
}

export function createRoomPurchasedEvent(
  _id: BigInt,
  _buyer: Address,
  _seller: Address,
  _price: BigInt
): RoomPurchased {
  let roomPurchasedEvent = changetype<RoomPurchased>(newMockEvent())

  roomPurchasedEvent.parameters = new Array()

  roomPurchasedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  roomPurchasedEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )
  roomPurchasedEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  roomPurchasedEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )

  return roomPurchasedEvent
}

export function createRoomUnlistedEvent(_id: BigInt): RoomUnlisted {
  let roomUnlistedEvent = changetype<RoomUnlisted>(newMockEvent())

  roomUnlistedEvent.parameters = new Array()

  roomUnlistedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return roomUnlistedEvent
}

export function createSocialTokenListedEvent(
  _id: BigInt,
  _price: BigInt,
  _seller: Address,
  _amount: BigInt
): SocialTokenListed {
  let socialTokenListedEvent = changetype<SocialTokenListed>(newMockEvent())

  socialTokenListedEvent.parameters = new Array()

  socialTokenListedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  socialTokenListedEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  socialTokenListedEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  socialTokenListedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return socialTokenListedEvent
}

export function createSocialTokenPurchasedEvent(
  _id: BigInt,
  _buyer: Address,
  _seller: Address,
  _price: BigInt,
  _amount: BigInt
): SocialTokenPurchased {
  let socialTokenPurchasedEvent = changetype<SocialTokenPurchased>(
    newMockEvent()
  )

  socialTokenPurchasedEvent.parameters = new Array()

  socialTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  socialTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )
  socialTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  socialTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  socialTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return socialTokenPurchasedEvent
}

export function createSocialTokenUnlistedEvent(
  _id: BigInt,
  _amount: BigInt,
  _seller: Address
): SocialTokenUnlisted {
  let socialTokenUnlistedEvent = changetype<SocialTokenUnlisted>(newMockEvent())

  socialTokenUnlistedEvent.parameters = new Array()

  socialTokenUnlistedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  socialTokenUnlistedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  socialTokenUnlistedEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )

  return socialTokenUnlistedEvent
}

export function createVideoListedEvent(
  _id: BigInt,
  _price: BigInt
): VideoListed {
  let videoListedEvent = changetype<VideoListed>(newMockEvent())

  videoListedEvent.parameters = new Array()

  videoListedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  videoListedEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )

  return videoListedEvent
}

export function createVideoPurchasedEvent(
  _id: BigInt,
  _buyer: Address,
  _seller: Address,
  _price: BigInt
): VideoPurchased {
  let videoPurchasedEvent = changetype<VideoPurchased>(newMockEvent())

  videoPurchasedEvent.parameters = new Array()

  videoPurchasedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  videoPurchasedEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )
  videoPurchasedEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  videoPurchasedEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )

  return videoPurchasedEvent
}

export function createVideoUnlistedEvent(_id: BigInt): VideoUnlisted {
  let videoUnlistedEvent = changetype<VideoUnlisted>(newMockEvent())

  videoUnlistedEvent.parameters = new Array()

  videoUnlistedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return videoUnlistedEvent
}
