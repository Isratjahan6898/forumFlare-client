import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'


import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<QueryClientProvider client={queryClient}>
<AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
    </QueryClientProvider>
 
 {/* <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider> */}
  </React.StrictMode>,
)
