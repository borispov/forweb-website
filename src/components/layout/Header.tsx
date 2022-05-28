// import { NavbarData } from '@/lib/siteData';

export default function Header() {
  return (
    <header className='bg-transparent mt-8'>
      <div className='flex h-14 items-center justify-between'>

        <div className="">
          <a href="" className="hover:text-gray-600"></a>
          <a href="" className="hover:text-gray-600"></a>
        </div>

        <div className="logo pt-12">
          <h1>Forweb</h1>
          {/* <img src="" alt="" className="logo__image" /> */}
        </div>

        <div className="">
          <a href="" className="hover:text-gray-600"></a>
          <a href="" className="hover:text-gray-600"></a>
        </div>

      </div>
    </header>
  );
}
