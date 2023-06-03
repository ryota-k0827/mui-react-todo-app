import { Button } from '@mui/material'
import { useState } from 'react'

import viteLogo from 'public/vite.svg'
import reactLogo from '~/assets/react.svg'

import '~/App.css'

export const App = () => {
  const [count, setCount] = useState(0)

  const onClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Material UI</h1>
      <div className="card">
        <Button variant="contained" type="button" onClick={onClick}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}
