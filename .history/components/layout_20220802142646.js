// 중간에 요소들을 만들기 위해서 children을 요소를 즉 넣음 (컨테이너 개념임 )
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    //레아아웃쪽에서 이렇게 해버리면 공통적으로 cssmodule 적용 가능
    <div className='bg-primary'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
