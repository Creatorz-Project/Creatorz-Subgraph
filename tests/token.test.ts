import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { AdCreated } from "../generated/schema"
import { AdCreated as AdCreatedEvent } from "../generated/Token/Token"
import { handleAdCreated } from "../src/token"
import { createAdCreatedEvent } from "./token-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let Id = BigInt.fromI32(234)
    let URI = "Example string value"
    let Advertiser = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAdCreatedEvent = createAdCreatedEvent(Id, URI, Advertiser)
    handleAdCreated(newAdCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AdCreated created and stored", () => {
    assert.entityCount("AdCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AdCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "Id",
      "234"
    )
    assert.fieldEquals(
      "AdCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "URI",
      "Example string value"
    )
    assert.fieldEquals(
      "AdCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "Advertiser",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
