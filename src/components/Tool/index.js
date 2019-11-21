import React from 'react';
import PropTypes from 'prop-types';
import { MdClear } from 'react-icons/md';

import { Container, Header, Content } from './styles';

const Tool = ({ data, searchTerm, removeAction }) => {
  return (
    <Container>
      <Header>
        <a href={data.link} target="_blank">{data.title}</a>
        <button onClick={() => removeAction(data._id, data.title)}>
          <MdClear size={20} /> Remove
        </button>
      </Header>
      <Content>
        <p>{data.description}</p>
        <p>
          {data.tags.map((tag, index) => (
            <span key={index} className={tag === searchTerm ? 'tag-highlight' : undefined}>#{tag}</span>
          ))}
        </p>
      </Content>
    </Container>
  );
};

export default Tool;

Tool.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array
  }).isRequired,
  searchTerm: PropTypes.string,
  removeAction: PropTypes.func.isRequired
};