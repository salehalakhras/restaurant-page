import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ page } : { page: number }) => {
    const navigate = useNavigate();

    const home = React.useRef<HTMLDivElement>(null);
    const menu = React.useRef<HTMLDivElement>(null);
    const about = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (page === 0) {
        home.current?.classList.add("font-bold", "underline", "cursor-default","hover:scale-100");
        document.title = "Home";
      } else if (page === 1) {
        menu.current?.classList.add("font-bold", "underline", "cursor-default","hover:scale-100");
        document.title = "Menu";
      } else if (page === 2) {
        about.current?.classList.add("font-bold", "underline", "cursor-default","hover:scale-100");
        document.title = "About";
      }
    }, [page]);

  return (
    <div className="bg-slate-900 h-16 w-full border border-slate-700 flex items-center justify-between p-4">
      <h1 className="text-slate-300 text-3xl font-bold">Restaurant</h1>
      <div className="text-slate-300 text-3xl font-bold">Logo</div>
      <div className="flex gap-6">
        <div ref={home} className="text-slate-300 text-xl hover:scale-110 cursor-pointer" onClick={() => navigate("/")} >Home</div>
        <div ref={menu} className="text-slate-300 text-xl hover:scale-110 cursor-pointer" onClick={() => navigate("/menu")} >Menu</div>
        <div ref={about} className="text-slate-300 text-xl hover:scale-110 cursor-pointer" onClick={() => navigate("/about")}>About</div>
      </div>
    </div>
  );
};

export default Header;
