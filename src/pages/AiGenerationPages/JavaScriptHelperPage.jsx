import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import '../Pages.css';
import loadingCube from '../../images/klevvvers-cube.png';
import javascriptIcon from '../../images/title-icons/javascript-icon.png';

export default function JavaScriptHelperPage() {
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
        prompt: `You: How do I combine arrays?\nJavaScript chatbot: You can use the concat() method.\nYou:How is the weather today?\nJavaScript chatbot:Sorry, this is not a javascript question.\nYou:${userPrompt}?`,
        
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      })
      .then((response) => {
        setResponseTitle(`AI JavaScript help suggestion for: ${userPrompt}`);
        setAiResponse(response.data.choices[0].text);
      });

    // OPEN AI-END
    setLoading(false);
  };
  return (
    <div className='productDiv'>
      <div className='infoArea'>
        <img
          src={javascriptIcon}
          alt='javascript icon'
          className='titleIcons'
        />
        <h1>JavaScript Helper</h1>
        <p>
          Ask javascript related questions and let the AI suggest you the
          possible actions you can take.
        </p>
      </div>
      <hr className='blogPageHr' />
      <div className='inputArea'>
        <label>
          Enter your JavaScript questions below:
          <input type='text' onChange={(e) => setUserPrompt(e.target.value)} />
        </label>

        <button onClick={handleSubmit}>Ask your Question</button>
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
  );
}
