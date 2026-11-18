✈️ Travels Booking Application — AI Travel Chatbot
An AI-powered travel assistant integrated into the Kapoor Airlines travel website.
🚧 Development Status: Under Maintenance
The chatbot is currently being improved and may be temporarily unavailable on the live website. I have integrated an LLM and started building tool-calling capabilities, and I am actively working on the next features.

🌐 Travel Website: [Visit Kapoor Airlines](https://kapoorairlines-lakhwinder-bits-projects.vercel.app/)
📖 About the Project
TripPlanter is a travel-focused chatbot designed to make trip planning easier through natural-language conversations. It is embedded in the Kapoor Airlines website so visitors can ask questions about destinations, request travel guidance, and eventually get help with trip planning and bookings without leaving the site.

This is an actively developed project, not a finished booking assistant. The current focus is on improving LLM responses, tool calling, and the overall user experience.
🧩 Features and Development Status
Feature	Status	Description
Website chatbot integration	🔧 Under maintenance	Chat interface embedded in the travel website; currently being improved.
LLM integration	✅ Integrated	Groq API is used to generate AI-powered responses.
Web search tool	🧪 In development / testing	Tavily integration allows the assistant to retrieve travel-related information from the web.
Tool calling	🧪 In development / testing	Building a workflow where the LLM can select and invoke tools when needed.
Guided trip planner	🚧 Upcoming / in progress	Collect origin, destination, passenger count, and trip duration through follow-up questions.
Booking assistance	🗓️ Planned	Help visitors explore travel options and continue to the website's booking flow.


Feature availability may change while the chatbot is under maintenance. A feature being integrated does not mean it is currently available in the live demo.
⚙️ How the Chatbot Is Designed to Work
1. Visitor opens the chatbot on the travel website (when the feature is available).
2. Visitor sends a travel question, such as “Help me plan a trip to Manali.”
3. Backend sends the conversation to the LLM through the Groq API.
4. Tool calling (being developed) lets the assistant request a tool, such as web search, when additional information is needed.
5. The backend executes the tool and returns the result to the LLM.
6. The assistant responds with useful travel guidance and, as new features are completed, asks follow-up questions for trip planning.
Example of the Planned Trip-Planning Experience
User: I want to plan a trip.
Assistant: Where will you be travelling from?
User: Ludhiana.
Assistant: What is your destination?
User: Manali.
Assistant: How many people are travelling?
User: 3.
Assistant: How many days are you planning for?
User: 4 days.
Assistant: Thanks! I'll use these details to help plan your trip.
This is an illustrative conversation for a feature in development, not a guarantee of current live functionality.

🛠️ Tech Stack
Area	Technology
Frontend	Next.js, React
Backend	Node.js, Express.js
LLM provider	Groq API
Web search	Tavily
Communication	REST APIs
Frontend hosting	Vercel


🏗️ Architecture (Current Direction)
User on Travel Website
         |
         v
    Chat Interface
         |
         v
 Node.js / Express API
         |
         v
      Groq LLM
         |
         |  (tool calling — in development)
         v
   Tool Selection / Execution
         |
         +----> Tavily Web Search
         +----> Future Travel / Booking Tools
         |
         v
   Tool Results + LLM Response
         |
         v
    Chat Interface
🗺️ What's Next?
- Improve tool-calling reliability and response formatting.
- Build the guided trip-planning flow with follow-up questions.
- Connect travel-specific tools and website data.
- Explore booking assistance and better conversation handling.
- Test the chatbot thoroughly and restore the live experience after maintenance.
🔗 Live Website
Open Kapoor Airlines

The travel website may be accessible while the chatbot itself is under maintenance. The URL is a Vercel branch deployment and may require deployment-protection settings to be changed before it is publicly accessible.
🔒 Security Notes
API credentials for Groq and Tavily should be stored in backend environment variables. Never commit .env files or expose secret API keys in the browser.
👨‍💻 Developer
Lakhwinder Singh
Full Stack Developer · React.js · Next.js · Node.js · AI Integrations
Portfolio summary: Building an AI travel assistant embedded in a travel website, with Groq LLM integration and tool-calling workflows. The chatbot is currently under maintenance while I develop and test new features.
