import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
  AdCreated,
  RoomMinted,
  TokenMinted,
  VideoMinted,
} from "../generated/Token/Token";
import { Ad, Room, SocialTokenHolding, Video } from "../generated/schema";

export function handleAdCreated(event: AdCreated): void {
  let ad = new Ad(event.params.Id.toString());
  ad.AdId = event.params.Id;
  ad.Advertiser = event.params.Advertiser;
  ad.URI = event.params.URI;
  ad.Active = false;
  ad.CreatedDate = new Date(event.block.timestamp.toI32() * 1000).toString();
  ad.CurrentBudget = BigInt.fromI32(0);
  ad.MaxBudget = BigInt.fromI32(0);
  ad.PublishingRooms = new Array<BigInt>();
  ad.TotalSpent = BigInt.fromI32(0);
  ad.Views = BigInt.fromI32(0);
  ad.save();
}

export function handleRoomMinted(event: RoomMinted): void {
  let room = new Room(event.params.Id.toString());
  room.RoomId = event.params.Id;
  room.Creator = event.params.Owner;
  room.CreatedDate = new Date(event.block.timestamp.toI32() * 1000).toString();
  room.URI = event.params.URI;
  room.DisplayCharge = BigInt.fromI32(0);
  room.IsListed = false;
  room.Owner = event.params.Owner;
  room.Price = BigInt.fromI32(0);
  room.TotalEarning = BigInt.fromI32(0);
  room.Videos = new Array<BigInt>();
  room.save();
}

export function handleTokenMinted(event: TokenMinted): void {
  let token = new SocialTokenHolding(
    event.params.creator.toString() + event.params.ID.toString()
  );
  token.Creator = event.params.creator;
  token.SocialTokenId = event.params.ID;
  token.AmountAvailbleforSale = BigInt.fromI32(0);
  token.AmountListedByHolder = BigInt.fromI32(0);
  token.AmountOwnedByHolder = event.params.amount;
  token.Holder = event.params.creator;
  token.IsLaunched = false;
  token.LaunchingPrice = BigInt.fromI32(0);
  token.MaxHoldingPerWallet = event.params.maxHoldingAmount;
  token.PriceSetByHolder = BigInt.fromI32(0);
  token.VideoId = event.params.videoIds;
  token.URI = event.params.URI;
  token.TotalAmountMinted = event.params.amount;
  token.save();
}

export function handleVideoMinted(event: VideoMinted): void {
  let video = new Video(event.params.Id.toString());
  video.RoomId = null;
  video.Creator = event.params.Owner;
  video.CreatedDate = new Date(event.block.timestamp.toI32() * 1000).toString();
  video.MetadataURI = event.params.URI;
  video.Listed = false;
  video.owner = event.params.Owner;
  video.Price = BigInt.fromI32(0);
  video.SocialTokenId = null;
  video.OwnerPercentage = null;
  video.HolderPercentage = null;
  video.Beneficiaries = new Array<Bytes>();
  video.Published = false;
  video.AdsEnabled = false;
  video.TotalEarnings = BigInt.fromI32(0);
  video.LastPublishedDate = null;
  video.save();
}
