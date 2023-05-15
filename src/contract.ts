import {
  SocialTokenLaunched as SocialTokenLaunchedEvent,
  VideoPublished as VideoPublishedEvent,
  VideoUnpublished as VideoUnpublishedEvent,
} from "../generated/Contract/Contract";
import { Video, SocialTokenHolding, Room } from "../generated/schema";

export function handleSocialTokenLaunched(
  event: SocialTokenLaunchedEvent
): void {
  let socialtoken = SocialTokenHolding.load(
    event.params.creator.toString() + event.params.tokenId.toHexString()
  );

  if (!socialtoken) {
    return;
  } else {
    socialtoken.IsLaunched = true;
    socialtoken.AmountAvailbleforSale = socialtoken.TotalAmountMinted;
    socialtoken.LaunchingPrice = event.params.price;
    socialtoken.AmountListedByHolder = socialtoken.TotalAmountMinted;
    socialtoken.PriceSetByHolder = event.params.price;
    socialtoken.VideoId = event.params.videoIds;
    socialtoken.save();
  }
}

export function handleVideoPublished(event: VideoPublishedEvent): void {
  let video = Video.load(event.params.videoId.toString());

  if (!video) {
    return;
  } else {
    video.Published = true;
    video.LastPublishedDate = new Date(
      event.block.timestamp.toI32() * 1000
    ).toString();
    video.RoomId = event.params.roomId;
    video.save();
  }
}

export function handleVideoUnpublished(event: VideoUnpublishedEvent): void {
  let video = Video.load(event.params.videoId.toString());

  if (!video) {
    return;
  } else {
    video.Published = false;
    video.save();
  }
}
