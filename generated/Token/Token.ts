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

export class AdCreated extends ethereum.Event {
  get params(): AdCreated__Params {
    return new AdCreated__Params(this);
  }
}

export class AdCreated__Params {
  _event: AdCreated;

  constructor(event: AdCreated) {
    this._event = event;
  }

  get Id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get URI(): string {
    return this._event.parameters[1].value.toString();
  }

  get Advertiser(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class RoomMinted extends ethereum.Event {
  get params(): RoomMinted__Params {
    return new RoomMinted__Params(this);
  }
}

export class RoomMinted__Params {
  _event: RoomMinted;

  constructor(event: RoomMinted) {
    this._event = event;
  }

  get Id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get URI(): string {
    return this._event.parameters[1].value.toString();
  }

  get Owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get displayCharge(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class TokenMinted extends ethereum.Event {
  get params(): TokenMinted__Params {
    return new TokenMinted__Params(this);
  }
}

export class TokenMinted__Params {
  _event: TokenMinted;

  constructor(event: TokenMinted) {
    this._event = event;
  }

  get ID(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get URI(): string {
    return this._event.parameters[1].value.toString();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get launched(): boolean {
    return this._event.parameters[4].value.toBoolean();
  }

  get creator(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get maxHoldingAmount(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get videoIds(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class VideoMinted extends ethereum.Event {
  get params(): VideoMinted__Params {
    return new VideoMinted__Params(this);
  }
}

export class VideoMinted__Params {
  _event: VideoMinted;

  constructor(event: VideoMinted) {
    this._event = event;
  }

  get Id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get URI(): string {
    return this._event.parameters[1].value.toString();
  }

  get Owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get roomId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Token__getAdResultValue0Struct extends ethereum.Tuple {
  get Id(): BigInt {
    return this[0].toBigInt();
  }

  get URI(): string {
    return this[1].toString();
  }

  get Advertiser(): Address {
    return this[2].toAddress();
  }

  get PublishingRooms(): Array<BigInt> {
    return this[3].toBigIntArray();
  }

  get Active(): boolean {
    return this[4].toBoolean();
  }

  get TotalSpent(): BigInt {
    return this[5].toBigInt();
  }

  get CurrentBudget(): BigInt {
    return this[6].toBigInt();
  }

  get MaxBudget(): BigInt {
    return this[7].toBigInt();
  }
}

export class Token__getRoomResultValue0Struct extends ethereum.Tuple {
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

export class Token__getSocialTokenResultValue0Struct extends ethereum.Tuple {
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

export class Token__getSocialTokenHolderResultValue0Struct extends ethereum.Tuple {
  get Id(): BigInt {
    return this[0].toBigInt();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get price(): BigInt {
    return this[2].toBigInt();
  }

  get currentlyListed(): BigInt {
    return this[3].toBigInt();
  }
}

export class Token__getVideoResultValue0Struct extends ethereum.Tuple {
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

export class Token extends ethereum.SmartContract {
  static bind(address: Address): Token {
    return new Token("Token", address);
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getAd(_id: BigInt): Token__getAdResultValue0Struct {
    let result = super.call(
      "getAd",
      "getAd(uint256):((uint256,string,address,uint256[],bool,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return changetype<Token__getAdResultValue0Struct>(result[0].toTuple());
  }

  try_getAd(_id: BigInt): ethereum.CallResult<Token__getAdResultValue0Struct> {
    let result = super.tryCall(
      "getAd",
      "getAd(uint256):((uint256,string,address,uint256[],bool,uint256,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Token__getAdResultValue0Struct>(value[0].toTuple())
    );
  }

  getBalance(_account: Address, _id: BigInt): BigInt {
    let result = super.call(
      "getBalance",
      "getBalance(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_account),
        ethereum.Value.fromUnsignedBigInt(_id)
      ]
    );

    return result[0].toBigInt();
  }

  try_getBalance(_account: Address, _id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBalance",
      "getBalance(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_account),
        ethereum.Value.fromUnsignedBigInt(_id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoom(_id: BigInt): Token__getRoomResultValue0Struct {
    let result = super.call(
      "getRoom",
      "getRoom(uint256):((uint256,string,address,address,uint256,uint256,uint256[],uint256[],bool))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return changetype<Token__getRoomResultValue0Struct>(result[0].toTuple());
  }

  try_getRoom(
    _id: BigInt
  ): ethereum.CallResult<Token__getRoomResultValue0Struct> {
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
      changetype<Token__getRoomResultValue0Struct>(value[0].toTuple())
    );
  }

  getSocialToken(_id: BigInt): Token__getSocialTokenResultValue0Struct {
    let result = super.call(
      "getSocialToken",
      "getSocialToken(uint256):((uint256,string,uint256,uint256,uint256,bool,address,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return changetype<Token__getSocialTokenResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getSocialToken(
    _id: BigInt
  ): ethereum.CallResult<Token__getSocialTokenResultValue0Struct> {
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
      changetype<Token__getSocialTokenResultValue0Struct>(value[0].toTuple())
    );
  }

  getSocialTokenHolder(
    _id: BigInt,
    _account: Address
  ): Token__getSocialTokenHolderResultValue0Struct {
    let result = super.call(
      "getSocialTokenHolder",
      "getSocialTokenHolder(uint256,address):((uint256,uint256,uint256,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(_id),
        ethereum.Value.fromAddress(_account)
      ]
    );

    return changetype<Token__getSocialTokenHolderResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getSocialTokenHolder(
    _id: BigInt,
    _account: Address
  ): ethereum.CallResult<Token__getSocialTokenHolderResultValue0Struct> {
    let result = super.tryCall(
      "getSocialTokenHolder",
      "getSocialTokenHolder(uint256,address):((uint256,uint256,uint256,uint256))",
      [
        ethereum.Value.fromUnsignedBigInt(_id),
        ethereum.Value.fromAddress(_account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Token__getSocialTokenHolderResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getVideo(_id: BigInt): Token__getVideoResultValue0Struct {
    let result = super.call(
      "getVideo",
      "getVideo(uint256):((uint256,string,address,address,uint256,uint256,uint256,uint256,address[],bool,bool,bool,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return changetype<Token__getVideoResultValue0Struct>(result[0].toTuple());
  }

  try_getVideo(
    _id: BigInt
  ): ethereum.CallResult<Token__getVideoResultValue0Struct> {
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
      changetype<Token__getVideoResultValue0Struct>(value[0].toTuple())
    );
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  uri(tokenId: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_uri(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateAdCall extends ethereum.Call {
  get inputs(): CreateAdCall__Inputs {
    return new CreateAdCall__Inputs(this);
  }

  get outputs(): CreateAdCall__Outputs {
    return new CreateAdCall__Outputs(this);
  }
}

export class CreateAdCall__Inputs {
  _call: CreateAdCall;

  constructor(call: CreateAdCall) {
    this._call = call;
  }

  get _uri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class CreateAdCall__Outputs {
  _call: CreateAdCall;

  constructor(call: CreateAdCall) {
    this._call = call;
  }
}

export class CreateRoomCall extends ethereum.Call {
  get inputs(): CreateRoomCall__Inputs {
    return new CreateRoomCall__Inputs(this);
  }

  get outputs(): CreateRoomCall__Outputs {
    return new CreateRoomCall__Outputs(this);
  }
}

export class CreateRoomCall__Inputs {
  _call: CreateRoomCall;

  constructor(call: CreateRoomCall) {
    this._call = call;
  }

  get _URI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _displayCharge(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateRoomCall__Outputs {
  _call: CreateRoomCall;

  constructor(call: CreateRoomCall) {
    this._call = call;
  }
}

export class GetCreatorzTokensCall extends ethereum.Call {
  get inputs(): GetCreatorzTokensCall__Inputs {
    return new GetCreatorzTokensCall__Inputs(this);
  }

  get outputs(): GetCreatorzTokensCall__Outputs {
    return new GetCreatorzTokensCall__Outputs(this);
  }
}

export class GetCreatorzTokensCall__Inputs {
  _call: GetCreatorzTokensCall;

  constructor(call: GetCreatorzTokensCall) {
    this._call = call;
  }
}

export class GetCreatorzTokensCall__Outputs {
  _call: GetCreatorzTokensCall;

  constructor(call: GetCreatorzTokensCall) {
    this._call = call;
  }
}

export class MintSocialTokensCall extends ethereum.Call {
  get inputs(): MintSocialTokensCall__Inputs {
    return new MintSocialTokensCall__Inputs(this);
  }

  get outputs(): MintSocialTokensCall__Outputs {
    return new MintSocialTokensCall__Outputs(this);
  }
}

export class MintSocialTokensCall__Inputs {
  _call: MintSocialTokensCall;

  constructor(call: MintSocialTokensCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _URI(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _maxHoldingAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _videoId(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class MintSocialTokensCall__Outputs {
  _call: MintSocialTokensCall;

  constructor(call: MintSocialTokensCall) {
    this._call = call;
  }
}

export class MintVideoCall extends ethereum.Call {
  get inputs(): MintVideoCall__Inputs {
    return new MintVideoCall__Inputs(this);
  }

  get outputs(): MintVideoCall__Outputs {
    return new MintVideoCall__Outputs(this);
  }
}

export class MintVideoCall__Inputs {
  _call: MintVideoCall;

  constructor(call: MintVideoCall) {
    this._call = call;
  }

  get _URI(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _roomId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintVideoCall__Outputs {
  _call: MintVideoCall;

  constructor(call: MintVideoCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferBatchCall extends ethereum.Call {
  get inputs(): TransferBatchCall__Inputs {
    return new TransferBatchCall__Inputs(this);
  }

  get outputs(): TransferBatchCall__Outputs {
    return new TransferBatchCall__Outputs(this);
  }
}

export class TransferBatchCall__Inputs {
  _call: TransferBatchCall;

  constructor(call: TransferBatchCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class TransferBatchCall__Outputs {
  _call: TransferBatchCall;

  constructor(call: TransferBatchCall) {
    this._call = call;
  }
}

export class TransferTokensCall extends ethereum.Call {
  get inputs(): TransferTokensCall__Inputs {
    return new TransferTokensCall__Inputs(this);
  }

  get outputs(): TransferTokensCall__Outputs {
    return new TransferTokensCall__Outputs(this);
  }
}

export class TransferTokensCall__Inputs {
  _call: TransferTokensCall;

  constructor(call: TransferTokensCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class TransferTokensCall__Outputs {
  _call: TransferTokensCall;

  constructor(call: TransferTokensCall) {
    this._call = call;
  }
}

export class UpdateAdParametersCall extends ethereum.Call {
  get inputs(): UpdateAdParametersCall__Inputs {
    return new UpdateAdParametersCall__Inputs(this);
  }

  get outputs(): UpdateAdParametersCall__Outputs {
    return new UpdateAdParametersCall__Outputs(this);
  }
}

export class UpdateAdParametersCall__Inputs {
  _call: UpdateAdParametersCall;

  constructor(call: UpdateAdParametersCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _roomId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get roomAdded(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _status(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get _totalSpent(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _currentBudget(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _maxBudget(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class UpdateAdParametersCall__Outputs {
  _call: UpdateAdParametersCall;

  constructor(call: UpdateAdParametersCall) {
    this._call = call;
  }
}

export class UpdateRoomParametersCall extends ethereum.Call {
  get inputs(): UpdateRoomParametersCall__Inputs {
    return new UpdateRoomParametersCall__Inputs(this);
  }

  get outputs(): UpdateRoomParametersCall__Outputs {
    return new UpdateRoomParametersCall__Outputs(this);
  }
}

export class UpdateRoomParametersCall__Inputs {
  _call: UpdateRoomParametersCall;

  constructor(call: UpdateRoomParametersCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _displayCharge(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _videoId(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _action(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _adId(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _adAction(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _listed(): boolean {
    return this._call.inputValues[8].value.toBoolean();
  }
}

export class UpdateRoomParametersCall__Outputs {
  _call: UpdateRoomParametersCall;

  constructor(call: UpdateRoomParametersCall) {
    this._call = call;
  }
}

export class UpdateSocialTokenHolderParametersCall extends ethereum.Call {
  get inputs(): UpdateSocialTokenHolderParametersCall__Inputs {
    return new UpdateSocialTokenHolderParametersCall__Inputs(this);
  }

  get outputs(): UpdateSocialTokenHolderParametersCall__Outputs {
    return new UpdateSocialTokenHolderParametersCall__Outputs(this);
  }
}

export class UpdateSocialTokenHolderParametersCall__Inputs {
  _call: UpdateSocialTokenHolderParametersCall;

  constructor(call: UpdateSocialTokenHolderParametersCall) {
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

  get _currentlyListed(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _account(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class UpdateSocialTokenHolderParametersCall__Outputs {
  _call: UpdateSocialTokenHolderParametersCall;

  constructor(call: UpdateSocialTokenHolderParametersCall) {
    this._call = call;
  }
}

export class UpdateSocialTokenParametersCall extends ethereum.Call {
  get inputs(): UpdateSocialTokenParametersCall__Inputs {
    return new UpdateSocialTokenParametersCall__Inputs(this);
  }

  get outputs(): UpdateSocialTokenParametersCall__Outputs {
    return new UpdateSocialTokenParametersCall__Outputs(this);
  }
}

export class UpdateSocialTokenParametersCall__Inputs {
  _call: UpdateSocialTokenParametersCall;

  constructor(call: UpdateSocialTokenParametersCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _circulatingSupply(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _launched(): boolean {
    return this._call.inputValues[3].value.toBoolean();
  }

  get videoId(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class UpdateSocialTokenParametersCall__Outputs {
  _call: UpdateSocialTokenParametersCall;

  constructor(call: UpdateSocialTokenParametersCall) {
    this._call = call;
  }
}

export class UpdateVideoParametersCall extends ethereum.Call {
  get inputs(): UpdateVideoParametersCall__Inputs {
    return new UpdateVideoParametersCall__Inputs(this);
  }

  get outputs(): UpdateVideoParametersCall__Outputs {
    return new UpdateVideoParametersCall__Outputs(this);
  }
}

export class UpdateVideoParametersCall__Inputs {
  _call: UpdateVideoParametersCall;

  constructor(call: UpdateVideoParametersCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _owner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _beneficiary(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _action(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _listed(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }

  get _published(): boolean {
    return this._call.inputValues[6].value.toBoolean();
  }

  get _AdsEnabled(): boolean {
    return this._call.inputValues[7].value.toBoolean();
  }

  get _roomId(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }
}

export class UpdateVideoParametersCall__Outputs {
  _call: UpdateVideoParametersCall;

  constructor(call: UpdateVideoParametersCall) {
    this._call = call;
  }
}

export class UpdateVideoRevenueParametersCall extends ethereum.Call {
  get inputs(): UpdateVideoRevenueParametersCall__Inputs {
    return new UpdateVideoRevenueParametersCall__Inputs(this);
  }

  get outputs(): UpdateVideoRevenueParametersCall__Outputs {
    return new UpdateVideoRevenueParametersCall__Outputs(this);
  }
}

export class UpdateVideoRevenueParametersCall__Inputs {
  _call: UpdateVideoRevenueParametersCall;

  constructor(call: UpdateVideoRevenueParametersCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ownerPercentage(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _holderPercentage(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateVideoRevenueParametersCall__Outputs {
  _call: UpdateVideoRevenueParametersCall;

  constructor(call: UpdateVideoRevenueParametersCall) {
    this._call = call;
  }
}
