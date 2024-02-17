import ModelViewer from '../../unused/components/ModelViewer'
import CoOpNavBar from '../../components/navbar/CoOpNavBar';
export default function Profile() {

return (
    <div className='m-0 bg-color-black'>
        <CoOpNavBar />
        <h1 className='text-2xl text-center mt-10 font-serif'>Zach is working hard building this page <span>RIGHT NOW</span>, play with this 3D model while you wait!</h1>
        <ModelViewer modelPath={"/3d/garden.glb"} />
    </div>
    );
}
