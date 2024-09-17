// import React, { useState, useRef, useEffect } from "react";
// import "./Chatbot.css";

// const Chatbot = () => {
//   const API_URL = "http://127.0.0.1:5000/chat"; // Point to your Flask API

//   const [messages, setMessages] = useState([
//     { text: "Hi there 👋 \n How can I help you today?", type: "incoming" },
//   ]);
//   const [input, setInput] = useState("");
//   const chatboxRef = useRef(null);
//   const chatbotRef = useRef(null);

//   useEffect(() => {
//     chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
//   }, [messages]);

//   const createChatLi = (message, className) => ({
//     text: message,
//     type: className,
//   });

//   const generate = async (userMessage) => {
//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: userMessage }),
//       });

//       const data = await response.json();
//       const botMessage = data.response || "Sorry, I couldn't get a response.";
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         createChatLi(botMessage, "incoming"),
//       ]);
//     } catch (error) {
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         createChatLi(
//           "Oops! Something went wrong. Please try again.",
//           "incoming"
//         ),
//       ]);
//     }
//   };

//   const handleChat = () => {
//     const trimmedInput = input.trim();
//     if (!trimmedInput) return;

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       createChatLi(trimmedInput, "outgoing"),
//     ]);
//     setInput("");

//     setTimeout(() => {
//       generate(trimmedInput);
//     }, 600);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter" && !event.shiftKey) {
//       event.preventDefault();
//       handleChat();
//     }
//   };

//   const toggleChatbot = () => {
//     document.body.classList.toggle("show-chatbot");
//   };

//   const closeChatbot = () => {
//     document.body.classList.remove("show-chatbot");
//   };

//   return (
//     <>
//       <button className="chatbot-toggler" onClick={toggleChatbot}>
//         <span className="material-symbols-outlined">mode_comment</span>
//         <span className="material-symbols-outlined">close</span>
//       </button>
//       <div className="chatbot" ref={chatbotRef}>
//         <header>
//           <h2>Chatbot</h2>
//           <span
//             className="close-btn material-symbols-outlined"
//             onClick={closeChatbot}
//           >
//             close
//           </span>
//         </header>
//         <ul className="chatbox" ref={chatboxRef}>
//           {messages.map((msg, index) => (
//             <li key={index} className={`chat ${msg.type}`}>
//               {msg.type === "incoming" && (
//                 <span className="material-symbols-outlined">smart_toy</span>
//               )}
//               <p>{msg.text}</p>
//             </li>
//           ))}
//         </ul>
//         <div className="chat-input">
//           <textarea
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Enter a message..."
//             onKeyDown={handleKeyDown}
//             required
//           ></textarea>
//           <span className="material-symbols-outlined" onClick={handleChat}>
//             send
//           </span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Chatbot;

import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const API_URL = "http://127.0.0.1:5000/chat"; // Point to your Flask API

  const [messages, setMessages] = useState([
    { text: "Hi there 👋 \n How can I help you today?", type: "incoming" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const chatboxRef = useRef(null);
  const chatbotRef = useRef(null);

  useEffect(() => {
    chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
  }, [messages]);

  const createChatLi = (message, className) => ({
    text: message,
    type: className,
  });

  const generate = async (userMessage) => {
    try {
      setIsLoading(true); // Start loading animation
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      const botMessage = data.response || "Sorry, I couldn't get a response.";
      setMessages((prevMessages) => [
        ...prevMessages,
        createChatLi(botMessage, "incoming"),
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        createChatLi(
          "Oops! Something went wrong. Please try again.",
          "incoming"
        ),
      ]);
    } finally {
      setIsLoading(false); // Stop loading animation
    }
  };

  const handleChat = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      createChatLi(trimmedInput, "outgoing"),
    ]);
    setInput("");

    setTimeout(() => {
      generate(trimmedInput);
    }, 600);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleChat();
    }
  };

  const toggleChatbot = () => {
    document.body.classList.toggle("show-chatbot");
  };

  const closeChatbot = () => {
    document.body.classList.remove("show-chatbot");
  };

  return (
    <>
      <button className="chatbot-toggler" onClick={toggleChatbot}>
        <span className="material-symbols-outlined">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot" ref={chatbotRef}>
        <header>
          <h2>Chatbot</h2>
          <span
            className="close-btn material-symbols-outlined"
            onClick={closeChatbot}
          >
            close
          </span>
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          {messages.map((msg, index) => (
            <li key={index} className={`chat ${msg.type}`}>
              {msg.type === "incoming" && (
                <span className="material-symbols-outlined">smart_toy</span>
              )}
              <p>{msg.text}</p>
            </li>
          ))}
          {isLoading && (
            <li className="chat incoming">
              <div className="loading-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </li>
          )}
        </ul>
        <div className="chat-input">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a message..."
            onKeyDown={handleKeyDown}
            required
          ></textarea>
          <span className="material-symbols-outlined" onClick={handleChat}>
            send
          </span>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
