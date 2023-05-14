import {
  SocialTokenLaunched as SocialTokenLaunchedEvent,
  VideoPublished as VideoPublishedEvent,
  VideoUnpublished as VideoUnpublishedEvent
} from "../generated/Contract/Contract"
import {
  SocialTokenLaunched,
  VideoPublished,
  VideoUnpublished
} from "../generated/schema"

export function handleSocialTokenLaunched(
  event: SocialTokenLaunchedEvent
): void {
  let entity = new SocialTokenLaunched(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.creator = event.params.creator
  entity.price = event.params.price
  entity.amount = event.params.amount
  entity.videoIds = event.params.videoIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVideoPublished(event: VideoPublishedEvent): void {
  let entity = new VideoPublished(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.videoId = event.params.videoId
  entity.roomId = event.params.roomId
  entity.owner = event.params.owner
  entity.creator = event.params.creator
  entity.URI = event.params.URI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVideoUnpublished(event: VideoUnpublishedEvent): void {
  let entity = new VideoUnpublished(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.videoId = event.params.videoId
  entity.roomId = event.params.roomId
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
