import Animation from "./animation"

export default function Hero() {
    return (
        <>
            <div className="flex-grow text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요
                    <br className="hidden lg:inline-block" />
                    오늘도 열심히
                </h1>
                <p className="mb-8 leading-relaxed">
                    Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled.
                    Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
                    Pour-over meditation PBR
                    &amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        프로젝트 보러가기
                    </button>
                </div>
            </div>

        </>
    )
}