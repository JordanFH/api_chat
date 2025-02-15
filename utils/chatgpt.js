module.exports = {
    async main() {
        try {
            const OpenAI = require("openai");
            const openai = new OpenAI({ apiKey: '' });

            const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "gpt-3.5-turbo",
            });
            
            console.log(completion.choices[0]);
        } catch (error) {
            console.log(error);
        }
    }
}