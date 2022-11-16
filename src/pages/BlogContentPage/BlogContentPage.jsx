import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './BlogContentPage.css';
import loadingCube from '../../images/klevvvers-cube.png';

export default function BlogContentPage() {
  const [userPrompt, setUserPrompt] = useState('');

  const [responseTitle, setResponseTitle] = useState(
    'The response from AI will be shown below:'
  );
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

    const response = await openai
      .createCompletion({
        model: 'text-davinci-002',
        prompt: `Write a detailed, smart, informative and professional product description for ${userPrompt}`,
        temperature: 1,
        // max_tokens: 200,
        max_tokens: 30,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        setResponseTitle(
          `AI Product Description suggestion for: ${userPrompt}`
        );
        setAiResponse(response.data.choices[0].text);
      });

    // OPEN AI-END
    setLoading(false);
  };

  return (
    <div>
      <div className='infoArea'>
        <h1>Generate Product Descriptions</h1>
        <p>
          Genereate product descriptions for any type of produtcs, simply enter
          the name and product description to get started.
        </p>
      </div>
      <hr className='blogPageHr' />
      <div className='inputArea'>
        <label>
          What Product Would You like to get a description for?
          <input type='text' onChange={(e) => setUserPrompt(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>Generate description</button>
      </div>
      <hr className='blogPageHr' />
      <div className='responseDiv'>
        {!loading ? (
          <>
            <span className='aiResponseTitle'>{responseTitle}</span>
            <hr />
            <span className='aiResponse'>{aiResponse}</span>
          </>
        ) : (
          <img src={loadingCube} className='loading' />
        )}
      </div>
    </div>
  );
}
