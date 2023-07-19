import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
                <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
                    안녕하세요
                    <br className="hidden lg:inline-block" />
                    Brilliant Minds입니다!
                </h1>
                <p className="mb-8 leading-relaxed">
                    우리는 기술의 세계가 어떻게 빠르게 변화하고 있는지를 이해하며, 이 변화를 따라가는 것이 얼마나 중요한지를 압니다. <br />그래서 Brilliant Minds는 최신 트렌드와 기술, 실제 적용 사례, 그리고 세상을 바꿀 수 있는 아이디어에 대해 깊이 있는 토론을 제공합니다.<br />

                    여기서는 개인 블로그처럼 직접 경험과 지식을 게시할 수 있고, 동시에 다른 회원들의 게시글을 읽고, 댓글을 달아 대화를 나눌 수 있는 커뮤니티 공간도 만나보실 수 있습니다.<br />

                    당신이 새로운 기술에 관한 깊이 있는 인사이트를 얻고 싶다면, 혹은 여러분의 지식을 공유하고 다른 열정적인 이들과 네트워킹을 하고 싶다면, Brilliant Minds는 여러분을 위한 공간입니다.<br />

                    오늘도 새로운 발견을 시작해보세요. 함께 성장하고, 배우며, 더 나은 미래를 만들어 나가는 Brilliant Minds 커뮤니티의 일원이 되어보세요.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <a className="btn-project">
                            프로젝트 보러가기
                        </a>
                    </Link>
                </div>
            </div>
            <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
                <Animation />
            </div>
        </>
    );
}
