import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { RoomListed } from "../generated/schema"
import { RoomListed as RoomListedEvent } from "../generated/MarketPlace/MarketPlace"
import { handleRoomListed } from "../src/market-place"
import { createRoomListedEvent } from "./market-place-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _id = BigInt.fromI32(234)
    let _price = BigInt.fromI32(234)
    let newRoomListedEvent = createRoomListedEvent(_id, _price)
    handleRoomListed(newRoomListedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("RoomListed created and stored", () => {
    assert.entityCount("RoomListed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "RoomListed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_id",
      "234"
    )
    assert.fieldEquals(
      "RoomListed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_price",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
