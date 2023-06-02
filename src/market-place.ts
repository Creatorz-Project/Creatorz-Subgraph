import { BigInt } from "@graphprotocol/graph-ts";
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
    for (let i = 0; i < room.Videos.length; i++) {
      let video = Video.load(room.Videos[i].toString());
      if (!video) {
        return;
      } else {
        video.Listed = true;
        video.save();
      }
  }
  }
}

export function handleRoomPurchased(event: RoomPurchasedEvent): void {
  let room = Room.load(event.params._id.toString());
  if (room != null) {
    room.Owner = event.params._buyer;
    room.IsListed = false;
    room.Price = event.params._price;
    room.save();
    for (let i = 0; i < room.Videos.length; i++) {
      let video = Video.load(room.Videos[i].toString());
      if (!video) {
        return;
      } else {
        video.Listed = false;
        video.Published = false;
        video.RoomId = event.params._id;
        video.owner = event.params._buyer;
        video.save();
      }
  }
} else {
    return  ;
    }
  }


export function handleRoomUnlisted(event: RoomUnlistedEvent): void {
  let room = Room.load(event.params._id.toString());
  if (!room) {
    return;
  } else {
    room.IsListed = false;
    room.save();
  }
}

export function handleSocialTokenListed(event: SocialTokenListedEvent): void {
  let socialTokenHolding = SocialTokenHolding.load(
    event.params._seller.toString() + event.params._id.toString()
  );
  if (!socialTokenHolding) {
    return;
  } else {
    socialTokenHolding.AmountAvailbleforSale = socialTokenHolding.AmountAvailbleforSale.plus(
      event.params._amount
    );
    socialTokenHolding.AmountListedByHolder = socialTokenHolding.AmountListedByHolder.plus(
      event.params._amount
    );
    socialTokenHolding.AmountOwnedByHolder = socialTokenHolding.AmountOwnedByHolder.minus(
      event.params._amount
    );
    socialTokenHolding.PriceSetByHolder = event.params._price;
    socialTokenHolding.save();
  }
}

export function handleSocialTokenPurchased(
  event: SocialTokenPurchasedEvent
): void {
  let sellerHolding = SocialTokenHolding.load(
    event.params._seller.toString() + event.params._id.toString()
  );

  let buyerHolding = SocialTokenHolding.load(
    event.params._buyer.toString() + event.params._id.toString()
  );

  if (!sellerHolding) {
    return;
  } else {
    sellerHolding.AmountAvailbleforSale = sellerHolding.AmountAvailbleforSale.minus(
      event.params._amount
    );
    sellerHolding.AmountOwnedByHolder = sellerHolding.AmountOwnedByHolder.minus(
      event.params._amount
    );
    sellerHolding.AmountListedByHolder = sellerHolding.AmountListedByHolder.minus(
      event.params._amount
    );
    sellerHolding.save();
    if (!buyerHolding) {
      buyerHolding = new SocialTokenHolding(
        event.params._buyer.toString() + event.params._id.toString()
      );
      buyerHolding.SocialTokenId = event.params._id;
      buyerHolding.AmountOwnedByHolder = event.params._amount;
      buyerHolding.AmountListedByHolder = BigInt.fromI32(0);
      buyerHolding.AmountAvailbleforSale = sellerHolding.AmountAvailbleforSale;
      buyerHolding.Creator = sellerHolding.Creator;
      buyerHolding.Holder = event.params._buyer;
      buyerHolding.IsLaunched = sellerHolding.IsLaunched;
      buyerHolding.URI = sellerHolding.URI;
      buyerHolding.LaunchingPrice = sellerHolding.LaunchingPrice;
      buyerHolding.TotalAmountMinted = sellerHolding.TotalAmountMinted;
      buyerHolding.PriceSetByHolder = BigInt.fromI32(0);
      buyerHolding.MaxHoldingPerWallet = sellerHolding.MaxHoldingPerWallet;
      buyerHolding.VideoId = sellerHolding.VideoId;
      buyerHolding.save();
      let video = Video.load(event.params._id.toString());
      if (!video) {
        return;
      } else {
        let Beneficiaries = video.Beneficiaries;
        Beneficiaries.push(event.params._buyer);
        video.Beneficiaries = Beneficiaries;
        video.save();
      }
    } else {
      buyerHolding.AmountOwnedByHolder = buyerHolding.AmountOwnedByHolder.plus(
        event.params._amount
      );
      buyerHolding.AmountAvailbleforSale = buyerHolding.AmountAvailbleforSale.plus(
        event.params._amount
      );
      buyerHolding.save();
      let video = Video.load(event.params._id.toString());
      if (!video) {
        return;
      } else {
        let Beneficiaries = video.Beneficiaries;
        Beneficiaries.push(event.params._buyer);
        video.Beneficiaries = Beneficiaries;
        video.save();
      }
    }
  }
}

export function handleSocialTokenUnlisted(
  event: SocialTokenUnlistedEvent
): void {
  let socialTokenHolding = SocialTokenHolding.load(
    event.params._seller.toString() + event.params._id.toString()
  );
  if (!socialTokenHolding) {
    return;
  } else {
    socialTokenHolding.AmountAvailbleforSale = socialTokenHolding.AmountAvailbleforSale.minus(
      event.params._amount
    );
    socialTokenHolding.AmountListedByHolder = socialTokenHolding.AmountListedByHolder.minus(
      event.params._amount
    );
    socialTokenHolding.AmountOwnedByHolder = socialTokenHolding.AmountOwnedByHolder.plus(
      event.params._amount
    );
    socialTokenHolding.save();
  }
}

export function handleVideoListed(event: VideoListedEvent): void {
  let video = Video.load(event.params._id.toString());
  if (!video) {
    return;
  } else {
    video.Listed = true;
    video.Price = event.params._price;
    video.save();
  }
}

export function handleVideoPurchased(event: VideoPurchasedEvent): void {
  let video = Video.load(event.params._id.toString());
  if (!video) {
    return;
  } else {
    video.Listed = false;
    video.Published = true;
    video.owner = event.params._buyer;
    video.RoomId = event.params._roomId;
    video.save();
  }
}

export function handleVideoUnlisted(event: VideoUnlistedEvent): void {
  let video = Video.load(event.params._id.toString());
  if (!video) {
    return;
  } else {
    video.Listed = false;
    video.save();
  }
}
