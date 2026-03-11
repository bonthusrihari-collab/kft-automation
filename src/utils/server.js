import express from "express";
import { processIsins } from "./exposeAPI.js";
const app = express();
app.use(express.json());

const PORT = 3001;

app.post('/process', async (req, res) => {
    const {
        partyCode,
        model = "success",
        EligibleISINCount = 5,
        InEligibleISINCount = 0,
        statusCode = "success",
        quantity = 0,
        price = 20.888
    } = req.body;

    if (!partyCode) {
        return res.status(400).json({ error: "partyCode is required" });
    }

    try {
        const result = await processIsins(
            partyCode,
            model,
            EligibleISINCount,
            InEligibleISINCount,
            statusCode,
            quantity,
            price
        );
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`Example POST to /process:`);
    console.log(JSON.stringify({
        partyCode: "BONTHU1",
        model: "alternating",
        EligibleISINCount: 5,
        InEligibleISINCount: 0,
        statusCode: "alternating",
        quantity: 200,
        price: 57.8926
    }, null, 2));
});
