import './App.css';
import Sidebar from './Component/Sidebar';
import Chat from "./Component/Chat";
import db from './firebase';
import { getDocs, collection } from 'firebase/firestore';
// import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  // console.log(db);
  // console.log({...db.docs.map((doc)=>({...doc.data()}))});
  // console.log(db.collection);
  // const getChatList = async () => {
  //   try {
  //     const chatCollectionRef = collection(db, "rooms");
  //     const data = await getDocs(chatCollectionRef);
  //     console.log({...data.docs.map((doc)=>({...doc.data()}))});
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  // getChatList();
  





  return (
     // BEM naming convention
     <div className="App">

     <div className="app_body">
      {/* <Router> */}
        
       <Sidebar/>
       <Chat/>
       
       {/* </Router> */}
      

     </div>

   </div>
  );
}

export default App;
