import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainComponent from './MainComponent';
function App() {
  const [name, setName] = useState('World');

  return (
    <div>
      <MainComponent></MainComponent>
    </div>
    // <main className="w-screen h-screen flex flex-col gap-8 justify-center items-center max-w-2xl mx-auto">
    //   <h1 className="text-6xl">Hello {name} and good luck 😄!</h1>
    //   <h3 className="text-3xl font-semibold">
    //     For this one, please stick to React, CSS and tailwindcss! 💃
    //   </h3>
    //   <p>
    //     This template also has font awesome icon library installed as well. Feel
    //     free to use these icons{" "}
    //     <a
    //       className="text-blue-500 border-b-2 border-current w-[max-content] inline-flex gap-2 items-center"
    //       href="https://fontawesome.com/search?m=free&s=solid%2Cbrands%2Cregular"
    //     >
    //       Font Awesome
    //       <FontAwesomeIcon icon={["fas", "font-awesome"]} />
    //     </a>{" "}
    //     or whatever icon library you want to use :3
    //   </p>
    //   <input
    //     className="border-2 border-yellow-500 rounded p-4 text-2xl w-full"
    //     name="name"
    //     placeholder="name"
    //     value={name}
    //     onChange={({ target }) => setName(target.value)}
    //   />
    // </main>
  );
}

export default App;
