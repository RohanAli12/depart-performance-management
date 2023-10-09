import SidebarComp from './SidebarComp'

const Sidebar = () => {
    return (
        <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 text-white'>
            <SidebarComp />
        </div>
    )
}

export default Sidebar
