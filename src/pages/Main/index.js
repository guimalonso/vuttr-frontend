import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { MdAdd } from 'react-icons/md';

import Tool from '../../components/Tool';
import NewToolModal from '../../components/NewToolModal';
import RemoveToolModal from '../../components/RemoveToolModal';

import { Content, Controls, ToolList } from './styles';

export default function Main() {
  const [tools, setTools] = useState([]);
  const [search, setSearch] = useState('');
  const [tagSearch, setTagSearch] = useState(0);
  const [newToolModalOpen, setNewToolModalOpen] = useState(false);
  const [removeToolModalOpen, setRemoveToolModalOpen] = useState(false);
  const [removeToolId, setRemoveToolId] = useState('');
  const [removeToolTitle, setRemoveToolTitle] = useState('');

  useEffect(() => {
    async function loadTools() {

      let params = (search !== '') ? { tag: search } : {};
      if (tagSearch) {
        params = { ...params, tagSearch };
      }

      const response = await api.get('tools', { params });

      setTools(response.data);
    }

    loadTools();
  }, [search, tagSearch]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleCheckboxChange = e => {
    setTagSearch(e.target.checked);
  };

  const toggleModal = modal => {
    if (modal === 'new') {
      setNewToolModalOpen(!newToolModalOpen);
    } else {
      setRemoveToolModalOpen(!removeToolModalOpen);
    }
  };

  const openRemoveToolModal = (id, title) => {
    setRemoveToolId(id);
    setRemoveToolTitle(title);
    toggleModal('remove');
  };

  const addToolInList = tool => {
    setTools([...tools, tool]);
  };

  const removeToolFromList = () => {
    setTools(tools.filter(tool => tool._id !== removeToolId));
  };

  return (
    <>
      <Content>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>

        <Controls>
          <div>
            <input type="text" placeholder="Search..." onChange={handleChange} />
            <span>
              <input type="checkbox" name="searchTags" id="searchTags" onChange={handleCheckboxChange} />
              <label htmlFor="searchTags">Search in tags only</label>
            </span>
          </div>
          <button onClick={() => toggleModal('new')}>
            <MdAdd size={20} /> Add
          </button>
        </Controls>

        <ToolList>
          {tools.map(tool => (
            <li key={tool._id}>
              <Tool
                data={tool}
                searchTerm={search}
                removeAction={openRemoveToolModal}
              />
            </li>
          ))}
        </ToolList>
      </Content>

      <NewToolModal
        isOpen={newToolModalOpen}
        toggleModal={toggleModal}
        addToolInList={addToolInList}
      />

      <RemoveToolModal
        isOpen={removeToolModalOpen}
        toggleModal={toggleModal}
        id={removeToolId}
        title={removeToolTitle}
        removeToolFromList={removeToolFromList}
      />
    </>
  );
}