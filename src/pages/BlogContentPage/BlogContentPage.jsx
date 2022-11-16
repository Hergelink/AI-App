import React, { useState } from 'react';
import './BlogContentPage.css';

export default function BlogContentPage() {


  const [userPrompt, setUserPrompt] = useState('')

  const [responseTitle, setResponseTitle] = useState(
    'The response from AI will be shown below:'
  );
  const [aiResponse, setAiResponse] = useState('...await the response');




  const handleSubmit = (e) => {
    e.preventDefault();

    // {userPrompt} send this to api

    
    setResponseTitle(`AI Product description suggestions for: ${userPrompt}`)
    setAiResponse('The response from open ai will be shown here')
  }

  return (
    <div>
      <div className='infoArea'>
        <h1>Generate Product Descriptions</h1>
        <p>
          Genereate product descriptions for any type of produtcs, simply enter
          the name and product description to get started.
        </p>
      </div>

      <form onSubmit={handleSubmit} >
        <label htmlFor=''>
          What Product Would You like to get a description for
          <input type='text' onChange={(e) => setUserPrompt(e.target.value)} />
        </label>
        <button type='submit' >Get AI Suggestions</button>
      </form>

      <div className='responseDiv'>
        <span className='aiResponseTitle'>{responseTitle}</span>
        <span className='aiResponse'>{aiResponse}</span>
      </div>
    </div>
  );
}
