"use client";

import dynamic from "next/dynamic";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

export function UnicornBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
      }}
    >
      <div className="w-full h-full" style={{ transform: "scale(1.15)", transformOrigin: "center center" }}>
        <UnicornScene
          projectId="JO5iLzIUqYHumK5vHjV4"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.6/dist/unicornStudio.umd.js"
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
          fps={60}
          lazyLoad={true}
        />
      </div>
    </div>
  );
}
