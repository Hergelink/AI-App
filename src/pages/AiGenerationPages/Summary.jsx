import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import '../Pages.css';
import loadingCube from '../../images/klevvvers-cube.png';
import summaryIcon from '../../images/title-icons/summary-icon.png'
export default function Summary() {
  const [userPrompt, setUserPrompt] = useState('');

  const [aiResponse, setAiResponse] = useState('...await the response');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    // {userPrompt} send this to api

    // OPEN AI-START

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    await openai
      .createCompletion({
        model: 'text-davinci-002',
        prompt: `${userPrompt}\n\nTl;dr`,
        temperature: 0.7,
        max_tokens: 100,
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
    <div className='productDiv'>
      <div className='infoArea'>
      <img
          src={summaryIcon}
          alt='summary icon'
          className='titleIcons'
        />
        <h1>Generate Summary</h1>
        <p>Generate summaries based on paragraphs</p>
      </div>
      <hr className='blogPageHr' />

      <div className='inputArea'>
        <label>
          Enter your paragraphs below to be summarized
          <textarea
            className='grammarTextArea'
            rows={30}
            onChange={(e) => setUserPrompt(e.target.value)}
          />
        </label>

        <button onClick={handleSubmit}>Generate Summary</button>
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
