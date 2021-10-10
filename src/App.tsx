import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Box from "./components/Box";
import Spinner from "./components/Spinner";
import "./App.css";


const Gallery = lazy(() => import("./routes/Gallery"));
const GalleryDetail = lazy(() => import("./routes/GalleryDetail"));
const SavedGallery = lazy(() => import("./routes/SavedGallery"));
const Page404 = lazy(() => import("./routes/Page404"));
axios.defaults.baseURL = "https://api.artic.edu/api/v1";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Suspense
          fallback={
            <Box
              width={50}
              m="auto"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              <Spinner color="black800" />
            </Box>
          }
        >
          <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/saved" exact component={SavedGallery} />
            <Route path="/:id" exact component={GalleryDetail} />
            <Route path="*" component={Page404} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
