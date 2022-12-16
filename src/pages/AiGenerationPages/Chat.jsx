import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import '../Pages.css';
import loadingCube from '../../images/klevvvers-cube.png';
import chatIcon from '../../images/title-icons/chat-icon.png';

export default function Chat() {
  const [userPrompt, setUserPrompt] = useState();

  const [aiResponse, setAiResponse] = useState('...await the response');

  const [loading, setLoading] = useState(false);

  const [conversation, setConversation] = useState(userPrompt);
  console.log(conversation)

  const handleSubmit = async () => {
    setLoading(true);

    setConversation(
      

      // prevState + userPrompt + '\n';
    );
    
    console.log(userPrompt);

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    await openai
      .createCompletion({
        model: 'text-davinci-003',
        // prompt: `The following is a conversation with an AI chatbot. The chatbot is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI chatbot by Klevvvers. What do you want to talk about today?\nHuman: ${userPrompt}`,
        prompt: conversation,
        temperature: 0.4,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        // stop: [' Human:', ' AI:'],
      })
      .then((response) => {
        setAiResponse(response.data.choices[0].text);
      });

    // OPEN AI-END
    setLoading(false);
  };
  return (
    <div className='productDiv'>
      <div className='infoArea'>
        <img src={chatIcon} alt='chat icon' className='titleIcons' />
        <h1>Chat with Ai</h1>
        <p>
          Chat with Davinci, the most advanced language capable neural network
          to date.
        </p>
      </div>
      <hr className='blogPageHr' />
      <div className='inputArea'>
        <label>
          Enter your text below to start chat
          <input type='text' onChange={(e) => setUserPrompt(e.target.value)} />
        </label>

        <button onClick={handleSubmit}>Chat</button>
      </div>
      <hr className='blogPageHr' />
      <div className='responseDiv'>
        {!loading ? (
          <>
            <span className='aiResponse'>{aiResponse}</span>
          </>
        ) : (
          <img src={loadingCube} alt='loading' className='loading' />
        )}
      </div>
    </div>
  );
}
