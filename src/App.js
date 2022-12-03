import './App.css';
import { ProjectRoutes } from './routes';
import ScrollToTop from './scrollToTop';
import { useState, useEffect } from 'react';
import { getUser } from './api/user';
import totop from './images/goUp.png';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from './features/userSlice';


function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [showBtn, setShowBtn] = useState(false);
  const Token = useSelector(state => state.user.token);
  const state = useSelector(state => state.user.changeState);

  const goUp = () => {
    window.scrollTo(0,0);
  }
  window.addEventListener('scroll', function() {
    if (this.scrollY >= 1000) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  })

  useEffect(() => {
    getUser().then(res => {
      dispatch(setData(res.data));
    }).catch(() => localStorage.removeItem('token'))
    
    // eslint-disable-next-line
  },[pathname, state])

  return (
    <div className="App">
      <ScrollToTop />
      <ProjectRoutes />
      {showBtn ? <img src={totop} className='goUp' onClick={goUp} /> : null}
    </div>
  );
}

export default App;
