import React from "react";

const Dashboard = () => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row justify-center items-center">
          <div className="mt-2 flex flex-wrap justify-center items-center gap-4">
            <a
              href="#"
              className="flex h-40 w-80 flex-col items-center justify-center rounded-md border border-dashed border-gray-600 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
            >
              <div className="flex flex-row items-center justify-center">
                <svg
                  className="mr-3 fill-gray-500/95"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                >
                  <path d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2zm0 16H4.125c-.057 0-.096-.016-.113-.016-.007 0-.011.002-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046z"></path>
                  <path d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z"></path>
                </svg>
                <span className="font-bold text-gray-600"> 4.6K </span>
              </div>
              <div className="mt-2 text-sm text-gray-400">Berita</div>
            </a>

            <a
              href="#"
              className="flex h-40 w-80 flex-col items-center justify-center rounded-md border border-dashed border-gray-600 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
            >
              <div className="flex flex-row items-center justify-center">
                <svg
                  className="mr-3 fill-gray-500/95"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.282 12.064c-.428.328-.72.609-.875.851-.155.24-.249.498-.279.768h2.679v-.748H5.413c.081-.081.152-.151.212-.201.062-.05.182-.142.361-.27.303-.218.511-.42.626-.604.116-.186.173-.375.173-.578a.898.898 0 0 0-.151-.512.892.892 0 0 0-.412-.341c-.174-.076-.419-.111-.733-.111-.3 0-.537.038-.706.114a.889.889 0 0 0-.396.338c-.094.143-.159.346-.194.604l.894.076c.025-.188.074-.317.147-.394a.375.375 0 0 1 .279-.108c.11 0 .2.035.272.108a.344.344 0 0 1 .108.258.55.55 0 0 1-.108.297c-.074.102-.241.254-.503.453zm.055 6.386a.398.398 0 0 1-.282-.105c-.074-.07-.128-.195-.162-.378L4 18.085c.059.204.142.372.251.506.109.133.248.235.417.306.168.069.399.103.692.103.3 0 .541-.047.725-.14a1 1 0 0 0 .424-.403c.098-.175.146-.354.146-.544a.823.823 0 0 0-.088-.393.708.708 0 0 0-.249-.261 1.015 1.015 0 0 0-.286-.11.943.943 0 0 0 .345-.299.673.673 0 0 0 .113-.383.747.747 0 0 0-.281-.596c-.187-.159-.49-.238-.909-.238-.365 0-.648.072-.847.219-.2.143-.334.353-.404.626l.844.151c.023-.162.067-.274.133-.338s.151-.098.257-.098a.33.33 0 0 1 .241.089c.059.06.087.139.087.238 0 .104-.038.193-.117.27s-.177.112-.293.112a.907.907 0 0 1-.116-.011l-.045.649a1.13 1.13 0 0 1 .289-.056c.132 0 .237.041.313.126.077.082.115.199.115.352 0 .146-.04.266-.119.354a.394.394 0 0 1-.301.134zm.948-10.083V5h-.739a1.47 1.47 0 0 1-.394.523c-.168.142-.404.262-.708.365v.754a2.595 2.595 0 0 0 .937-.48v2.206h.904zM9 6h11v2H9zm0 5h11v2H9zm0 5h11v2H9z"></path>
                </svg>
                <span className="font-bold text-gray-600"> 45 </span>
              </div>
              <div className="mt-2 text-sm text-gray-400">Kategori</div>
            </a>

            <a
              href="#"
              className="flex h-40 w-80 flex-col items-center justify-center rounded-md border border-dashed border-gray-600 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
            >
              <div className="flex flex-row items-center justify-center">
                <svg
                  className="mr-3 fill-gray-500/95"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"></path>
                </svg>
                <span className="font-bold text-gray-600"> 120K </span>
              </div>
              <div className="mt-2 text-sm text-gray-400">User</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;