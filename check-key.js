import OpenAI from "openai";

async function run() {
  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: "Say OK"
    });

    console.log("✅ API KEY WORKS");
    console.log(response.output_text);

  } catch (error) {
    console.error("❌ API KEY FAILED");
    console.error(error.message);
    process.exit(1);
  }
}

run();
