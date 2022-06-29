import { Link, Outlet } from "react-router-dom";

export function GlobalLayout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">ホーム</Link> | <Link to="decoration">装飾例</Link> |{" "}
          <Link to="text-orientation">文字の正立・横転</Link> |{" "}
          <Link to="tategaki-sample-table">記事サンプル</Link> |{" "}
          <Link to="tategaki-glyph-variation">グリフサンプル</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
