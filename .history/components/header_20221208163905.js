import React from 'react';
// 리랜더링 문제때문에 Link 를 써야댐
import Link from 'next/link';
import Dark from './darkmode';

function header() {
  return (
    <>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <Link href='/'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                linejoin='round'
                strokeWidth='2'
                className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
                viewBox='0 0 24 24'
              >
                <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
              </svg>
              <span className='ml-3 text-xl'>w</span>
            </a>
          </Link>
          <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
            <Link href='/'>
              <a className='mr-5 hover:text-gray-900'>홈</a>
            </Link>

            <Link href='/first'>
              <a className='mr-5 hover:text-gray-900'>프로젝트</a>
            </Link>

            <a
              href='https://open.kakao.com/o/s1BHyWgc'
              className='mr-5 hover:text-gray-900'
            >
              연락하기
            </a>
          </nav>
          {/* 다크모드 토글 버튼 작업해야함 */}
          <Dark />
          {/* console.log(DarkModeToggleButton); */}
        </div>
      </header>
    </>
  );
}

export default header;
