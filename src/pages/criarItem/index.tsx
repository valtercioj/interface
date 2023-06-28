import React from "react";
import Layout from "@/components/Layout";

function index() {
  return (
    <Layout>
      <div className="flex h-full w-full flex-col items-center pl-4 lg:items-start lg:pl-12">
        <div className="mt-4 flex h-full w-full flex-wrap items-center justify-around md:mt-16">
          <h1 className="mr-auto pl-3 font-Montserrat text-[2.5rem] font-bold leading-[37.57px] text-black  ">
            INSERIR ITEM
          </h1>
        </div>
        <form className="mr-auto mt-28 flex h-full flex-col gap-y-4 pl-4 font-Montserrat text-base font-bold leading-5 text-black">
          <div className="flex flex-col">
            <label htmlFor="nome">Nome</label>{" "}
            <input
              type="text"
              name="nome"
              className="h-8 w-96 rounded border border-[#CCC] bg-white-default pl-4 md:w-[25.25rem]"
            />
          </div>
          <div className="flex flex-col">
            {" "}
            <label htmlFor="descricao">Descrição</label>{" "}
            <textarea
              name="descricao"
              className="h-[8.25rem] rounded border border-[#CCC] bg-white-default px-4 pt-2 md:w-[25.125rem]"
            ></textarea>
          </div>
          <div className="mb-4 mt-5 flex flex-col">
            <button
              type="button"
              className="mb-8 h-9 w-16 rounded-[4px] border border-green-500 bg-yellow-400 font-Montserrat text-sm text-white-default hover:cursor-pointer"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default index;
