// import {useInfiniteQuery } from "react-query";
// import axios from "axios";

// const fetchColors = ({pageParm = 1} ) =>{
//     return axios.get(`http://localhost:4000/users?_limit=2&_page=${pageParm}`)
// }

// export const QueryClient = () =>{

//     const {isLoading, isError, error, data, hasNextPage} = useInfiniteQuery(
//         'users', 
//         fetchColors,
//         {
//             getNextPageParam: (_lastPage, pages) =>{
//                 return pages.length < 4){
//                     return pages.length + 1
//                 }else{
//                     return undefined
//                 }
//             }
//         }
        
//         )

// if(isLoading){
//     return <h1>Loading....</h1>
// }

// if(isError){
//     return <h2>{error.message}</h2>
// }

// return(
//     <>
//     <div>
//         {data?.data.map((pers)=>{
//             return(
//                 <div key={pers.id}>
//                     <h2>{pers.name}</h2>
//                 </div>
//             )
//         })}
//     </div>
//     </>
// )

// }

// export default QueryClient