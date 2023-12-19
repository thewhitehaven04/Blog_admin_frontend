import { Private } from 'Components/Common/Private'
import { AppLayout } from 'Components/Layout/AppLayout'
import { DeletePostModal } from 'Components/Modals/DeletePostModal'
import { LoginPage } from 'Pages/Login'
import { PostCreatePage } from 'Pages/PostCreate'
import { PostEditFormPage } from 'Pages/PostEdit'
import { PostViewPage } from 'Pages/PostView'
import { PostsPage } from 'Pages/Posts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='*' element={<Private />}>
            <Route path='posts' element={<PostsPage />} />
            <Route path='post/new' element={<PostCreatePage />} />
            <Route path='post/:id' element={<PostViewPage />} />
            <Route path='post/:id/edit' element={<PostEditFormPage />}>
              <Route path='delete' element={<DeletePostModal />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
