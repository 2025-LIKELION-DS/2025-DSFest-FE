import { Routes, Route, Outlet } from 'react-router-dom';
import GlobalStyle from '@styles/GlobalStyle';
import Error from '@routes/Error';
import Main from '@main/Main';
import Map from '@map/Map';
import Puzzle from '@puzzle/Puzzle';
import Camera from '@puzzle/Camera';
import Review from '@review/Review';
import Timetable from '@timetable/Timetable';
import List from '@notice/List';
import Detail from '@notice/Detail';
import Image from '@notice/Image';
import Form from '@notice/Form';
import Login from '@admin/Login';
import Home from '@admin/Home';
import Create from '@admin/puzzle/Create';
import Preview from '@admin/puzzle/Preview';
import PuzzleList from '@admin/puzzle/PuzzleList';
import ProtectedRoute from '@components/ProtectedRoute';
import Topbar from '@components/Topbar/Topbar';

const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

function App({ scrollTargetRef }) {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/map" element={<Map />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/review" element={<Review scrollTargetRef={scrollTargetRef} />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/notice" element={<List />} />
          <Route path="/notice/:id" element={<Detail />} />
          <Route path="/notice/image" element={<Image />} />
          {/* 어드민 */}
          <Route path="/admin" element={<Login />} />
          <Route
            path="/notice/new"
            element={
              <ProtectedRoute>
                <Form type="new" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notice/:id/edit"
            element={
              <ProtectedRoute>
                <Form type="edit" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/menu"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/puzzle"
            element={
              <ProtectedRoute>
                <PuzzleList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/puzzle/new"
            element={
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/puzzle/preview"
            element={
              <ProtectedRoute>
                <Preview />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
