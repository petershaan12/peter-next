import Image from "next/image";
import React from "react";

export default function Tools() {
  return (
    <>
      <main className="container w-1/2 -mt-8">
        <section className="container px-8 md:px-0">
          <h2 className="text-4xl font-bold font-helvetica">Project Aku</h2>
          <p>
            berikut adalah experience aku dibidang{" "}
            <span className="bg-yellow-200  dark:bg-white text-black">
              Pekerjaan
            </span>
          </p>

          <div className="mt-10 mb-5 flex flex-row items-center gap-4">
            <h1 className=" bg-neutral-200 dark:bg-slate-700 px-2 py-1 text-sm">
              Project
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a href="https://www.unai.edu" target="_blank">
              <div className="rounded-xl overflow-clip relative transition-all border border-transparent dark:hover:border-white hover:border-black cursor-pointer">
                <Image
                  src="/unai.png"
                  width={500}
                  height={500}
                  class="aspect-[12/6]"
                />
              </div>
              <div className="mt-2 px-2 py-1 w-full">
                <h6 className="font-medium text-sm">
                  Universitas Advent Indonesia
                </h6>
                <p className="font-regular text-xs">
                  menggunakan full wordpress
                </p>
              </div>
            </a>
            <a href="https://www.online.unai.edu" target="_blank">
              <div className="rounded-xl overflow-clip relative transition-all border border-transparent dark:hover:border-white hover:border-black cursor-pointer">
                <Image
                  src="/online.unai.png"
                  width={500}
                  height={500}
                  class="aspect-[12/6]"
                />
              </div>
              <div className="mt-2 px-2 py-1 w-full">
                <h6 className="font-medium text-sm">
                  Fitur Evaluasi Diri online.unai.edu
                </h6>
                <p className="font-regular text-xs">
                  menggunakan php dan sql server
                </p>
              </div>
            </a>
            <a href="http://www.indodrives.rf.gd" target="_blank">
              <div className="rounded-xl overflow-clip relative transition-all border border-transparent dark:hover:border-white hover:border-black cursor-pointer">
                <Image
                  src="/indodrives.jpeg"
                  width={300}
                  height={500}
                  class="aspect-[12/6]"
                />
              </div>
              <div className="mt-2 px-2 py-1 w-full">
                <h6 className="font-medium text-sm">Indo Drives Solution</h6>
                <p className="font-regular text-xs">
                  menggunakan full wordpress
                </p>
              </div>
            </a>
          </div>
          <div className="mt-10 mb-5 flex flex-row items-center gap-4">
            <h1 className=" bg-neutral-200 dark:bg-slate-700 px-2 py-1 text-sm">
              Experience
            </h1>
          </div>
          <div class="prose prose-zinc dark:prose-invert max-w-full w-full">
            <p>August 2023 - Present</p>
            <h1 className="text-3xl  my-2">
              <span className="font-helvetica">Programmer at</span>
              <a
                href="https://unai.edu"
                target="_blank"
                className="underline px-2 "
              >
                Universitas Advent Indonesia
              </a>
            </h1>

            <p>
              Create & Develop Website{" "}
              <span className="underline">unai.edu (NEW 2023)</span> <br />
              Development & Database Administrator Module UNAI (Universitas
              Advent Indonesia)
            </p>
            <ul>
              <li>php</li>
              <li>Bootstrap</li>
              <li>mysql</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}