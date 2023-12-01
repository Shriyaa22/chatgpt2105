
import './App.css';
import gptlogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import usericon from './assets/user-icon.png';
import gptimagelogo from './assets/chatgptLogo.svg';

 


function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptlogo} alt='logo' className='logo'/><span className='brand'>ChatGPT</span> </div>
          <button className='midBTN'><img src={addBtn} alt='new chat' className='addBtn'/>New Chat</button>
          <div className='upperSidebottom'>
             <button className='query'><img src={msgIcon} alt='Query'/>What is Programming</button>
             <button className='query'><img src={msgIcon} alt='Query'/>How to use it</button>

          </div>

        </div>
        <div className='lowerSide'>
          <div className='listItems'><img src={home} className='listitemsImg'/>Home</div>
          <div className='listItems'><img src={saved} className='listitemsImg'/>Saved</div>
          <div className='listItems'><img src={rocket} className='listitemsImg'/>Upgrade to pro</div>
        </div>

      </div>
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img className='chatimg' src={usericon}/>
            <p className='txt'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"</p>
          </div>
          <div className='chat bot '>
          <img className='chatimg' src={gptimagelogo}/>
            <p className='txt'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type="text" name="" id="" placeholder ='Send a message'/><button className="send"><img src={sendBtn}  /></button>

          </div>
          <p>ChatGPT may produce inaccurate information about people,places. ChatGPT August 20 Version.</p>
        </div>

      </div>
      
    </div>
  );
}

export default App;
