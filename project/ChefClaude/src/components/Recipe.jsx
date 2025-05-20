import React from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
export default function Recipe ({ generated }){
  return(
    <section className = "recipe">
      <h2> Chef Claude Recommends </h2>
      <div className ="ai">
        <Markdown>{generated}</Markdown>  
      </div>
    </section>
  );
}
