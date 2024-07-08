import { useTina } from 'tinacms/dist/react';
import client from '../tina/__generated__/client';

export default function TemplatePage(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const template = data.templates[0];

  return (
    <div className="page1">
      <div className="stampSection" dangerouslySetInnerHTML={{ __html: template.page1.stampSection.data }} />
      <div className="fromAddress">
        {template.page1.fromAddress.data.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className="toAddress">
        {template.page1.toAddress.data.map((line, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const tinaProps = await client.queries.contentQuery({
    relativePath: 'agent_letter_envelope.json',
  });

  return {
    props: {
      ...tinaProps,
    },
  };
};
