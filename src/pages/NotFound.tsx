import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative floating stickers */}
      <div className="hidden md:block absolute top-16 left-12 sticker pop-pink -rotate-12 wobble">
        ✦ lost?
      </div>
      <div className="hidden md:block absolute bottom-20 right-16 sticker pop-blue rotate-6 wobble-soft">
        ★ try again
      </div>
      <div className="hidden md:block absolute top-1/3 right-24 sticker pop-green rotate-3 wobble-soft">
        ✿ no worries
      </div>

      <div className="max-w-2xl w-full">
        <div className="bento bento-lg p-8 md:p-12 pop-yellow relative text-center">
          <span className="sticker bg-card absolute -top-3 -right-3 rotate-6 wobble">
            🤖 page.exe
          </span>

          <p className="font-display font-bold text-sm uppercase tracking-widest mb-3">
            ✦ Error 404
          </p>
          <h1 className="font-display text-7xl md:text-9xl font-bold leading-none mb-4">
            4
            <span className="inline-block float-slow">0</span>
            4
          </h1>
          <p className="font-display text-2xl md:text-3xl font-bold mb-3">
            This page took a coffee break.
          </p>
          <p className="text-foreground/80 mb-2">
            Looks like the URL{" "}
            <code className="px-2 py-0.5 bg-card border-2 border-foreground rounded-md font-mono text-sm">
              {location.pathname}
            </code>{" "}
            doesn't exist on my portfolio.
          </p>
          <p className="text-foreground/70 mb-8 text-sm">
            (Maybe a typo? Or maybe I forgot to build that page. Either way…)
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/" className="pill-btn bg-card">
              <ArrowLeft className="w-4 h-4" />
              Take me home
            </a>
            <a href="mailto:sambarimanish@gmail.com" className="pill-btn pop-pink">
              <Mail className="w-4 h-4" />
              Tell me what's broken
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
