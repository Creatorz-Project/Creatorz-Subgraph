import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  SocialTokenLaunched,
  VideoPublished,
  VideoUnpublished
} from "../generated/Contract/Contract"

export function createSocialTokenLaunchedEvent(
  tokenId: BigInt,
  creator: Address,
  price: BigInt,
  amount: BigInt,
  videoIds: BigInt
): SocialTokenLaunched {
  let socialTokenLaunchedEvent = changetype<SocialTokenLaunched>(newMockEvent())

  socialTokenLaunchedEvent.parameters = new Array()

  socialTokenLaunchedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  socialTokenLaunchedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  socialTokenLaunchedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  socialTokenLaunchedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  socialTokenLaunchedEvent.parameters.push(
    new ethereum.EventParam(
      "videoIds",
      ethereum.Value.fromUnsignedBigInt(videoIds)
    )
  )

  return socialTokenLaunchedEvent
}

export function createVideoPublishedEvent(
  videoId: BigInt,
  roomId: BigInt,
  owner: Address,
  creator: Address,
  URI: string
): VideoPublished {
  let videoPublishedEvent = changetype<VideoPublished>(newMockEvent())

  videoPublishedEvent.parameters = new Array()

  videoPublishedEvent.parameters.push(
    new ethereum.EventParam(
      "videoId",
      ethereum.Value.fromUnsignedBigInt(videoId)
    )
  )
  videoPublishedEvent.parameters.push(
    new ethereum.EventParam("roomId", ethereum.Value.fromUnsignedBigInt(roomId))
  )
  videoPublishedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  videoPublishedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  videoPublishedEvent.parameters.push(
    new ethereum.EventParam("URI", ethereum.Value.fromString(URI))
  )

  return videoPublishedEvent
}

export function createVideoUnpublishedEvent(
  videoId: BigInt,
  roomId: BigInt,
  owner: Address
): VideoUnpublished {
  let videoUnpublishedEvent = changetype<VideoUnpublished>(newMockEvent())

  videoUnpublishedEvent.parameters = new Array()

  videoUnpublishedEvent.parameters.push(
    new ethereum.EventParam(
      "videoId",
      ethereum.Value.fromUnsignedBigInt(videoId)
    )
  )
  videoUnpublishedEvent.parameters.push(
    new ethereum.EventParam("roomId", ethereum.Value.fromUnsignedBigInt(roomId))
  )
  videoUnpublishedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return videoUnpublishedEvent
}
