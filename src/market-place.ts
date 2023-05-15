import {
  RoomListed as RoomListedEvent,
  RoomPurchased as RoomPurchasedEvent,
  RoomUnlisted as RoomUnlistedEvent,
  SocialTokenListed as SocialTokenListedEvent,
  SocialTokenPurchased as SocialTokenPurchasedEvent,
  SocialTokenUnlisted as SocialTokenUnlistedEvent,
  VideoListed as VideoListedEvent,
  VideoPurchased as VideoPurchasedEvent,
  VideoUnlisted as VideoUnlistedEvent,
} from "../generated/MarketPlace/MarketPlace";
import { Room, Video, SocialTokenHolding } from "../generated/schema";

export function handleRoomListed(event: RoomListedEvent): void {
  let room = Room.load(event.params._id.toString());
  if (!room) {
    return;
  } else {
    room.IsListed = true;
    room.Price = event.params._price;
    room.save();
  }
}

export function handleRoomPurchased(event: RoomPurchasedEvent): void {}

export function handleRoomUnlisted(event: RoomUnlistedEvent): void {}

export function handleSocialTokenListed(event: SocialTokenListedEvent): void {}

export function handleSocialTokenPurchased(
  event: SocialTokenPurchasedEvent
): void {}

export function handleSocialTokenUnlisted(
  event: SocialTokenUnlistedEvent
): void {}

export function handleVideoListed(event: VideoListedEvent): void {}

export function handleVideoPurchased(event: VideoPurchasedEvent): void {}

export function handleVideoUnlisted(event: VideoUnlistedEvent): void {}
