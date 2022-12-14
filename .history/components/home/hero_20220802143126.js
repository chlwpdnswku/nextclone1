import Ani from '../home/lottie';
import Link from 'next/link';
export default function Hero() {
  return (
    <>
      <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          한글을
        </h1>
        <p className='mb-8 leading-relaxed'>
          현재 next js 를 통해 간단한 웹 사이트를 구현을 하고 이있으며 반응형 웹
          사이트 인지는 모르겠지만 공부를 하는중입니다. Link href를 해줘야 css가
          적용이 된다 . link to 그리고 link from 검색해서 어따 쓰는지 공부하기
        </p>
        <div className='flex justify-center'>
          <Link href='/first'>
            <a className='btn-project'>프로젝트 보러</a>
          </Link>
        </div>
      </div>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
        <Ani />
      </div>
    </>
  );
}
