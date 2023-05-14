import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { AdDisplayed } from "../generated/schema"
import { AdDisplayed as AdDisplayedEvent } from "../generated/AdManager/AdManager"
import { handleAdDisplayed } from "../src/ad-manager"
import { createAdDisplayedEvent } from "./ad-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let VideoId = BigInt.fromI32(234)
    let AdId = BigInt.fromI32(234)
    let Reward = BigInt.fromI32(234)
    let newAdDisplayedEvent = createAdDisplayedEvent(VideoId, AdId, Reward)
    handleAdDisplayed(newAdDisplayedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AdDisplayed created and stored", () => {
    assert.entityCount("AdDisplayed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AdDisplayed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "VideoId",
      "234"
    )
    assert.fieldEquals(
      "AdDisplayed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "AdId",
      "234"
    )
    assert.fieldEquals(
      "AdDisplayed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "Reward",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
