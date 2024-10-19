const chatlogs = document.getElementById('chatlogs');
const inputField = document.getElementById('userInput');

// Expanded list of possible responses
const responses = {
    greeting: [
        "Hello! How can I assist you today?", 
        "Hi there! What can I help you with?", 
        "Hey! How can I assist you with finding a mentor or student?"
    ],
    mentor: [
        "It seems like you're looking for a mentor. Redirecting you to the mentor page...", 
        "I can help you connect with a mentor. Redirecting you to the mentor page now...", 
        "Mentors are a great resource! Let me take you to the mentor page..."
    ],
    student: [
        "Looking to connect with a mentor as a student? What skills are you interested in learning?", 
        "I can help guide you to find the right mentor. What are you looking to improve?", 
        "What subject do you need help with? I can suggest mentors who are experts in that field."
    ],
    help: [
        "I'm here to assist! You can ask me about how to connect with a mentor or other questions.", 
        "Need help? I can guide you through the process of finding a mentor or offer more assistance.", 
        "Feel free to ask anything! I can help you with our services or finding mentors and students."
    ],
    fallback: [
        "I'm sorry, I don't quite understand that. Could you try rephrasing?", 
        "Hmm, I'm not sure about that. Can you clarify what you're looking for?", 
        "I didn't get that. Could you ask something else, or let me know if you're looking for help with mentors or students?"
    ]
};

// Display a default greeting message when the chat initializes
appendMessage(getRandomResponse(responses.greeting), 'bot');

function sendMessage() {
    const userMessage = inputField.value.trim();

    if (userMessage !== '') {
        appendMessage(userMessage, 'user');
        botReply(userMessage);
        inputField.value = '';
    }
}

function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.textContent = message;
    chatlogs.appendChild(messageElement);
    chatlogs.scrollTop = chatlogs.scrollHeight;  // Auto-scroll to the bottom
}

function botReply(userMessage) {
    let botMessage = getSimulatedAIResponse(userMessage);

    setTimeout(() => {
        appendMessage(botMessage, 'bot');
    }, 500); // Simulate delay for bot response

    // Redirect to mentor page if the user is asking about mentors
    if (containsWord(userMessage, ['mentor', 'mentor details', 'find mentor' ,'teacher','professor' , 'student'])) {
        setTimeout(() => {
            window.location.href = 'explore.html';  // Replace with the actual URL of your mentors page
        }, 2000); // Redirect after a short delay to give the bot time to respond
    }
}

function getSimulatedAIResponse(userMessage) {
    userMessage = userMessage.toLowerCase();  // Convert to lowercase for easier matching

    // Basic intent detection using keywords
    if (containsWord(userMessage, ['hello', 'hi', 'hey', 'greetings'])) {
        return getRandomResponse(responses.greeting);
    } else if (containsWord(userMessage, ['mentor', 'mentor details', 'find mentor','teacher','professor' , 'student'])) {
        return getRandomResponse(responses.mentor);
    } else if (containsWord(userMessage, ['student', 'learn', 'study', 'improve'])) {
        return getRandomResponse(responses.student);
    } else if (containsWord(userMessage, ['help', 'assist', 'support', 'question'])) {
        return getRandomResponse(responses.help);
    } else {
        return getRandomResponse(responses.fallback);
    }
}

// Utility function to check if any keyword exists in the user message
function containsWord(message, words) {
    return words.some(word => message.includes(word));
}

// Utility function to get a random response from the response list
function getRandomResponse(responseArray) {
    const randomIndex = Math.floor(Math.random() * responseArray.length);
    return responseArray[randomIndex];
}
