import { muthootBaseUrl } from "../../config/urls.js"
import { muthootTokenBody } from "../../payloads/authPayload.js"
import { generateAuthToken } from "../../services/apiService.js"
import { describe, it } from "node:test"

describe("Generate Token", async () => {
    it("Audiance Secreet Key mismatch", async () => {
        const response = await generateAuthToken(muthootBaseUrl, muthootTokenBody, null, true)
        console.log(response.body)
    })
})