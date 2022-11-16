import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './BlogContentPage.css';

export default function BlogContentPage() {
  const [userPrompt, setUserPrompt] = useState('');

  const [responseTitle, setResponseTitle] = useState(
    'The response from AI will be shown below:'
  );
  const [aiResponse, setAiResponse] = useState('...await the response');

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        max_tokens: 200,
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
      <hr />
      <div className='inputArea'>
        <label>
          What Product Would You like to get a description for?
          <input type='text' onChange={(e) => setUserPrompt(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>get ai suggestions</button>
      </div>
      <hr />
      <div className='responseDiv'>
        <span className='aiResponseTitle'>{responseTitle}</span>
        <span className='aiResponse'>{aiResponse}</span>
      </div>
    </div>
  );
}
