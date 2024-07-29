import Background from "@/components/Background.jsx";

export default function Home() {
   return (
      <main className="relative h-screen">
         <Background src={`/bgPrincipal.jpg`} />
         <div className="absolute top-0 left-0 w-full h-full">
             {/* Fondo blanco transparente */}
          {/*  <div className="absolute top-0 right-0 h-full w-[42%] bg-white bg-opacity-50 flex items-center justify-center">*/}
            <div className="absolute top-0 right-0 h-full w-[42%] flex items-center justify-center">
               <div className="text-center px-4 py-8">
                  <h3 className="text-4xl lg:text-5xl text-purple-500 text-opacity-80">
                     <div className="font-bold">Conéctate</div>
                     <div>a través </div>
                     <div>de la <span className="font-bold text-red-500">música</span></div>
                  </h3>
                  <h5 className="text-base text-lg text-gray-700 mt-4 text-left">
                     <div> Crea y únete a las listas de música,</div>
                     <div>comparte con tus amigos y disfruta de</div>
                     <div>los buenos momentos</div>
                  </h5>
                  <div className="mt-6 text-left flex gap-14 justify-center">
                     <a
                        href="#"
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-white hover:text-purple-500 border border-purple-500 transition duration-300"
                     >
                        Crear lista
                     </a>
                     <a
                        href="#"
                        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-white hover:text-purple-500 border border-purple-500 transition duration-300"
                     >
                        Unirme a la lista
                     </a>
                  </div>
                  <div className="mt-6 text-left">
                     <a href="#" className="text-purple-500 hover:underline">
                        Tengo una lista creada
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
}
