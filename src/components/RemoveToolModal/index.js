import React from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { MdClear } from 'react-icons/md';

import api from '../../services/api';

const RemoveToolModal = ({ isOpen, toggleModal, id, title, removeToolFromList }) => {
  const handleConfirm = async () => {

    try {
      await api.delete(`/tools/${id}`);

      toast.success('Tool successfully removed.');
      removeToolFromList();
      toggleModal('remove');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Modal
      id="deletetool"
      className="Modal"
      overlayClassName="Overlay"
      isOpen={isOpen}
      onRequestClose={() => toggleModal('remove')}
    >
      <h1><MdClear size={35} /> Remove Tool</h1>

      <p>Are you sure you want to remove <strong>{title}</strong>?</p>

      <div>
        <button className="cancel-button" onClick={() => toggleModal('remove')}>Cancel</button>
        <button className="submit-button" onClick={handleConfirm}>Yes, remove</button>
      </div>
    </Modal>
  );
};

export default RemoveToolModal;

RemoveToolModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  removeToolFromList: PropTypes.func.isRequired
};