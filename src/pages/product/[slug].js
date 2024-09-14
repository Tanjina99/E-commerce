import HeadComp from "@/components/shared/HeadComp";
import Header from "@/components/shared/Header/Header";
import { Empty } from "antd";
import axios from "axios";
import dynamic from "next/dynamic";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const ProductInfo = dynamic(
    async () => await import("@/components/product/ProductInfo"),
    {
      ssr: false,
    }
  );
  

const SingleProduct = ({ product }) => {
    console.log('Product Info:', product); 
    // const router = useRouter();
    // useEffect(() => {
    //     axios.get(
    //         `https://staging-be-ecom.techserve4u.com/api/product/details/${router.query?.slug}`
    //     ).then(res => console.log(res.data));
    // }, []);
  return (
    <div>
       <HeadComp title="Product Dynamic Page" />
      <Header />

      <div id="product_details">
        <div className="main_container">
          <div className="row mt-2">
            {product ? (
              <ProductInfo product={product} />
            ) : (
              <div className="col-md-9 col-sm-12 mt-5">
                <Empty description="No product found" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

SingleProduct.getInitialProps = async (ctx) => {   // server-side rendering
    try {
      const res = await axios.get(
        `https://staging-be-ecom.techserve4u.com/api/product/details/${ctx.query?.slug}`
      );
      console.log('API Response:', res.data);  // Log the full data structure
  
      return {
        product: res.data?.product || null, // Make sure product exists in res.data
      };
    } catch (error) {
      console.error('Error fetching product data:', error);
  
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  };
  

export default SingleProduct;
