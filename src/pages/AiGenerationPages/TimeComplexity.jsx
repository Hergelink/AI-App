import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import '../Pages.css';
import loadingCube from '../../images/klevvvers-cube.png';
import timeIcon from '../../images/title-icons/time-icon.png';

export default function TimeComplexity() {
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

    await openai
      .createCompletion({
        model: 'text-davinci-002',
        // prompt: `${userPrompt}\nThe time complexity of this function is`,
        prompt: `Calculate and explain the time complexity of this function:${userPrompt}`,
        temperature: 0,
        max_tokens: 64,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        // stop: ["\n"],
      })
      .then((response) => {
        setResponseTitle(`Time complexity calculation for: ${userPrompt}`);
        setAiResponse(response.data.choices[0].text);
      });

    // OPEN AI-END
    setLoading(false);
  };
  return (
    <div className='productDiv'>
      <div className='infoArea'>
      <img src={timeIcon} alt='youtube icon' className='titleIcons' />
        <h1>Calculate Time Complexity</h1>
        <p>Let the AI calculate your functions time complexity.</p>
      </div>
      <hr className='blogPageHr' />

      <div className='inputArea'>
        <label>
        Enter your function to be calculated:
          <textarea
            className='grammarTextArea'
            rows={18}
            onChange={(e) => setUserPrompt(e.target.value)}
          />
        </label>

        <button onClick={handleSubmit}>Calculate</button>
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
          <img src={loadingCube} alt='loading' className='loading' />
        )}
      </div>
    </div>
  )
}
