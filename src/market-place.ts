import {
  RoomListed as RoomListedEvent,
  RoomPurchased as RoomPurchasedEvent,
  RoomUnlisted as RoomUnlistedEvent,
  SocialTokenListed as SocialTokenListedEvent,
  SocialTokenPurchased as SocialTokenPurchasedEvent,
  SocialTokenUnlisted as SocialTokenUnlistedEvent,
  VideoListed as VideoListedEvent,
  VideoPurchased as VideoPurchasedEvent,
  VideoUnlisted as VideoUnlistedEvent
} from "../generated/MarketPlace/MarketPlace"
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
} from "../generated/schema"

export function handleRoomListed(event: RoomListedEvent): void {
  let entity = new RoomListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._id = event.params._id
  entity._price = event.params._price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoomPurchased(event: RoomPurchasedEvent): void {
  let entity = new RoomPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._id = event.params._id
  entity._buyer = event.params._buyer
  entity._seller = event.params._seller
  entity._price = event.params._price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoomUnlisted(event: RoomUnlistedEvent): void {
  let entity = new RoomUnlisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSocialTokenListed(event: SocialTokenListedEvent): void {
  let entity = new SocialTokenListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._id = event.params._id
  entity._price = event.params._price
  entity._seller = event.params._seller
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSocialTokenPurchased(
  event: SocialTokenPurchasedEvent
): void {
  let entity = new SocialTokenPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._id = event.params._id
  entity._buyer = event.params._buyer
  entity._seller = event.params._seller
  entity._price = event.params._price
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSocialTokenUnlisted(
  event: SocialTokenUnlistedEvent
): void {
  let entity = new SocialTokenUnlisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._id = event.params._id
  entity._amount = event.params._amount
  entity._seller = event.params._seller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVideoListed(event: VideoListedEvent): void {
  let entity = new VideoListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._id = event.params._id
  entity._price = event.params._price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVideoPurchased(event: VideoPurchasedEvent): void {
  let entity = new VideoPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._id = event.params._id
  entity._buyer = event.params._buyer
  entity._seller = event.params._seller
  entity._price = event.params._price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVideoUnlisted(event: VideoUnlistedEvent): void {
  let entity = new VideoUnlisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
