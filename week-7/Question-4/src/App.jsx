import { useState } from 'react'
import './App.css'

function App() {
  const [paragraph, setParagraph] = useState('');
  const [word, setWord] = useState('');
  const wordSet = ['I', 'am', 'generating', 'some', 'random', 'words', 'here', 'for', 'assignment']

  const generateParagraphs = () => {
    try {
      if (word > wordSet.length) {
        setParagraph(wordSet.join(' '));
        throw new Error('Enter less number of words');
      }
      const paragraphs = wordSet.slice(0, word);
        for(let i = word - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          var temp = paragraphs[i];
          paragraphs[i] = paragraphs[j];
          paragraphs[j] = temp;
        }
      setParagraph(paragraphs.join(' '));
    } catch(e) {
      alert(e);
    }
  };

  return (
    <div className='para-container'>
      <div>
        <p className='heading'>Para Generator</p>
      </div>
      <div className='action-items'>
        <input type='number' onChange={(event) => setWord(event.target.value)} value={word} placeholder='Enter Number Of Words'/>
        <button onClick={generateParagraphs}>Generate</button>
      </div>
      <textarea value={paragraph} placeholder='Generated text here...' className='paragraphs'></textarea>
    </div>
  )
}

export default App
