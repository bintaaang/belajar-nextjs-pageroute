import { GetStaticPaths, GetStaticProps } from "next";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <strong>${product.price}</strong>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  const paths = products.map((p) => ({
    params: { id: p.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params?.id}`);
  const product: Product = await res.json();

  return {
    props: {
      product,
    },
  };
};
