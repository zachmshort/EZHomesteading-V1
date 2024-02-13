import DropDownButtons from '../../components/shop/DropDownButtons';
import CoOpNavBar from '../../components/navbar/CoOpNavBar';
import ShopByCategory from '../../components/shop/ShopByCategory';


// const coOpProfile= [
//     {
//         username: 'Simple Farm',
//         firstName: 'Zach',
//         profilePic: '/images/.jpg',
//         profileBanner: '/images/.jpg',
//         bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quam neque amet quaerat esse aut dolorum aliquid necessitatibus. Inventore a expedita sit explicabo itaque, vitae quisquam eum. Praesentium, magni qui?',

//     },
// ]

// const products= [
//     {
//         name:'',
//         quantity:'',
//         price:'',
//         description:'',

//     }
// ]

export default function CoOpStore() {

return (
    <>
        <CoOpNavBar />
        <ShopByCategory />
        <DropDownButtons /> 
    </>
    );
}