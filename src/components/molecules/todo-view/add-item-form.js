import React, { useState } from 'react';
import Button from '../../atoms/button';

const AddItemForm = props => {
  const { onClose, onSave } = props;
  const [itemName, changeItemName] = useState('');
  const [comments, changeComments] = useState('');

  const onItemNameChange = e => {
    const value = e.target.value;
    changeItemName(value);
  };

  const onCommentsChange = e => {
    const value = e.target.value;
    changeComments(value);
  };

  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSave(itemName);
    }}>
      <input type="text" className="text-field" name="itemName" value={itemName} onChange={onItemNameChange} placeholder="Item Name" required />
      <textarea name="comments" className="text-area" value={comments} onChange={onCommentsChange}  placeholder="Comments" rows="4" />
      <div className="actions">
        <input type="submit" value="SAVE" className="toggle-button-save" onSubmit={() => onSave(itemName, comments)} />
        <Button buttonText="CANCEL" extraClass="toggle-button-cancel" clickHandler={onClose} />
      </div>
    </form>
  );
};

export default AddItemForm;