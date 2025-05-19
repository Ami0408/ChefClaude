import React from 'react'
import Markdown from 'react-markdown'

export default function Recipe ({ generated }){
  return(
    <section>
      <h2> Chef Claude Recommends </h2>
      <Markdown> {generated} </Markdown>
    </section>
  );
}
