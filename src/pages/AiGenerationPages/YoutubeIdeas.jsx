import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import DallE from '../../components/DallE';
import '../Pages.css';
import loadingCube from '../../images/klevvvers-cube.png';
import youtubeIcon from '../../images/title-icons/youtube-icon.png';

export default function YoutubeIdeas() {
  const [userPrompt, setUserPrompt] = useState('');
  const [selection, setSelection] = useState('gTitle');

  const [responseTitle, setResponseTitle] = useState(
    'The response from AI will be shown below:'
  );

  const [temp, setTemp] = useState(1);

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
        prompt: userPrompt,
        temperature: temp,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response) => {
        setResponseTitle(`AI Google ads suggestions for: ${userPrompt}`);
        setAiResponse(response.data.choices[0].text);
      });

    // OPEN AI-END
    setLoading(false);
  };
  return (
    <div className='productDiv'>
      <div className='infoArea'>
        <img src={youtubeIcon} alt='youtube icon' className='titleIcons' />
        <h1>Generate Youtube Ideas</h1>
        <p>Genereate Youtube titles, thumbnails and video ideas.</p>
      </div>

      <label className='selectionLabel'>
        <select
            className='selectionBar'
          defaultValue='gTitle'
          onChange={(e) => {
            setSelection(e.target.value);
          }}
        >
          <option value='gTitle'>Generate Title</option>
          <option value='gTopic'>Generate Video Topics</option>
          <option value='gThumbnail'>Generate Thumbnail</option>
        </select>
      </label>
      <hr className='blogPageHr' />
      {selection === 'gThumbnail' ? (
        <DallE />
      ) : (
        <>
          <div className='inputArea'>
            {selection === 'gTitle' ? (
              <label>
                Generate Youtube video titles based on this idea:
                <input
                  type='text'
                  onChange={(e) =>
                    setUserPrompt(
                      `Generate five Youtube Titles based on this idea: ${e.target.value}`
                    )
                  }
                />
              </label>
            ) : (
              <label>
                Generate Youtube video topics based on this sentence:
                <input
                  type='text'
                  onChange={(e) =>
                    setUserPrompt(
                      `Generate five Youtube video content topics based on this sentence: ${e.target.value}`
                    )
                  }
                />
              </label>
            )}

            <div className='rangeSlider'>
              <div className='rangeInfo'>
                <p>Deterministic</p>
                <p>{temp}</p>
                <p>Creative</p>
              </div>
              <input
                type='range'
                min={0}
                max={1}
                step={0.01}
                value={temp}
                onChange={(e) => setTemp(e.target.value * 1)}
                className='slider'
              />
            </div>
            <button onClick={handleSubmit}>Generate Ad Text</button>
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
        </>
      )}
    </div>
  );
}
