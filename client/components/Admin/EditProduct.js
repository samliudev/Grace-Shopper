import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchSingleProduct, deleteProduct } from '../../store/products';

function EditProduct() {
  const [post, setPost] = useState({});
  const id = 1;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPost({ ...post, [name]: value });
    console.log(post);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editDataById = async () => {
      try {
        const response = await axios
          .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
              id: id,
              title: post.title,
              body: post.body,
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
          .then((response) => response.json())
          .then((json) => console.log(json));
        console.warn(response.data);
      } catch (error) {
        console.warn(error);
      }
    };
    editDataById();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Title</label>
              <input type="text" name="title" value={post.title} onChange={handleChange} className="form-control" id="title" />
            </div>
            <div className="form-group">
              <label htmlFor="position">Body</label>
              <input type="text" name="body" value={post.body} onChange={handleChange} className="form-control" id="body" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
