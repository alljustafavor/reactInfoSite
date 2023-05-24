import './App.css';


function NavBar() {
  return (
    <header>
      <nav>
        <div className='nav-logo'>
          <img className={'logo'} src={"./logo192.png"} alt={"React JS library Logo"} width={"60px"}/>
          <h1>FavorReact</h1>
        </div>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header> 
  )
}

function MainContent() {
  return (
      <div className={"main-content-container"}>
        <h1>Reasons I'm excited to learn <span className={'cyan'}>React</span></h1>
        <ul className='list'>
          <li>It's easier to read and write </li>
          <li>The Virtual DOM is the best feature</li>
          <li>Being maintained by Facebook and the open-source community</li>
          <li>React is a very hireable skill</li>
          <li>React is also very popular</li>
        </ul>
      </div>
  );
}


function FooterBar() {
  return (
    <footer>
      <small><span className={'cyan'}>©</span> 2023 Favor development. All rights reserved.</small>
    </footer>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <MainContent />
      <FooterBar />
    </>
  )
}



export default App;
