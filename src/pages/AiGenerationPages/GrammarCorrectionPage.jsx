import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import '../Pages.css';
import loadingCube from '../../images/klevvvers-cube.png';
import languageIcon from '../../images/header-icons/language-icon.png'
export default function GrammarCorrectionPage() {
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
        prompt: `Correct this to standard English: ${userPrompt}`,
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        setResponseTitle(`AI Grammar Correction for: ${userPrompt}`);
        setAiResponse(response.data.choices[0].text);
      });

    // OPEN AI-END
    setLoading(false);
  };
  return (
    <div className='productDiv'>
      <div className='infoArea'>
      <img
          src={languageIcon}
          alt='language icon'
          className='titleIcons'
        />
        <h1>Grammar Correction</h1>
        <p>Correct sentences or paragraphs into standard English.</p>
      </div>
      <hr className='blogPageHr' />

      <div className='inputArea'>
        <label>
          Enter your text below to be corrected
          <textarea
            className='grammarTextArea'
            rows={4}
            onChange={(e) => setUserPrompt(e.target.value)}
          />
        </label>

        <button onClick={handleSubmit}>Correct Grammar</button>
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
