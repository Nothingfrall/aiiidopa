
import React, { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async () => {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sk-or-your-key-here',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }]
      })
    })
    const data = await res.json()
    setResponse(data.choices?.[0]?.message?.content || 'No response')
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>DopamineAI</h1>
      <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Tanya sesuatu..." />
      <br />
      <button onClick={handleSubmit}>Kirim</button>
      <pre>{response}</pre>
    </div>
  )
}

export default App
