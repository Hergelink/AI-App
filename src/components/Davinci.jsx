import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import loadingCube from '../images/klevvvers-cube.png';
import gpt3 from '../images/openai.svg';

export default function Davinci() {
  const [userPrompt, setUserPrompt] = useState('');

  const [temp, setTemp] = useState(1);

  const [aiResponse, setAiResponse] = useState('...await the response');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    await openai
      .createCompletion({
        model: 'text-davinci-002',
        prompt: `Answer this as gpt-3: ${userPrompt}`,

        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        setAiResponse(response.data.choices[0].text);
      });

    // OPEN AI-END
    setLoading(false);
  };
  return (
    <div id='davinciDiv'>
      <div className='infoArea'>
        <img
          src={gpt3}
          alt='artificial intelligence icon'
          className='titleIcons'
        />
        <h1>Hi there 👋</h1>
        <p>I am Open Ai's GPT-3 model called Davinci.</p>
      </div>
      <hr className='blogPageHr' />
      <div className='inputArea'>
        <label>
          How can i help you?
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
