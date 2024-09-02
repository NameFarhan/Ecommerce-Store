import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WishContextProvider } from './WishContext/WishContext.jsx'
import { CartContextProvider } from './CartPageContext/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishContextProvider>
    <CartContextProvider>
    <App/> 
    </CartContextProvider>
    </WishContextProvider>
  </StrictMode>
)
