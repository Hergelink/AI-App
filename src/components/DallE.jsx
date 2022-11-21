import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import loadingCube from '../images/klevvvers-cube.png';

export default function DallE() {
  const [prompt, setPromt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState('');
  const [placeholder, setPlaceholder] = useState('');

  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setPlaceholder('');
    setLoading(true);

    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '512x512',
    });

    

    setResult(res.data.data[0].url);

    setLoading(false);
  };

  return (
    <div className='dall-e'>
      <div className='inputArea'>
        <p>Enter Thumbnail Description Below:</p>
          <textarea
            className='thumbnailTextArea'
            rows={4}
            placeholder={placeholder}
            onChange={(e) => setPromt(e.target.value)}
          />
        
        <button onClick={generateImage}>Generate Thumbnail</button>
      </div>
      {loading && <>
      <p className='loadingTextInfo'>Image Generating...</p>
      <img src={loadingCube} alt='loading' className='loading' />
      </>}
     {result.length > 0 ? (
        <img className='resultImage' src={result} alt={prompt} />
      ) : (
        <></>
      )} 
    </div>
  );
}
