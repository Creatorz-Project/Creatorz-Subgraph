// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class RoomListed extends ethereum.Event {
  get params(): RoomListed__Params {
    return new RoomListed__Params(this);
  }
}

export class RoomListed__Params {
  _event: RoomListed;

  constructor(event: RoomListed) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RoomPurchased extends ethereum.Event {
  get params(): RoomPurchased__Params {
    return new RoomPurchased__Params(this);
  }
}

export class RoomPurchased__Params {
  _event: RoomPurchased;

  constructor(event: RoomPurchased) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RoomUnlisted extends ethereum.Event {
  get params(): RoomUnlisted__Params {
    return new RoomUnlisted__Params(this);
  }
}

export class RoomUnlisted__Params {
  _event: RoomUnlisted;

  constructor(event: RoomUnlisted) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class SocialTokenListed extends ethereum.Event {
  get params(): SocialTokenListed__Params {
    return new SocialTokenListed__Params(this);
  }
}

export class SocialTokenListed__Params {
  _event: SocialTokenListed;

  constructor(event: SocialTokenListed) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class SocialTokenPurchased extends ethereum.Event {
  get params(): SocialTokenPurchased__Params {
    return new SocialTokenPurchased__Params(this);
  }
}

export class SocialTokenPurchased__Params {
  _event: SocialTokenPurchased;

  constructor(event: SocialTokenPurchased) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class SocialTokenUnlisted extends ethereum.Event {
  get params(): SocialTokenUnlisted__Params {
    return new SocialTokenUnlisted__Params(this);
  }
}

export class SocialTokenUnlisted__Params {
  _event: SocialTokenUnlisted;

  constructor(event: SocialTokenUnlisted) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class VideoListed extends ethereum.Event {
  get params(): VideoListed__Params {
    return new VideoListed__Params(this);
  }
}

export class VideoListed__Params {
  _event: VideoListed;

  constructor(event: VideoListed) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class VideoPurchased extends ethereum.Event {
  get params(): VideoPurchased__Params {
    return new VideoPurchased__Params(this);
  }
}

export class VideoPurchased__Params {
  _event: VideoPurchased;

  constructor(event: VideoPurchased) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _seller(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _roomId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class VideoUnlisted extends ethereum.Event {
  get params(): VideoUnlisted__Params {
    return new VideoUnlisted__Params(this);
  }
}

export class VideoUnlisted__Params {
  _event: VideoUnlisted;

  constructor(event: VideoUnlisted) {
    this._event = event;
  }

  get _id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class MarketPlace__getRoomResultValue0Struct extends ethereum.Tuple {
  get Id(): BigInt {
    return this[0].toBigInt();
  }

  get URI(): string {
    return this[1].toString();
  }

  get Creator(): Address {
    return this[2].toAddress();
  }

  get Owner(): Address {
    return this[3].toAddress();
  }

  get Price(): BigInt {
    return this[4].toBigInt();
  }

  get DisplayReward(): BigInt {
    return this[5].toBigInt();
  }

  get VideoIds(): Array<BigInt> {
    return this[6].toBigIntArray();
  }

  get AdIds(): Array<BigInt> {
    return this[7].toBigIntArray();
  }

  get Listed(): boolean {
    return this[8].toBoolean();
  }
}

export class MarketPlace__getSocialTokenResultValue0Struct extends ethereum.Tuple {
  get ID(): BigInt {
    return this[0].toBigInt();
  }

  get URI(): string {
    return this[1].toString();
  }

  get totalSupply(): BigInt {
    return this[2].toBigInt();
  }

  get circulatingSupply(): BigInt {
    return this[3].toBigInt();
  }

  get price(): BigInt {
    return this[4].toBigInt();
  }

  get launched(): boolean {
    return this[5].toBoolean();
  }

  get creator(): Address {
    return this[6].toAddress();
  }

  get maxHoldingAmount(): BigInt {
    return this[7].toBigInt();
  }

  get videoIds(): BigInt {
    return this[8].toBigInt();
  }
}

export class MarketPlace__getVideoResultValue0Struct extends ethereum.Tuple {
  get Id(): BigInt {
    return this[0].toBigInt();
  }

  get URI(): string {
    return this[1].toString();
  }

  get Owner(): Address {
    return this[2].toAddress();
  }

  get Creator(): Address {
    return this[3].toAddress();
  }

  get Price(): BigInt {
    return this[4].toBigInt();
  }

  get SocialTokenId(): BigInt {
    return this[5].toBigInt();
  }

  get OwnerPercentage(): BigInt {
    return this[6].toBigInt();
  }

  get HoldersPercentage(): BigInt {
    return this[7].toBigInt();
  }

  get Benefeciaries(): Array<Address> {
    return this[8].toAddressArray();
  }

  get Listed(): boolean {
    return this[9].toBoolean();
  }

  get Published(): boolean {
    return this[10].toBoolean();
  }

  get AdsEnabled(): boolean {
    return this[11].toBoolean();
  }

  get RoomId(): BigInt {
    return this[12].toBigInt();
  }
}

export class MarketPlace extends ethereum.SmartContract {
  static bind(address: Address): MarketPlace {
    return new MarketPlace("MarketPlace", address);
  }

  getRoom(_id: BigInt): MarketPlace__getRoomResultValue0Struct {
    let result = super.call(
      "getRoom",
      "getRoom(uint256):((uint256,string,address,address,uint256,uint256,uint256[],uint256[],bool))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return changetype<MarketPlace__getRoomResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getRoom(
    _id: BigInt
  ): ethereum.CallResult<MarketPlace__getRoomResultValue0Struct> {
    let result = super.tryCall(
      "getRoom",
      "getRoom(uint256):((uint256,string,address,address,uint256,uint256,uint256[],uint256[],bool))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<MarketPlace__getRoomResultValue0Struct>(value[0].toTuple())
    );
  }

  getSocialToken(_id: BigInt): MarketPlace__getSocialTokenResultValue0Struct {
    let result = super.call(
      "getSocialToken",
      "getSocialToken(uint256):((uint256,string,uint256,uint256,uint256,bool,address,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return changetype<MarketPlace__getSocialTokenResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getSocialToken(
    _id: BigInt
  ): ethereum.CallResult<MarketPlace__getSocialTokenResultValue0Struct> {
    let result = super.tryCall(
      "getSocialToken",
      "getSocialToken(uint256):((uint256,string,uint256,uint256,uint256,bool,address,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<MarketPlace__getSocialTokenResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getVideo(_id: BigInt): MarketPlace__getVideoResultValue0Struct {
    let result = super.call(
      "getVideo",
      "getVideo(uint256):((uint256,string,address,address,uint256,uint256,uint256,uint256,address[],bool,bool,bool,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return changetype<MarketPlace__getVideoResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getVideo(
    _id: BigInt
  ): ethereum.CallResult<MarketPlace__getVideoResultValue0Struct> {
    let result = super.tryCall(
      "getVideo",
      "getVideo(uint256):((uint256,string,address,address,uint256,uint256,uint256,uint256,address[],bool,bool,bool,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<MarketPlace__getVideoResultValue0Struct>(value[0].toTuple())
    );
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyRoomCall extends ethereum.Call {
  get inputs(): BuyRoomCall__Inputs {
    return new BuyRoomCall__Inputs(this);
  }

  get outputs(): BuyRoomCall__Outputs {
    return new BuyRoomCall__Outputs(this);
  }
}

export class BuyRoomCall__Inputs {
  _call: BuyRoomCall;

  constructor(call: BuyRoomCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyRoomCall__Outputs {
  _call: BuyRoomCall;

  constructor(call: BuyRoomCall) {
    this._call = call;
  }
}

export class BuySocialTokenCall extends ethereum.Call {
  get inputs(): BuySocialTokenCall__Inputs {
    return new BuySocialTokenCall__Inputs(this);
  }

  get outputs(): BuySocialTokenCall__Outputs {
    return new BuySocialTokenCall__Outputs(this);
  }
}

export class BuySocialTokenCall__Inputs {
  _call: BuySocialTokenCall;

  constructor(call: BuySocialTokenCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _seller(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class BuySocialTokenCall__Outputs {
  _call: BuySocialTokenCall;

  constructor(call: BuySocialTokenCall) {
    this._call = call;
  }
}

export class BuyVideoCall extends ethereum.Call {
  get inputs(): BuyVideoCall__Inputs {
    return new BuyVideoCall__Inputs(this);
  }

  get outputs(): BuyVideoCall__Outputs {
    return new BuyVideoCall__Outputs(this);
  }
}

export class BuyVideoCall__Inputs {
  _call: BuyVideoCall;

  constructor(call: BuyVideoCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _roomId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyVideoCall__Outputs {
  _call: BuyVideoCall;

  constructor(call: BuyVideoCall) {
    this._call = call;
  }
}

export class ListRoomCall extends ethereum.Call {
  get inputs(): ListRoomCall__Inputs {
    return new ListRoomCall__Inputs(this);
  }

  get outputs(): ListRoomCall__Outputs {
    return new ListRoomCall__Outputs(this);
  }
}

export class ListRoomCall__Inputs {
  _call: ListRoomCall;

  constructor(call: ListRoomCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ListRoomCall__Outputs {
  _call: ListRoomCall;

  constructor(call: ListRoomCall) {
    this._call = call;
  }
}

export class ListSocialTokenCall extends ethereum.Call {
  get inputs(): ListSocialTokenCall__Inputs {
    return new ListSocialTokenCall__Inputs(this);
  }

  get outputs(): ListSocialTokenCall__Outputs {
    return new ListSocialTokenCall__Outputs(this);
  }
}

export class ListSocialTokenCall__Inputs {
  _call: ListSocialTokenCall;

  constructor(call: ListSocialTokenCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ListSocialTokenCall__Outputs {
  _call: ListSocialTokenCall;

  constructor(call: ListSocialTokenCall) {
    this._call = call;
  }
}

export class ListVideoCall extends ethereum.Call {
  get inputs(): ListVideoCall__Inputs {
    return new ListVideoCall__Inputs(this);
  }

  get outputs(): ListVideoCall__Outputs {
    return new ListVideoCall__Outputs(this);
  }
}

export class ListVideoCall__Inputs {
  _call: ListVideoCall;

  constructor(call: ListVideoCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ListVideoCall__Outputs {
  _call: ListVideoCall;

  constructor(call: ListVideoCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class UnListRoomCall extends ethereum.Call {
  get inputs(): UnListRoomCall__Inputs {
    return new UnListRoomCall__Inputs(this);
  }

  get outputs(): UnListRoomCall__Outputs {
    return new UnListRoomCall__Outputs(this);
  }
}

export class UnListRoomCall__Inputs {
  _call: UnListRoomCall;

  constructor(call: UnListRoomCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnListRoomCall__Outputs {
  _call: UnListRoomCall;

  constructor(call: UnListRoomCall) {
    this._call = call;
  }
}

export class UnListSocialTokenCall extends ethereum.Call {
  get inputs(): UnListSocialTokenCall__Inputs {
    return new UnListSocialTokenCall__Inputs(this);
  }

  get outputs(): UnListSocialTokenCall__Outputs {
    return new UnListSocialTokenCall__Outputs(this);
  }
}

export class UnListSocialTokenCall__Inputs {
  _call: UnListSocialTokenCall;

  constructor(call: UnListSocialTokenCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UnListSocialTokenCall__Outputs {
  _call: UnListSocialTokenCall;

  constructor(call: UnListSocialTokenCall) {
    this._call = call;
  }
}

export class UnlistVideoCall extends ethereum.Call {
  get inputs(): UnlistVideoCall__Inputs {
    return new UnlistVideoCall__Inputs(this);
  }

  get outputs(): UnlistVideoCall__Outputs {
    return new UnlistVideoCall__Outputs(this);
  }
}

export class UnlistVideoCall__Inputs {
  _call: UnlistVideoCall;

  constructor(call: UnlistVideoCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnlistVideoCall__Outputs {
  _call: UnlistVideoCall;

  constructor(call: UnlistVideoCall) {
    this._call = call;
  }
}
