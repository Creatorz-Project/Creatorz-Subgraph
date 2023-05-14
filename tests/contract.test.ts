import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { SocialTokenLaunched } from "../generated/schema"
import { SocialTokenLaunched as SocialTokenLaunchedEvent } from "../generated/Contract/Contract"
import { handleSocialTokenLaunched } from "../src/contract"
import { createSocialTokenLaunchedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let tokenId = BigInt.fromI32(234)
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let price = BigInt.fromI32(234)
    let amount = BigInt.fromI32(234)
    let videoIds = BigInt.fromI32(234)
    let newSocialTokenLaunchedEvent = createSocialTokenLaunchedEvent(
      tokenId,
      creator,
      price,
      amount,
      videoIds
    )
    handleSocialTokenLaunched(newSocialTokenLaunchedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("SocialTokenLaunched created and stored", () => {
    assert.entityCount("SocialTokenLaunched", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "SocialTokenLaunched",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "SocialTokenLaunched",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "SocialTokenLaunched",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
    assert.fieldEquals(
      "SocialTokenLaunched",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "SocialTokenLaunched",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "videoIds",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
