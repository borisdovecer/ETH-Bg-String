import { Layout } from "@app/layout";
import { BrowserRouter } from "react-router-dom";

const App = () =>  {
  return (
    <div className='h-screen bg-blue-400 text-center'>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </div>
  )
}

export default App
