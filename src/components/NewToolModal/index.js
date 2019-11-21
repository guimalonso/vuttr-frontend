import React, { useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdAdd } from 'react-icons/md';

import api from '../../services/api';

const NewToolModal = ({ isOpen, toggleModal, addToolInList }) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    if (title === '') {
      toast.error('Please inform a title.');
      return;
    }

    if (link === '') {
      toast.error('Please inform a link.');
      return;
    }

    if (description === '') {
      toast.error('Please inform a description.');
      return;
    }

    const response = await api.post("/tools", {
      title,
      link,
      description,
      tags: tags !== '' ? tags.split(' ') : []
    });

    if (response.status === 201) {
      addToolInList(response.data);
      toast.success('New tool added successfully');
      toggleModal('new');
    } else {
      toast.error(response.data.error);
    }
  };

  return (
    <Modal
      id="newtool"
      className="Modal"
      overlayClassName="Overlay"
      isOpen={isOpen}
      onRequestClose={() => toggleModal('new')}
    >
      <h1><MdAdd size={35} /> Add new Tool</h1>

      <label htmlFor="title">Tool name</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <label htmlFor="link">Tool link</label>
      <input
        type="text"
        name="link"
        id="link"
        value={link}
        onChange={event => setLink(event.target.value)}
      />

      <label htmlFor="description">Tool description</label>
      <textarea
        name="description"
        id="description"
        rows={3}
        value={description}
        onChange={event => setDescription(event.target.value)}
      ></textarea>

      <label htmlFor="tags">Tags</label>
      <input
        type="text"
        name="tags"
        id="tags"
        value={tags}
        onChange={event => setTags(event.target.value)}
      />

      <button className="submit-button" onClick={handleSubmit}>Add Tool</button>
      <button className="cancel-button" type="button" onClick={() => toggleModal('new')}>Cancel</button>
    </Modal>
  );
};

export default NewToolModal;

NewToolModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  addToolInList: PropTypes.func.isRequired
};