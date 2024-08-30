import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WishContextProvider } from './WishContext/WishContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishContextProvider>
    <App/> 
    </WishContextProvider>
  </StrictMode>
)
