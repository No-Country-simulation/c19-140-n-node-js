'use client'; // Agrega esta línea al principio del archivo

import Background from "@/components/Background.jsx";

import { useState } from "react"; // Importar useState desde React

import Image from "next/image";
import Link from "next/link";
export default function Home() {

   // Estado para controlar qué formulario se debe mostrar
   const [visibleForm, setVisibleForm] = useState('menu'); // Puede ser 'menu', 'crear', 'unirse', 'existente'

   // Función para mostrar el formulario de creación de lista
   const showCreateForm = () => setVisibleForm('crear');

   // Función para mostrar el formulario de unirse a una lista
   const showJoinForm = () => setVisibleForm('unirse');

   // Función para mostrar el formulario de lista existente
   const showExistingListForm = () => setVisibleForm('existente');

   // Función para mostrar el menú principal
   const showMenu = () => setVisibleForm('menu');
   return (
      <main className="relative h-screen">
         <Background src={`/bgPrincipal.jpg`} />
         <div className="absolute top-0 left-0 w-full h-full">
            
            
            <div className="absolute top-0 right-0 h-full w-[42%] bg-white bg-opacity-80 flex items-center justify-center">
               <div className="text-center px-4 py-8">
                  {/* Logo fijo */}
                  <Image src="/MusiQ.png" alt="Logo" width={200} height={100} className="mx-auto" priority />

                  {/*------------------------------inicio MEnu----------------------*/}
                  {visibleForm === 'menu' && (
                     <>
                        <h3 className="text-4xl lg:text-5xl text-[#6d58a5] text-opacity-80">
                           <p className="font-bold">Conéctate</p>
                           <p>a través </p>
                           <p>de la <span className="font-bold text-[#f83a47]">música</span></p>
                        </h3>
                        <h5 className="text-base text-lg text-[#2f2f2f] mt-4 text-left">
                           <p>Crea y únete a las listas de música,</p>
                           <p>comparte con tus amigos y disfruta de</p>
                           <p>los buenos momentos</p>
                        </h5>
                        <div className="mt-6 text-left flex gap-14 justify-center">
                           <button
                              onClick={showCreateForm}
                              className="bg-[#6d58a5] text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-500 border border-purple-500 transition duration-300"
                           >
                              Crear lista
                           </button>
                           <button
                              onClick={showJoinForm}
                              className="bg-[#6d58a5] text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-500 border border-purple-500 transition duration-300"
                           >
                              Unirme a la lista
                           </button>
                        </div>
                        <div className="mt-6 text-left">
                           <Link href="#" className="text-[#6d58a5] hover:underline"
                              onClick={(e) => {
                                 e.preventDefault();
                                 showExistingListForm();
                              }}>
                              Tengo una lista creada
                           </Link>
                        </div>
                     </>
                  )}
                  {/*------------------------------Fin MEnu----------------------*/}
                  {/*------------------------------inicio Formulario----------------------*/}
                  {visibleForm === 'crear' && (


                     <form className="space-y-4 mt-8">
                        <h3 className="text-4xl lg:text-2xl text-[#6d58a5] text-opacity-80">
                           Crear lista
                        </h3>
                        <div>
                           <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre de la lista</label>
                           <input
                              type="text"
                              id="nombre"
                              name="nombre"
                              required
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                        </div>
                        <div>
                           <label htmlFor="contraseña" className="block text-sm font-medium text-gray-700">Contraseña</label>
                           <input
                              type="password"
                              id="contraseña"
                              name="contraseña"
                              required
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                        </div>
                        <fieldset>
                           <legend className="text-sm font-medium text-gray-700">Estado de la lista</legend>
                           <div className="flex items-center space-x-4 mt-2">
                              <div className="flex items-center">
                                 <input
                                    type="radio"
                                    id="publico"
                                    name="estado"
                                    value="publico"
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                 />
                                 <label htmlFor="publico" className="ml-2 text-sm text-gray-600">Público</label>
                              </div>
                              <div className="flex items-center">
                                 <input
                                    type="radio"
                                    id="privado"
                                    name="estado"
                                    value="privado"
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                 />
                                 <label htmlFor="privado" className="ml-2 text-sm text-gray-600">Privado</label>
                              </div>
                           </div>
                        </fieldset>
                        <button
                           type="submit"
                           className="bg-[#6d58a5] text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-500 border border-purple-500 transition duration-300 mr-8"
                        >
                           Crear lista
                        </button>
                        <button
                           type="button"
                           onClick={showMenu}
                           className="bg-[#6d58a5] text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-500 border border-purple-500 transition duration-300"
                        >
                           Volver al inicio
                        </button>
                     </form>
                  )}
                  {/*------------------------------Fin Formulario----------------------*/}
                  {/*------------------------------inicio Formulario Unirse a Lista----------------------*/}
                  {visibleForm === 'unirse' && (
                     <form className="space-y-4 mt-8">
                        <h3 className="text-4xl lg:text-2xl text-[#6d58a5] text-opacity-80">
                           Unirme a la lista
                        </h3>
                        <div>
                           <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">Ingresa el código</label>
                           <input
                              type="text"
                              id="codigo"
                              name="codigo"
                              required
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                        </div>
                        <button
                           type="submit"
                           className="bg-[#6d58a5] text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-500 border border-purple-500 transition duration-300 mr-8"
                        >
                           Unirme
                        </button>
                        <button
                           type="button"
                           onClick={showMenu}
                           className="bg-[#6d58a5] text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-500 border border-purple-500 transition duration-300"
                        >
                           Volver al inicio
                        </button>
                     </form>
                  )}
                  {/*------------------------------Fin Formulario Unirse a Lista----------------------*/}
                  {/*------------------------------inicio Formulario Lista Existente----------------------*/}
                  {visibleForm === 'existente' && (
                     <form className="space-y-4 mt-8">
                        <h3 className="text-4xl lg:text-3xl text-[#6d58a5] text-opacity-80">
                           Ingresar a la lista creada
                        </h3>
                        <div>
                           <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre de la lista</label>
                           <input
                              type="text"
                              id="nombre"
                              name="nombre"
                              required
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                        </div>
                        <div>
                           <label htmlFor="contraseña" className="block text-sm font-medium text-gray-700">Contraseña</label>
                           <input
                              type="password"
                              id="contraseña"
                              name="contraseña"
                              required
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                           />
                        </div>
                        <button
                           type="submit"
                           className="bg-[#6d58a5] text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-500 border border-purple-500 transition duration-300 mr-8"
                        >
                           Ingresar
                        </button>
                        <button
                           type="button"
                           onClick={showMenu}
                           className="bg-[#6d58a5] text-white px-4 py-2 rounded-md hover:bg-white hover:text-purple-500 border border-purple-500 transition duration-300"
                        >
                           Volver al inicio
                        </button>
                     </form>
                  )}
                  {/*------------------------------Fin Formulario Lista Existente----------------------*/}
               </div>
            </div>
         </div>
      </main>
   );
}
