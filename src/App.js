import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component.jsx'
import Navigation from './routes/navigation/navigation.component.jsx';
import SignIn from './routes/signIn/signIn.component.jsx';

const Shop = () => {
  return <h1> This is shop Page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path ='/' element= {<Navigation/>}>
        <Route index element = {<Home/>}/>
        <Route path='shop' element={<Shop />} />
        <Route path='signIn' element= {<SignIn/>}/>
      </Route>
    </Routes>    
  )
}

export default App;
