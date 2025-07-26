import React from "react";
import ShortLogo from "./assets/icons/shortLogo.svg?react";
import LongLogo from "./assets/icons/longLogo.svg?react";

function App() {
  return (
    <div className="min-h-screen bg-primary-100 safe-area-top safe-area-bottom flex flex-col items-center justify-center">
      <ShortLogo className="w-32 h-32 mb-8" />
      <LongLogo className="w-32 h-32 mb-8" />

      <h1 className="text-text-primary font-ryuryu text-4xl text-center">
        마음 상점
      </h1>
    </div>
  );
}

export default App;
