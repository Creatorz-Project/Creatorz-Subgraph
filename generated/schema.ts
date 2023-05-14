// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Video extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Video entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Video must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Video", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Video | null {
    return changetype<Video | null>(store.get_in_block("Video", id));
  }

  static load(id: string): Video | null {
    return changetype<Video | null>(store.get("Video", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get RoomId(): BigInt | null {
    let value = this.get("RoomId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set RoomId(value: BigInt | null) {
    if (!value) {
      this.unset("RoomId");
    } else {
      this.set("RoomId", Value.fromBigInt(<BigInt>value));
    }
  }

  get Creator(): Bytes {
    let value = this.get("Creator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set Creator(value: Bytes) {
    this.set("Creator", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get Price(): BigInt {
    let value = this.get("Price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set Price(value: BigInt) {
    this.set("Price", Value.fromBigInt(value));
  }

  get SocialTokenId(): BigInt | null {
    let value = this.get("SocialTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set SocialTokenId(value: BigInt | null) {
    if (!value) {
      this.unset("SocialTokenId");
    } else {
      this.set("SocialTokenId", Value.fromBigInt(<BigInt>value));
    }
  }

  get OwnerPercentage(): BigInt | null {
    let value = this.get("OwnerPercentage");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set OwnerPercentage(value: BigInt | null) {
    if (!value) {
      this.unset("OwnerPercentage");
    } else {
      this.set("OwnerPercentage", Value.fromBigInt(<BigInt>value));
    }
  }

  get HolderPercentage(): BigInt | null {
    let value = this.get("HolderPercentage");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set HolderPercentage(value: BigInt | null) {
    if (!value) {
      this.unset("HolderPercentage");
    } else {
      this.set("HolderPercentage", Value.fromBigInt(<BigInt>value));
    }
  }

  get Beneficiaries(): Array<Bytes> {
    let value = this.get("Beneficiaries");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytesArray();
    }
  }

  set Beneficiaries(value: Array<Bytes>) {
    this.set("Beneficiaries", Value.fromBytesArray(value));
  }

  get Listed(): boolean {
    let value = this.get("Listed");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set Listed(value: boolean) {
    this.set("Listed", Value.fromBoolean(value));
  }

  get Published(): boolean {
    let value = this.get("Published");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set Published(value: boolean) {
    this.set("Published", Value.fromBoolean(value));
  }

  get MetadataURI(): string {
    let value = this.get("MetadataURI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set MetadataURI(value: string) {
    this.set("MetadataURI", Value.fromString(value));
  }

  get AdsEnabled(): boolean {
    let value = this.get("AdsEnabled");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set AdsEnabled(value: boolean) {
    this.set("AdsEnabled", Value.fromBoolean(value));
  }

  get CreatedDate(): string {
    let value = this.get("CreatedDate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set CreatedDate(value: string) {
    this.set("CreatedDate", Value.fromString(value));
  }

  get TotalEarnings(): BigInt {
    let value = this.get("TotalEarnings");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set TotalEarnings(value: BigInt) {
    this.set("TotalEarnings", Value.fromBigInt(value));
  }

  get LastPublishedDate(): string | null {
    let value = this.get("LastPublishedDate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set LastPublishedDate(value: string | null) {
    if (!value) {
      this.unset("LastPublishedDate");
    } else {
      this.set("LastPublishedDate", Value.fromString(<string>value));
    }
  }
}

export class Room extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Room entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Room must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Room", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Room | null {
    return changetype<Room | null>(store.get_in_block("Room", id));
  }

  static load(id: string): Room | null {
    return changetype<Room | null>(store.get("Room", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get RoomId(): BigInt {
    let value = this.get("RoomId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set RoomId(value: BigInt) {
    this.set("RoomId", Value.fromBigInt(value));
  }

  get Creator(): Bytes {
    let value = this.get("Creator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set Creator(value: Bytes) {
    this.set("Creator", Value.fromBytes(value));
  }

  get Owner(): Bytes {
    let value = this.get("Owner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set Owner(value: Bytes) {
    this.set("Owner", Value.fromBytes(value));
  }

  get URI(): string {
    let value = this.get("URI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set URI(value: string) {
    this.set("URI", Value.fromString(value));
  }

  get IsListed(): boolean {
    let value = this.get("IsListed");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set IsListed(value: boolean) {
    this.set("IsListed", Value.fromBoolean(value));
  }

  get Videos(): Array<BigInt> {
    let value = this.get("Videos");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set Videos(value: Array<BigInt>) {
    this.set("Videos", Value.fromBigIntArray(value));
  }

  get Price(): BigInt {
    let value = this.get("Price");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set Price(value: BigInt) {
    this.set("Price", Value.fromBigInt(value));
  }

  get DisplayCharge(): BigInt {
    let value = this.get("DisplayCharge");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set DisplayCharge(value: BigInt) {
    this.set("DisplayCharge", Value.fromBigInt(value));
  }

  get TotalEarning(): BigInt {
    let value = this.get("TotalEarning");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set TotalEarning(value: BigInt) {
    this.set("TotalEarning", Value.fromBigInt(value));
  }

  get CreatedDate(): string {
    let value = this.get("CreatedDate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set CreatedDate(value: string) {
    this.set("CreatedDate", Value.fromString(value));
  }
}

export class SocialTokenHolding extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SocialTokenHolding entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SocialTokenHolding must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SocialTokenHolding", id.toString(), this);
    }
  }

  static loadInBlock(id: string): SocialTokenHolding | null {
    return changetype<SocialTokenHolding | null>(
      store.get_in_block("SocialTokenHolding", id)
    );
  }

  static load(id: string): SocialTokenHolding | null {
    return changetype<SocialTokenHolding | null>(
      store.get("SocialTokenHolding", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get SocialTokenId(): BigInt {
    let value = this.get("SocialTokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set SocialTokenId(value: BigInt) {
    this.set("SocialTokenId", Value.fromBigInt(value));
  }

  get Creator(): Bytes {
    let value = this.get("Creator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set Creator(value: Bytes) {
    this.set("Creator", Value.fromBytes(value));
  }

  get Holder(): Bytes {
    let value = this.get("Holder");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set Holder(value: Bytes) {
    this.set("Holder", Value.fromBytes(value));
  }

  get IsLaunched(): boolean {
    let value = this.get("IsLaunched");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set IsLaunched(value: boolean) {
    this.set("IsLaunched", Value.fromBoolean(value));
  }

  get URI(): string {
    let value = this.get("URI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set URI(value: string) {
    this.set("URI", Value.fromString(value));
  }

  get LaunchingPrice(): BigInt {
    let value = this.get("LaunchingPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set LaunchingPrice(value: BigInt) {
    this.set("LaunchingPrice", Value.fromBigInt(value));
  }

  get TotalAmountMinted(): BigInt {
    let value = this.get("TotalAmountMinted");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set TotalAmountMinted(value: BigInt) {
    this.set("TotalAmountMinted", Value.fromBigInt(value));
  }

  get AmountAvailbleforSale(): BigInt {
    let value = this.get("AmountAvailbleforSale");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set AmountAvailbleforSale(value: BigInt) {
    this.set("AmountAvailbleforSale", Value.fromBigInt(value));
  }

  get AmountOwnedByHolder(): BigInt {
    let value = this.get("AmountOwnedByHolder");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set AmountOwnedByHolder(value: BigInt) {
    this.set("AmountOwnedByHolder", Value.fromBigInt(value));
  }

  get AmountListedByHolder(): BigInt {
    let value = this.get("AmountListedByHolder");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set AmountListedByHolder(value: BigInt) {
    this.set("AmountListedByHolder", Value.fromBigInt(value));
  }

  get PriceSetByHolder(): BigInt {
    let value = this.get("PriceSetByHolder");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set PriceSetByHolder(value: BigInt) {
    this.set("PriceSetByHolder", Value.fromBigInt(value));
  }

  get MaxHoldingPerWallet(): BigInt {
    let value = this.get("MaxHoldingPerWallet");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set MaxHoldingPerWallet(value: BigInt) {
    this.set("MaxHoldingPerWallet", Value.fromBigInt(value));
  }

  get VideoId(): BigInt {
    let value = this.get("VideoId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set VideoId(value: BigInt) {
    this.set("VideoId", Value.fromBigInt(value));
  }
}

export class Ad extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Ad entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Ad must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Ad", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Ad | null {
    return changetype<Ad | null>(store.get_in_block("Ad", id));
  }

  static load(id: string): Ad | null {
    return changetype<Ad | null>(store.get("Ad", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get AdId(): BigInt {
    let value = this.get("AdId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set AdId(value: BigInt) {
    this.set("AdId", Value.fromBigInt(value));
  }

  get URI(): string {
    let value = this.get("URI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set URI(value: string) {
    this.set("URI", Value.fromString(value));
  }

  get Advertiser(): Bytes {
    let value = this.get("Advertiser");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set Advertiser(value: Bytes) {
    this.set("Advertiser", Value.fromBytes(value));
  }

  get PublishingRooms(): Array<BigInt> {
    let value = this.get("PublishingRooms");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigIntArray();
    }
  }

  set PublishingRooms(value: Array<BigInt>) {
    this.set("PublishingRooms", Value.fromBigIntArray(value));
  }

  get Active(): boolean {
    let value = this.get("Active");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set Active(value: boolean) {
    this.set("Active", Value.fromBoolean(value));
  }

  get TotalSpent(): BigInt {
    let value = this.get("TotalSpent");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set TotalSpent(value: BigInt) {
    this.set("TotalSpent", Value.fromBigInt(value));
  }

  get CreatedDate(): string {
    let value = this.get("CreatedDate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set CreatedDate(value: string) {
    this.set("CreatedDate", Value.fromString(value));
  }

  get CurrentBudget(): BigInt {
    let value = this.get("CurrentBudget");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set CurrentBudget(value: BigInt) {
    this.set("CurrentBudget", Value.fromBigInt(value));
  }

  get MaxBudget(): BigInt {
    let value = this.get("MaxBudget");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set MaxBudget(value: BigInt) {
    this.set("MaxBudget", Value.fromBigInt(value));
  }
}
