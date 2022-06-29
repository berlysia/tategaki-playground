import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Decoration } from "./components/Decoration";
import { Home } from "./components/Home";
import { TextOrientation } from "./components/TextOrientation";
import { GlobalLayout } from "./components/GlobalLayout";
import { NotFound } from "./components/NotFound";
import { TategakiSampleTable } from "./components/TategakiSampleTable";
import { TategakiGlyphVariation } from "./components/TategakiGlyphVariation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Home />} />
          <Route path="decoration" element={<Decoration />} />
          <Route path="text-orientation" element={<TextOrientation />} />
          <Route
            path="tategaki-sample-table"
            element={<TategakiSampleTable />}
          />
          <Route
            path="tategaki-glyph-variation"
            element={<TategakiGlyphVariation />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
