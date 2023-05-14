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
  }
}

export function handleVideoPublished(event: VideoPublishedEvent): void {}

export function handleVideoUnpublished(event: VideoUnpublishedEvent): void {}
