import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { Provider } from 'react-redux'
// import store from './store/index.tsx'
import {QueryClient, QueryClientProvider} from 'react-query'



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
