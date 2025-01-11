import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/axios';

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await API.get(`products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            className="img-fluid rounded"
            alt={product.name}
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="text-muted">{product.description}</p>
          <h3 className="text-primary">${product.price}</h3>
          <button className="btn btn-success btn-lg mt-3">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
