import {
  AdDisplayed as AdDisplayedEvent,
  CampaignStarted as CampaignStartedEvent,
  CampaignStopped as CampaignStoppedEvent,
  PublisherRoomAdded as PublisherRoomAddedEvent,
  PublisherRoomRemoved as PublisherRoomRemovedEvent
} from "../generated/AdManager/AdManager"
import {
  AdDisplayed,
  CampaignStarted,
  CampaignStopped,
  PublisherRoomAdded,
  PublisherRoomRemoved
} from "../generated/schema"

export function handleAdDisplayed(event: AdDisplayedEvent): void {
  let entity = new AdDisplayed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.VideoId = event.params.VideoId
  entity.AdId = event.params.AdId
  entity.Reward = event.params.Reward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCampaignStarted(event: CampaignStartedEvent): void {
  let entity = new CampaignStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.AdId = event.params.AdId
  entity.MaxBudget = event.params.MaxBudget

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCampaignStopped(event: CampaignStoppedEvent): void {
  let entity = new CampaignStopped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.AdId = event.params.AdId
  entity.RemainingBudget = event.params.RemainingBudget

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePublisherRoomAdded(event: PublisherRoomAddedEvent): void {
  let entity = new PublisherRoomAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.RoomId = event.params.RoomId
  entity.AdId = event.params.AdId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePublisherRoomRemoved(
  event: PublisherRoomRemovedEvent
): void {
  let entity = new PublisherRoomRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.RoomId = event.params.RoomId
  entity.AdId = event.params.AdId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
