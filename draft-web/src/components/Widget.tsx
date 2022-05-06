import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function WidgetPopover() {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button
        className="flex items-center
      bg-[#8257E5] p-3 rounded-full 
      group hover:transition-all hover:duration-500 hover:ease-in-out"
      >
        <ChatTeardropDots className="w-6 h-6 " />
        <span className="max-w-0 overflow-hidden group-hover:max-w-min group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}

// export function Widget() {
//   const [isWidgetOpen, setIsWidgetOpen] = useState(false);

//   function toggleWidgetVisibility() {
//     setIsWidgetOpen(!isWidgetOpen);
//   }

//   return (
//     <div className="absolute bottom-6 right-6 flex flex-col  items-end">
//       {/* { isWidgetOpen ? <p>Hello World</p> : null } */}
//       {isWidgetOpen && (
//         <p className="mb-2 p-6 bg-zinc-700 text-zinc-100 rounded-md ">
//           Hello World
//         </p>
//       )}

//       <button
//         onClick={toggleWidgetVisibility}
//         className="flex items-center
//       bg-violet-500 text-zinc-100 p-3 rounded-full
//       group transition-all"
//       >
//         <ChatTeardropDots className="w-6 h-6 " />
//         <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out">
//           <span className="pl-2">Feedback</span>
//         </span>
//       </button>
//     </div>
//   );
// }
