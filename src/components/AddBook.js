import React from 'react';

function AddBook() {
  return (
    <div className="addBook_container">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input />
        <select name="category" required>
          <option value="" disabled selected hidden>Category</option>
          <option value="comedy">comedy</option>
          <option value="drama">drama</option>
          <option value="classic">classic</option>
        </select>
        <button type="button" className="blue_btn">Add Book</button>

      </form>
    </div>
  );
}

export default AddBook;
