import DropDownButtons from '../../components/shop/DropDownButtons';
import CoOpNavBar from '../../components/navbar/CoOpNavBar';
// import { useQuery } from "@apollo/client";
// import { QUERY_USER } from "../../utils/queries";
import '../../styles/CoOpStore.css'
import ShopByCategory from "../../components/shop/ShopByCategory";

// import { useEffect } from 'react';

// export const QUERY_USER = gql`
//   query Query($userId: ID!) {
//     User(userId: $userId) {
//       _id
//       address
//       cart
//       email
//       hoursOfOperation
//       password
//       profilePic
//       transactionHistory
//       userProducts
//       userType
//       username
//     }
//   }
// `;

export default function CoOpStore() {
//     const { loading, data } = useQuery(QUERY_USER);
//     useEffect(() => {
//         console.log(loading);

//     if(!loading) {
//         dataConvenience = data?.user($userId) || {}; //convenience varaible for user data based on id (i think)
//         dataConvenience.map((data) => {
//             userDisplay.push(data.username);
//         });
        

//     }
//     }, {loading, data});
// if (dataConvenience) {
return (
    <>
        <CoOpNavBar />
        <ShopByCategory />
        <DropDownButtons />
        
        <div>
            {/* {dataConvenience.map((user) => {
                <h2>{user.username}</h2>
            })} */}
        </div>
    </>
    );
}
// }