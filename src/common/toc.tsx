import React, { useEffect } from "react";
import tocbot from "tocbot";

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.body',
      headingSelector: 'h2, h3',
      collapseDepth: 3,
      orderedList: false,
      scrollSmooth: false,
    })
    return () => tocbot.destroy()
  }, [])

  return (
    <div className="toc"></div>
  )
}