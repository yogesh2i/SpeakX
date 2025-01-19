import Style from './App.module.scss';
import Filters from './Components/Filters/Filters';
import Navbar from './Components/Navbar/Navbar';
import QuestionList from './Components/QuestionList/QuestionList';
import Search from './Components/Search/Search';

function App() {
  return (
    <>
       <Navbar></Navbar>
       <main className={Style.main}>
        <Search></Search>
        <Filters></Filters>
       <QuestionList></QuestionList>
       </main>
    </>
  );
}

export default App;
