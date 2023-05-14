import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  AdDisplayed,
  CampaignStarted,
  CampaignStopped,
  PublisherRoomAdded,
  PublisherRoomRemoved
} from "../generated/AdManager/AdManager"

export function createAdDisplayedEvent(
  VideoId: BigInt,
  AdId: BigInt,
  Reward: BigInt
): AdDisplayed {
  let adDisplayedEvent = changetype<AdDisplayed>(newMockEvent())

  adDisplayedEvent.parameters = new Array()

  adDisplayedEvent.parameters.push(
    new ethereum.EventParam(
      "VideoId",
      ethereum.Value.fromUnsignedBigInt(VideoId)
    )
  )
  adDisplayedEvent.parameters.push(
    new ethereum.EventParam("AdId", ethereum.Value.fromUnsignedBigInt(AdId))
  )
  adDisplayedEvent.parameters.push(
    new ethereum.EventParam("Reward", ethereum.Value.fromUnsignedBigInt(Reward))
  )

  return adDisplayedEvent
}

export function createCampaignStartedEvent(
  AdId: BigInt,
  MaxBudget: BigInt
): CampaignStarted {
  let campaignStartedEvent = changetype<CampaignStarted>(newMockEvent())

  campaignStartedEvent.parameters = new Array()

  campaignStartedEvent.parameters.push(
    new ethereum.EventParam("AdId", ethereum.Value.fromUnsignedBigInt(AdId))
  )
  campaignStartedEvent.parameters.push(
    new ethereum.EventParam(
      "MaxBudget",
      ethereum.Value.fromUnsignedBigInt(MaxBudget)
    )
  )

  return campaignStartedEvent
}

export function createCampaignStoppedEvent(
  AdId: BigInt,
  RemainingBudget: BigInt
): CampaignStopped {
  let campaignStoppedEvent = changetype<CampaignStopped>(newMockEvent())

  campaignStoppedEvent.parameters = new Array()

  campaignStoppedEvent.parameters.push(
    new ethereum.EventParam("AdId", ethereum.Value.fromUnsignedBigInt(AdId))
  )
  campaignStoppedEvent.parameters.push(
    new ethereum.EventParam(
      "RemainingBudget",
      ethereum.Value.fromUnsignedBigInt(RemainingBudget)
    )
  )

  return campaignStoppedEvent
}

export function createPublisherRoomAddedEvent(
  RoomId: BigInt,
  AdId: BigInt
): PublisherRoomAdded {
  let publisherRoomAddedEvent = changetype<PublisherRoomAdded>(newMockEvent())

  publisherRoomAddedEvent.parameters = new Array()

  publisherRoomAddedEvent.parameters.push(
    new ethereum.EventParam("RoomId", ethereum.Value.fromUnsignedBigInt(RoomId))
  )
  publisherRoomAddedEvent.parameters.push(
    new ethereum.EventParam("AdId", ethereum.Value.fromUnsignedBigInt(AdId))
  )

  return publisherRoomAddedEvent
}

export function createPublisherRoomRemovedEvent(
  RoomId: BigInt,
  AdId: BigInt
): PublisherRoomRemoved {
  let publisherRoomRemovedEvent = changetype<PublisherRoomRemoved>(
    newMockEvent()
  )

  publisherRoomRemovedEvent.parameters = new Array()

  publisherRoomRemovedEvent.parameters.push(
    new ethereum.EventParam("RoomId", ethereum.Value.fromUnsignedBigInt(RoomId))
  )
  publisherRoomRemovedEvent.parameters.push(
    new ethereum.EventParam("AdId", ethereum.Value.fromUnsignedBigInt(AdId))
  )

  return publisherRoomRemovedEvent
}
