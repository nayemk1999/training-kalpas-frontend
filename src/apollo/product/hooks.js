import { useQuery } from "@apollo/react-hooks";
import { get_all_products } from "./query";

export const GetAllProducts = (limit, page) => {
  // const { data, loading, error, refetch } = useQuery(get_all_products, {
  //   variables: {
  //     limit: 10,
  //     page: 0,
  //     filter: "",
  //   },
  // });
  console.log("return", limit, page);

  return {
    limit, page
  };
};

// import { useQuery } from "@apollo/react-hooks";
// import React from "react";
// import { Query } from "react-apollo";
// import { get_all_products } from "./query";
// function Query(props) {
//   return props.children(useQuery(props.keyName, props.fn, props.options));
// }
// const ProductHook = (props) => {
//   const { limit, page, filter } = props;
//   return (
//     <Query
//       query={get_all_products}
//       variables={{
//         limit: limit,
//         page: page,
//         filter: filter,
//       }}
//       notifyOnNetworkStatusChange
//     >
//       {({ loading, error, data, refetch, networkStatus }) => {
//         if (networkStatus === 4) return "Refetching!";
//         if (loading) return null;
//         if (error) return `Error! ${error}`;

//         return (
//           <div>
//             <img
//               src={data.dog.displayImage}
//               style={{ height: 100, width: 100 }}
//             />
//             <button onClick={() => refetch()}>Refetch!</button>
//           </div>
//         );
//       }}
//     </Query>
//   );
// };

// function ProductHook({children}) {
//   const productFetch = GetAllProducts()
//   return children(productFetch)
// }

// export default ProductHook;
