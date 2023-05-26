const { Configuration, OpenAIApi } = require("openai");
const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const configuration = new Configuration({
    organization: "org-kxFa1XmCwyQBwiNuVCqizoZk",
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express()
const port = 3080
app.use(bodyParser.json())
app.use(cors())

app.post('/', cors(), async (req, res) => {
    const { message } = req.body
    console.log(message)
    // const response = await openai.createCompletion({
    //     model: "text-davinci-003",
    //     prompt: "Say this is a test",
    //     max_tokens: 7,
    //     temperature: 0,
    // })
    // console.log(response.data.choices[0].text)
    res.json({data: message})
})

app.listen(port, () => {
    console.log(`Example app listening at http:// localhost:${port}`)
})
