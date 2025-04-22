import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080/ws')
    socket.onopen = () => console.log('WebSocket connected')
    socket.onmessage = (e) => console.log('Received:', e.data)
  }, [])

  return <h1>🧪 WebSocket test page</h1>
}

export default App
