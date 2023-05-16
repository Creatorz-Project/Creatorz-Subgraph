import {
  AdDisplayed as AdDisplayedEvent,
  CampaignStarted as CampaignStartedEvent,
  CampaignStopped as CampaignStoppedEvent,
  PublisherRoomAdded as PublisherRoomAddedEvent,
  PublisherRoomRemoved as PublisherRoomRemovedEvent,
} from "../generated/AdManager/AdManager";
import { Ad, Room, Video } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";

export function handleAdDisplayed(event: AdDisplayedEvent): void {
  let ad = Ad.load(event.params.AdId.toString());
  let video = Video.load(event.params.VideoId.toString());
  if (!ad || !video) {
    return;
  } else {
    ad.Views = ad.Views.plus(BigInt.fromI32(1));
    ad.TotalSpent = ad.TotalSpent.plus(event.params.Reward);
    ad.save();
    video.TotalEarnings = video.TotalEarnings.plus(event.params.Reward);
    video.save();
  }
}
export function handleCampaignStarted(event: CampaignStartedEvent): void {
  let ad = Ad.load(event.params.AdId.toString());
  if (!ad) {
    return;
  } else {
    ad.Active = true;
    ad.save();
  }
}

export function handleCampaignStopped(event: CampaignStoppedEvent): void {
  let ad = Ad.load(event.params.AdId.toString());
  if (!ad) {
    return;
  } else {
    ad.Active = false;
    ad.save();
  }
}

export function handlePublisherRoomAdded(event: PublisherRoomAddedEvent): void {
  let ad = Ad.load(event.params.AdId.toString());
  if (!ad) {
    return;
  } else {
    let PublishingRooms = ad.PublishingRooms;
    PublishingRooms.push(event.params.RoomId);
    ad.PublishingRooms = PublishingRooms;
    ad.save();
  }
}

export function handlePublisherRoomRemoved(
  event: PublisherRoomRemovedEvent
): void {
  let ad = Ad.load(event.params.AdId.toString());
  if (!ad) {
    return;
  } else {
    let index = ad.PublishingRooms.indexOf(event.params.RoomId);
    ad.PublishingRooms.splice(index, 1);
    ad.save();
  }
}
