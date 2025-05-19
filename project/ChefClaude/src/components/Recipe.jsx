import ReactMarkdown from 'react-markdown'

export default function Recipe ({ generated }){
  return(
    <section>
      <h2> Chef Claude Recommends </h2>
      <ReactMarkdown>{ generated } </ReactMarkdown>
    </section>
  );
}
