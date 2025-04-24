import { Routes, Route } from "react-router-dom";
import GlobalStyle from '@styles/GlobalStyle'
import Error from "@routes/Error";
import Main from "@main/Main";
import Map from "@map/Map";
import Puzzle from "@puzzle/Puzzle";
import Review from "@review/Review";
import Timetable from "@timetable/Timetable";
import List from "@notice/List";
import Detail from "@notice/Detail";
import Image from "@notice/Image";
import Form from "@notice/Form";
import Login from "@admin/Login";
import Home from "@admin/Home";
import Create from "@admin/Create";
import BoothList from "@admin/BoothList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/review" element={<Review />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/notice" element={<List />} />
        <Route path="/notice/:id" element={<Detail />} />
        <Route path="/notice/image" element={<Image />} />
        {/* 어드민 */}
        <Route path="/notice/new" element={<Form type="new" />} />
        <Route path="/notice/:id/edit" element={<Form type="new" />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/menu" element={<Home />} />
        <Route path="/booth" element={<BoothList />} />
        <Route path="/booth/new" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
