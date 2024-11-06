import Head from "next/head";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Head>
        <title>404 | 前端森林</title>
      </Head>
      <div className="main-content">
        <div className="row">
          <div className="col-12 col-lg-12">
            <section className="data-null text-center py-[100px] px-0">
              <h1 className="font-theme text-8xl p-0">404</h1>
              <p>抱歉，没有你要找的内容...</p>
              <div className="pt-[30px]">
                <Link
                  href="/"
                  className="hover:top-[2px] hover:bg-[#333] hover:shadow-none hover:transition-all text-white relative top-0 p-[10px_75px] bg-[#f1404b] font-semibold rounded-[900px] transition-all shadow-[0px_5px_20px_-3px_rgba(249,100,90,0.6)]"
                >
                  返回首页
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
