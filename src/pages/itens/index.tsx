import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

function index() {
  return (
    <Layout>
      <div className="mr-7 flex h-full w-full flex-col items-center pl-4 lg:items-start lg:pl-12">
        <div className="mt-4 flex h-full w-full flex-wrap items-center justify-around md:mt-16">
          <h1 className="leading-[ 37.57px] mr-auto  pl-3 font-Montserrat text-[1.375rem] font-bold text-black  ">
            LISTA DE ITENS
          </h1>
          <div className="flex flex-col items-center	gap-y-4 md:flex-row md:gap-y-0">
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="Pesquisar..."
                className="h-9  w-[13.25rem]	rounded-lg border	border-[#E5E5E5] pl-3	font-Montserrat text-[#C4C4C4] placeholder:font-Montserrat placeholder:text-sm placeholder:font-normal placeholder:text-[#C4C4C4]"
              />
              <div className="absolute right-3 top-3">
                <Image
                  src="/search.svg"
                  alt="busca"
                  width={14}
                  height={14}
                  className="cursor-pointer text-gray-400"
                />
              </div>
            </div>
            <Image
              src="/filter.svg"
              alt="filtro"
              width={14}
              height={22}
              className="mx-7 cursor-pointer text-gray-400"
            />
            <button
              type="button"
              className="h-11  w-[12.438rem]	rounded bg-[#FEAF00]	font-Montserrat text-sm	font-medium text-white-default 	"
            >
              Adicionar Item
            </button>
          </div>
        </div>
        <span className="mb-5 w-full border-b border-[#E5E5E5] text-transparent">
          s
        </span>
        <div className="mb-5 ml-[6.813rem]	font-Montserrat text-xs	font-semibold text-[#ACACAC]	">
          <span className="mr-[7.563rem]">Nome</span>
          <span>Descrição</span>
        </div>
        <div className="flex w-full flex-col gap-y-2.5">
          <div className=" h-[5.313rem] w-full overflow-x-scroll	rounded-lg border bg-white-default md:overflow-auto">
            <div className="ml-[6.813rem] flex h-full items-center font-Montserrat text-sm font-normal	">
              <span className="mr-[6.10rem]">Máscara</span>
              <span>Alguma coisa de item</span>

              <Image
                src="/lapis.svg"
                alt="edit"
                width={19}
                height={19}
                className="ml-auto cursor-pointer text-gray-400"
              />
              <Image
                src="/lixeira.svg"
                alt="deletar"
                width={16}
                height={18}
                className="mx-8 cursor-pointer text-gray-400"
              />
            </div>
          </div>
          <div className=" h-[5.313rem] w-full overflow-x-scroll	rounded-lg border bg-white-default 	md:overflow-auto">
            <div className="ml-[6.813rem] flex h-full items-center font-Montserrat text-sm font-normal	">
              <span className="mr-[6.10rem]">Máscara</span>
              <span>Alguma coisa de item</span>

              <Image
                src="/lapis.svg"
                alt="edit"
                width={19}
                height={19}
                className="ml-auto cursor-pointer text-gray-400"
              />
              <Image
                src="/lixeira.svg"
                alt="deletar"
                width={16}
                height={18}
                className="mx-8 cursor-pointer text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default index;
