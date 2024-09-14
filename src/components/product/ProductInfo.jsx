import { useEffect, useState } from "react";
const ProductInfo = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!product) return;

    setImages([
      {
        image: product?.thumbnail,
        text: "",
      },
    ]);

    product?.gallery?.length > 0 &&
      product?.gallery?.map((gImage) => {
        setImages((prev) => [...prev, { image: gImage, text: "" }]);
      });
  }, [product]);
  return (
    <div className="col-md-9 col-sm-12">
      <div className="row background_white">
        <div className="col-md-6 col-sm-12 product_image">
          <div className="row">
            <h1>product infp</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

