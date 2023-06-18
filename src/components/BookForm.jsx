import React from 'react';

function BookForm() {
  return (
    <form action="" className="my-5">
      <h4 className="pb-4">ADD NEW BOOK</h4>
      <div className="d-flex w-100 justify-content-between">
        <input
          style={{ width: '50%' }}
          type="text"
          className="form-control py-3"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder="Book title"
        />
        <input
          style={{ width: '30%' }}
          type="text"
          className="form-control py-3"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder="Category"
        />
        <button type="button" className="btn btn-primary px-5">
          ADD BOOK
        </button>
      </div>
    </form>
  );
}

export default BookForm;
