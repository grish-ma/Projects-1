import {config} from "dotenv"
config()

import OpenAI from "openai";
import readline from "readline"

const openai = new OpenAI({
  apiKey: process.env.API_KEY // This is also the default, can be omitted
})

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

userInterface.prompt()
userInterface.on("line", async input => {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [{"role": "user", "content": input}]
   
      });
      console.log(chatCompletion.choices[0].message.content);
    userInterface.prompt()
})

